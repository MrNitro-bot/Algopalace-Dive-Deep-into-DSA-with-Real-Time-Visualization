import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function QuickSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Quick Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot."
      intuition={[
        "Quick Sort is based on the divide-and-conquer paradigm, where we divide the problem into smaller subproblems, solve them independently, and then combine their solutions.",
        "The key process in Quick Sort is the partitioning step, where we choose a pivot element and rearrange the array so that all elements less than the pivot are to its left, and all elements greater than the pivot are to its right.",
        "After partitioning, the pivot is in its final sorted position, and we recursively apply the same process to the subarrays on the left and right of the pivot.",
        "The choice of pivot can significantly affect the algorithm's performance. Common strategies include choosing the first element, the last element, the middle element, or a random element as the pivot.",
      ]}
      approach={[
        "Choose a pivot element from the array.",
        "Partition the array around the pivot, such that elements less than the pivot are on the left, and elements greater than the pivot are on the right.",
        "Recursively apply the above steps to the subarrays on the left and right of the pivot.",
        "The base case of the recursion is when the subarray has 0 or 1 element, which is already sorted.",
      ]}
      complexity={{
        time: "O(n log n) on average, O(n²) in the worst case (when the array is already sorted or reverse sorted and the pivot is chosen as the first or last element).",
        space: "O(log n) for the recursive call stack.",
      }}
      examples={[
        {
          input: "arr = [10, 7, 8, 9, 1, 5]",
          output: "[1, 5, 7, 8, 9, 10]",
          explanation:
            "Quick Sort first partitions the array around a pivot (e.g., 5), then recursively sorts the subarrays [1] and [7, 8, 9, 10].",
        },
        {
          input: "arr = [38, 27, 43, 3, 9, 82, 10]",
          output: "[3, 9, 10, 27, 38, 43, 82]",
          explanation: "Quick Sort efficiently sorts the array by partitioning and recursively sorting the subarrays.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

// Function to partition the array and return the pivot index
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // Choose the last element as the pivot
    int i = low - 1; // Index of smaller element
    
    for (int j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

// The main function that implements QuickSort
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        int pi = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    int n = arr.size();
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    quickSort(arr, 0, n - 1);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class QuickSort {
    // Function to partition the array and return the pivot index
    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose the last element as the pivot
        int i = low - 1; // Index of smaller element
        
        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                i++;
                
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Swap arr[i+1] and arr[high] (or pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    // The main function that implements QuickSort
    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // pi is the partitioning index, arr[pi] is now at the right place
            int pi = partition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        quickSort(arr, 0, arr.length - 1);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def partition(arr, low, high):
    pivot = arr[high]  # Choose the last element as the pivot
    i = low - 1  # Index of smaller element
    
    for j in range(low, high):
        # If current element is smaller than or equal to pivot
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        # pi is the partitioning index, arr[pi] is now at the right place
        pi = partition(arr, low, high)
        
        # Recursively sort elements before and after partition
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

# Example usage
if __name__ == "__main__":
    arr = [10, 7, 8, 9, 1, 5]
    
    print("Original array:", arr)
    
    quick_sort(arr, 0, len(arr) - 1)
    
    print("Sorted array:", arr)`,
        javascript: `function partition(arr, low, high) {
    const pivot = arr[high]; // Choose the last element as the pivot
    let i = low - 1; // Index of smaller element
    
    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Swap arr[i+1] and arr[high] (or pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        const pi = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Example usage
const arr = [10, 7, 8, 9, 1, 5];

console.log("Original array:", arr);

quickSort(arr, 0, arr.length - 1);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
