import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function CountingSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Counting Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Counting Sort is a non-comparison-based sorting algorithm that works well when there is a limited range of input values. It counts the number of occurrences of each element and uses this information to place elements in their correct sorted positions."
      intuition={[
        "Counting Sort is efficient when the range of input values is not significantly larger than the number of elements to be sorted.",
        "It works by counting the occurrences of each distinct element in the input array.",
        "Then, it calculates the position of each element in the output array based on these counts.",
        "Unlike comparison-based sorting algorithms, Counting Sort has a linear time complexity when the range of input values is fixed.",
      ]}
      approach={[
        "Find the range of input values (minimum to maximum).",
        "Create a count array to store the count of each unique element.",
        "Modify the count array such that each element at each index stores the sum of previous counts (cumulative count).",
        "Build the output array by placing each element at its correct position based on the count array.",
        "Copy the output array back to the original array (if needed).",
      ]}
      complexity={{
        time: "O(n + k) where n is the number of elements and k is the range of input values.",
        space: "O(n + k) for the output array and the count array.",
      }}
      examples={[
        {
          input: "arr = [4, 2, 2, 8, 3, 3, 1]",
          output: "[1, 2, 2, 3, 3, 4, 8]",
          explanation:
            "The algorithm counts the occurrences of each element and places them in their correct sorted positions.",
        },
        {
          input: "arr = [5, 2, 9, 5, 2, 3, 5]",
          output: "[2, 2, 3, 5, 5, 5, 9]",
          explanation: "The algorithm efficiently sorts the array by counting the occurrences of each element.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void countingSort(vector<int>& arr) {
    int n = arr.size();
    
    // Find the maximum element in the array
    int max_val = *max_element(arr.begin(), arr.end());
    
    // Create a count array to store the count of each unique element
    vector<int> count(max_val + 1, 0);
    
    // Store the count of each element
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    
    // Store the cumulative count
    for (int i = 1; i <= max_val; i++) {
        count[i] += count[i - 1];
    }
    
    // Create a temporary array to store the sorted output
    vector<int> output(n);
    
    // Build the output array
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    // Copy the sorted elements back to the original array
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

int main() {
    vector<int> arr = {4, 2, 2, 8, 3, 3, 1};
    int n = arr.size();
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    countingSort(arr);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class CountingSort {
    void countingSort(int[] arr) {
        int n = arr.length;
        
        // Find the maximum element in the array
        int max_val = Arrays.stream(arr).max().getAsInt();
        
        // Create a count array to store the count of each unique element
        int[] count = new int[max_val + 1];
        
        // Store the count of each element
        for (int i = 0; i < n; i++) {
            count[arr[i]]++;
        }
        
        // Store the cumulative count
        for (int i = 1; i <= max_val; i++) {
            count[i] += count[i - 1];
        }
        
        // Create a temporary array to store the sorted output
        int[] output = new int[n];
        
        // Build the output array
        for (int i = n - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }
        
        // Copy the sorted elements back to the original array
        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }
    
    public static void main(String[] args) {
        CountingSort ob = new CountingSort();
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        ob.countingSort(arr);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def counting_sort(arr):
    # Find the maximum element in the array
    max_val = max(arr)
    
    # Create a count array to store the count of each unique element
    count = [0] * (max_val + 1)
    
    # Store the count of each element
    for i in range(len(arr)):
        count[arr[i]] += 1
    
    # Store the cumulative count
    for i in range(1, max_val + 1):
        count[i] += count[i - 1]
    
    # Create a temporary array to store the sorted output
    output = [0] * len(arr)
    
    # Build the output array
    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1
    
    # Copy the sorted elements back to the original array
    for i in range(len(arr)):
        arr[i] = output[i]

# Example usage
if __name__ == "__main__":
    arr = [4, 2, 2, 8, 3, 3, 1]
    
    print("Original array:", arr)
    
    counting_sort(arr)
    
    print("Sorted array:", arr)`,
        javascript: `function countingSort(arr) {
    // Find the maximum element in the array
    const max_val = Math.max(...arr);
    
    // Create a count array to store the count of each unique element
    const count = new Array(max_val + 1).fill(0);
    
    // Store the count of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    // Store the cumulative count
    for (let i = 1; i <= max_val; i++) {
        count[i] += count[i - 1];
    }
    
    // Create a temporary array to store the sorted output
    const output = new Array(arr.length);
    
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    // Copy the sorted elements back to the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];

console.log("Original array:", arr);

countingSort(arr);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
