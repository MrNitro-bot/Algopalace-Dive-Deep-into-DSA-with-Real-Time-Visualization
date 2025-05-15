import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function SelectionSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Selection Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning."
      intuition={[
        "Selection Sort divides the input array into two parts: a sorted subarray and an unsorted subarray.",
        "Initially, the sorted subarray is empty and the unsorted subarray is the entire input array.",
        "The algorithm repeatedly selects the smallest element from the unsorted subarray and moves it to the end of the sorted subarray.",
        "This process continues until the entire array is sorted.",
      ]}
      approach={[
        "Find the minimum element in the unsorted array.",
        "Swap it with the first element of the unsorted part.",
        "Move the boundary between the sorted and unsorted subarrays one element to the right.",
        "Repeat until the entire array is sorted.",
      ]}
      complexity={{
        time: "O(n²) for all cases (best, average, and worst) because the algorithm always makes n(n-1)/2 comparisons.",
        space: "O(1) as it only requires a single additional memory space for the temporary variable used in swapping.",
      }}
      examples={[
        {
          input: "arr = [64, 25, 12, 22, 11]",
          output: "[11, 12, 22, 25, 64]",
          explanation: "The algorithm repeatedly finds the minimum element and puts it at the beginning.",
        },
        {
          input: "arr = [5, 1, 4, 2, 8]",
          output: "[1, 2, 4, 5, 8]",
          explanation: "The algorithm sorts the array by selecting the minimum element in each pass.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    
    // One by one move boundary of unsorted subarray
    for (int i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Swap the found minimum element with the first element
        swap(arr[min_idx], arr[i]);
    }
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    int n = arr.size();
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    selectionSort(arr);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class SelectionSort {
    void selectionSort(int[] arr) {
        int n = arr.length;
        
        // One by one move boundary of unsorted subarray
        for (int i = 0; i < n - 1; i++) {
            // Find the minimum element in unsorted array
            int min_idx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                }
            }
            
            // Swap the found minimum element with the first element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
    
    public static void main(String[] args) {
        SelectionSort ob = new SelectionSort();
        int[] arr = {64, 25, 12, 22, 11};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        ob.selectionSort(arr);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def selection_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Find the minimum element in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Example usage
if __name__ == "__main__":
    arr = [64, 25, 12, 22, 11]
    
    print("Original array:", arr)
    
    selection_sort(arr)
    
    print("Sorted array:", arr)`,
        javascript: `function selectionSort(arr) {
    const n = arr.length;
    
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Swap the found minimum element with the first element
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
}

// Example usage
const arr = [64, 25, 12, 22, 11];

console.log("Original array:", arr);

selectionSort(arr);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
