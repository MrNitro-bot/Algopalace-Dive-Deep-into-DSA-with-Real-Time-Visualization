import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function InsertionSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Insertion Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort, but it has advantages for small data sets and is often used as part of more sophisticated algorithms."
      intuition={[
        "Insertion Sort works the way we sort playing cards in our hands.",
        "The array is virtually split into a sorted and an unsorted part.",
        "Values from the unsorted part are picked and placed in the correct position in the sorted part.",
        "It's efficient for small data sets and nearly sorted arrays.",
      ]}
      approach={[
        "Start from the second element (index 1) and consider it as part of the unsorted array.",
        "Compare this element with the elements in the sorted array (elements to its left).",
        "Shift all elements in the sorted array that are greater than the current element to the right.",
        "Insert the current element at the correct position in the sorted array.",
        "Repeat for all elements in the unsorted array.",
      ]}
      complexity={{
        time: "Best case: O(n) when the array is already sorted. Average and worst case: O(n²).",
        space: "O(1) as it sorts in-place, requiring only a single additional memory space for the temporary variable.",
      }}
      examples={[
        {
          input: "arr = [12, 11, 13, 5, 6]",
          output: "[5, 6, 11, 12, 13]",
          explanation:
            "The algorithm builds the sorted array one element at a time by inserting each element at its correct position.",
        },
        {
          input: "arr = [5, 2, 4, 6, 1, 3]",
          output: "[1, 2, 3, 4, 5, 6]",
          explanation: "Each element is compared with the elements to its left and inserted at the correct position.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6};
    int n = arr.size();
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    insertionSort(arr);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class InsertionSort {
    void insertionSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            
            // Move elements of arr[0..i-1] that are greater than key
            // to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    
    public static void main(String[] args) {
        InsertionSort ob = new InsertionSort();
        int[] arr = {12, 11, 13, 5, 6};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        ob.insertionSort(arr);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def insertion_sort(arr):
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
        key = arr[i]
        
        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Example usage
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6]
    
    print("Original array:", arr)
    
    insertion_sort(arr)
    
    print("Sorted array:", arr)`,
        javascript: `function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6];

console.log("Original array:", arr);

insertionSort(arr);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
