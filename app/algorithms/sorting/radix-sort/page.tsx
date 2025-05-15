import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function RadixSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Radix Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Radix Sort is a non-comparative sorting algorithm that sorts integers by processing individual digits. It sorts numbers from the least significant digit to the most significant digit, using a stable sort for each digit position."
      intuition={[
        "Radix Sort works by sorting numbers digit by digit, from the least significant digit (rightmost) to the most significant digit (leftmost).",
        "It uses a stable sorting algorithm (usually Counting Sort) as a subroutine to sort the numbers according to each digit.",
        "The algorithm processes all digits of the largest number in the array.",
        "Since it sorts based on digits rather than comparing elements, Radix Sort can achieve linear time complexity for a fixed number of digits.",
      ]}
      approach={[
        "Find the maximum number in the array to determine the number of digits.",
        "For each digit position (starting from the least significant digit):",
        "- Sort the array based on the current digit position using a stable sort (like Counting Sort).",
        "- Move to the next digit position.",
        "Repeat until all digit positions are processed.",
      ]}
      complexity={{
        time: "O(d * (n + k)) where d is the number of digits, n is the number of elements, and k is the range of each digit (usually 10 for decimal numbers).",
        space: "O(n + k) for the temporary arrays used in the counting sort subroutine.",
      }}
      examples={[
        {
          input: "arr = [170, 45, 75, 90, 802, 24, 2, 66]",
          output: "[2, 24, 45, 66, 75, 90, 170, 802]",
          explanation: "The algorithm sorts the array by processing each digit position from right to left.",
        },
        {
          input: "arr = [121, 432, 564, 23, 1, 45, 788]",
          output: "[1, 23, 45, 121, 432, 564, 788]",
          explanation: "The algorithm efficiently sorts the array by considering each digit position separately.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// A function to do counting sort of arr[] according to the digit represented by exp
void countSort(vector<int>& arr, int exp) {
    int n = arr.size();
    vector<int> output(n); // output array
    vector<int> count(10, 0); // count array for digits 0-9
    
    // Store count of occurrences in count[]
    for (int i = 0; i < n; i++) {
        count[(arr[i] / exp) % 10]++;
    }
    
    // Change count[i] so that count[i] now contains actual position of this digit in output[]
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    
    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// The main function to that sorts arr[] of size n using Radix Sort
void radixSort(vector<int>& arr) {
    int n = arr.size();
    
    // Find the maximum number to know number of digits
    int max_val = *max_element(arr.begin(), arr.end());
    
    // Do counting sort for every digit
    for (int exp = 1; max_val / exp > 0; exp *= 10) {
        countSort(arr, exp);
    }
}

int main() {
    vector<int> arr = {170, 45, 75, 90, 802, 24, 2, 66};
    int n = arr.size();
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    radixSort(arr);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class RadixSort {
    // A function to do counting sort of arr[] according to the digit represented by exp
    static void countSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n]; // output array
        int[] count = new int[10]; // count array for digits 0-9
        
        // Store count of occurrences in count[]
        for (int i = 0; i < n; i++) {
            count[(arr[i] / exp) % 10]++;
        }
        
        // Change count[i] so that count[i] now contains actual position of this digit in output[]
        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        // Build the output array
        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
        
        // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }
    
    // The main function to that sorts arr[] of size n using Radix Sort
    static void radixSort(int[] arr) {
        // Find the maximum number to know number of digits
        int max_val = Arrays.stream(arr).max().getAsInt();
        
        // Do counting sort for every digit
        for (int exp = 1; max_val / exp > 0; exp *= 10) {
            countSort(arr, exp);
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        radixSort(arr);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n  # output array
    count = [0] * 10  # count array for digits 0-9
    
    # Store count of occurrences in count[]
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1
    
    # Change count[i] so that count[i] now contains actual position of this digit in output[]
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # Build the output array
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
    
    # Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    # Find the maximum number to know number of digits
    max_val = max(arr)
    
    # Do counting sort for every digit
    exp = 1
    while max_val // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

# Example usage
if __name__ == "__main__":
    arr = [170, 45, 75, 90, 802, 24, 2, 66]
    
    print("Original array:", arr)
    
    radix_sort(arr)
    
    print("Sorted array:", arr)`,
        javascript: `// A function to do counting sort of arr[] according to the digit represented by exp
function countSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n); // output array
    const count = new Array(10).fill(0); // count array for digits 0-9
    
    // Store count of occurrences in count[]
    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }
    
    // Change count[i] so that count[i] now contains actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }
    
    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// The main function to that sorts arr[] of size n using Radix Sort
function radixSort(arr) {
    // Find the maximum number to know number of digits
    const max_val = Math.max(...arr);
    
    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max_val / exp) > 0; exp *= 10) {
        countSort(arr, exp);
    }
}

// Example usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];

console.log("Original array:", arr);

radixSort(arr);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
