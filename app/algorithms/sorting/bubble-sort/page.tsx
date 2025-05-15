import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function BubbleSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Bubble Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted."
      intuition={[
        "Bubble Sort works by repeatedly stepping through the list and comparing adjacent elements.",
        "If the elements are in the wrong order, they are swapped.",
        "This process is repeated until no more swaps are needed, which indicates that the list is sorted.",
        "The algorithm gets its name because smaller elements 'bubble' to the top of the list with each iteration.",
      ]}
      approach={[
        "Start at the beginning of the array.",
        "Compare the current element with the next element.",
        "If the current element is greater than the next element, swap them.",
        "Move to the next element and repeat steps 2-3 until the end of the array.",
        "After one complete pass, the largest element will be at the end of the array.",
        "Repeat steps 1-5 for the remaining elements (excluding the already sorted elements at the end).",
        "Continue until no more swaps are needed.",
      ]}
      complexity={{
        time: "O(n²) in worst and average cases, O(n) in best case (when the array is already sorted)",
        space: "O(1) as it only requires a single additional memory space for the swap operation",
      }}
      examples={[
        {
          input: "[5, 1, 4, 2, 8]",
          output: "[1, 2, 4, 5, 8]",
          explanation: "The algorithm performs multiple passes, swapping adjacent elements until the array is sorted.",
        },
        {
          input: "[9, 8, 7, 6, 5]",
          output: "[5, 6, 7, 8, 9]",
          explanation: "This is the worst-case scenario where every element needs to be swapped.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;
    
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
            // Traverse the array from 0 to n-i-1
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        // If no swapping occurred in this pass, array is sorted
        if (!swapped)
            break;
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    
    cout << "Original array: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    
    bubbleSort(arr);
    
    cout << "Sorted array: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            
            // Last i elements are already in place
            for (int j = 0; j < n - i - 1; j++) {
                // Traverse the array from 0 to n-i-1
                // Swap if the element found is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // If no swapping occurred in this pass, array is sorted
            if (!swapped)
                break;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        bubbleSort(arr);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def bubble_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        swapped = False
        
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # If no swapping occurred in this pass, array is sorted
        if not swapped:
            break

# Example usage
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    print("Original array:", arr)
    
    bubble_sort(arr)
    
    print("Sorted array:", arr)`,
        javascript: `function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Traverse the array from 0 to n-i-1
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred in this pass, array is sorted
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Original array:", arr);

bubbleSort(arr);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
