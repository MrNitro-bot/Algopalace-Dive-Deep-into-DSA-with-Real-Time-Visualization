import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function BinarySearchPage() {
  return (
    <AlgorithmDetailTemplate
      title="Binary Search"
      category="Searching"
      categoryPath="searching"
      description="Binary Search is an efficient algorithm for finding a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty."
      intuition={[
        "Binary Search is based on the divide and conquer strategy.",
        "It works only on sorted arrays, which is a prerequisite.",
        "Instead of checking each element linearly, it eliminates half of the remaining elements at each step.",
        "This makes it much faster than linear search for large datasets.",
      ]}
      approach={[
        "Start with the middle element of the sorted array.",
        "If the target value is equal to the middle element, return the middle index.",
        "If the target value is less than the middle element, search the left half of the array.",
        "If the target value is greater than the middle element, search the right half of the array.",
        "Repeat steps 1-4 until the target value is found or the search interval is empty.",
      ]}
      complexity={{
        time: "O(log n) because the algorithm divides the search interval in half at each step.",
        space: "O(1) for iterative implementation, O(log n) for recursive implementation due to the call stack.",
      }}
      examples={[
        {
          input: "arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 7",
          output: "6 (index of target value)",
          explanation: "The algorithm finds the target value 7 at index 6.",
        },
        {
          input: "arr = [1, 3, 5, 7, 9], target = 4",
          output: "-1 (target not found)",
          explanation: "The target value 4 is not in the array, so the algorithm returns -1.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        // Check if target is present at mid
        if (arr[mid] == target)
            return mid;
        
        // If target is greater, ignore left half
        if (arr[mid] < target)
            left = mid + 1;
        
        // If target is smaller, ignore right half
        else
            right = mid - 1;
    }
    
    // Target not found
    return -1;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int target = 7;
    
    int result = binarySearch(arr, target);
    
    if (result == -1)
        cout << "Element not present in array" << endl;
    else
        cout << "Element found at index " << result << endl;
    
    return 0;
}`,
        java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if target is present at mid
            if (arr[mid] == target)
                return mid;
            
            // If target is greater, ignore left half
            if (arr[mid] < target)
                left = mid + 1;
            
            // If target is smaller, ignore right half
            else
                right = mid - 1;
        }
        
        // Target not found
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
        
        int result = binarySearch(arr, target);
        
        if (result == -1)
            System.out.println("Element not present in array");
        else
            System.out.println("Element found at index " + result);
    }
}`,
        python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        # Check if target is present at mid
        if arr[mid] == target:
            return mid
        
        # If target is greater, ignore left half
        elif arr[mid] < target:
            left = mid + 1
        
        # If target is smaller, ignore right half
        else:
            right = mid - 1
    
    # Target not found
    return -1

# Example usage
if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    target = 7
    
    result = binary_search(arr, target)
    
    if result == -1:
        print("Element not present in array")
    else:
        print(f"Element found at index {result}")`,
        javascript: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }
        
        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }
    
    // Target not found
    return -1;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearch(arr, target);

if (result === -1) {
    console.log("Element not present in array");
} else {
    console.log(\`Element found at index \${result}\`);
}`,
      }}
    />
  )
}
