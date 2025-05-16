import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function InterpolationSearchPage() {
  return (
    <AlgorithmDetailTemplate
      title="Interpolation Search"
      category="Searching"
      categoryPath="searching"
      description="Interpolation Search is an improved variant of binary search that works better for uniformly distributed data by estimating the position of the target value."
      intuition={[
        "Interpolation Search improves on Binary Search by using the value of the target element to estimate its position.",
        "It works on the principle of 'probing' the position based on the value of the key being searched.",
        "For uniformly distributed data, it can achieve O(log log n) time complexity, which is better than Binary Search's O(log n).",
        "The algorithm is particularly useful when the elements are uniformly distributed.",
      ]}
      approach={[
        "Calculate the probable position of the target using the formula: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])",
        "If the element at the calculated position is equal to the target, return the position.",
        "If the element is greater than the target, search in the left subarray.",
        "If the element is less than the target, search in the right subarray.",
        "Repeat until the element is found or the search space is exhausted.",
      ]}
      complexity={{
        time: "O(log log n) for uniformly distributed data, O(n) in worst case.",
        space: "O(1) as it only uses a constant amount of extra space.",
      }}
      examples={[
        {
          input: "arr = [10, 20, 30, 40, 50, 60, 70, 80, 90], target = 70",
          output: "6",
          explanation:
            "Interpolation Search estimates the position of 70 based on its value and finds it at index 6 in fewer steps than Binary Search.",
        },
        {
          input: "arr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], target = 64",
          output: "6",
          explanation: "Interpolation Search estimates the position of 64 and finds it at index 6.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int interpolationSearch(vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;
    
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) {
                return low;
            }
            return -1;
        }
        
        // Calculate the probable position
        int pos = low + ((double)(target - arr[low]) * (high - low)) / (arr[high] - arr[low]);
        
        // Target found
        if (arr[pos] == target) {
            return pos;
        }
        
        // If target is larger, target is in right subarray
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, target is in left subarray
        else {
            high = pos - 1;
        }
    }
    
    return -1;
}

int main() {
    vector<int> arr = {10, 20, 30, 40, 50, 60, 70, 80, 90};
    int target = 70;
    
    int index = interpolationSearch(arr, target);
    
    if (index != -1) {
        cout << "Element " << target << " found at index " << index << endl;
    } else {
        cout << "Element " << target << " not found in the array" << endl;
    }
    
    return 0;
}`,
        java: `public class InterpolationSearch {
    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        
        while (low <= high && target >= arr[low] && target <= arr[high]) {
            if (low == high) {
                if (arr[low] == target) {
                    return low;
                }
                return -1;
            }
            
            // Calculate the probable position
            int pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);
            
            // Target found
            if (arr[pos] == target) {
                return pos;
            }
            
            // If target is larger, target is in right subarray
            if (arr[pos] < target) {
                low = pos + 1;
            }
            // If target is smaller, target is in left subarray
            else {
                high = pos - 1;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50, 60, 70, 80, 90};
        int target = 70;
        
        int index = interpolationSearch(arr, target);
        
        if (index != -1) {
            System.out.println("Element " + target + " found at index " + index);
        } else {
            System.out.println("Element " + target + " not found in the array");
        }
    }
}`,
        python: `def interpolation_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    while low <= high and target >= arr[low] and target <= arr[high]:
        if low == high:
            if arr[low] == target:
                return low
            return -1
        
        # Calculate the probable position
        pos = low + ((target - arr[low]) * (high - low)) // (arr[high] - arr[low])
        
        # Target found
        if arr[pos] == target:
            return pos
        
        # If target is larger, target is in right subarray
        if arr[pos] < target:
            low = pos + 1
        # If target is smaller, target is in left subarray
        else:
            high = pos - 1
    
    return -1

# Example usage
if __name__ == "__main__":
    arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
    target = 70
    
    index = interpolation_search(arr, target)
    
    if index != -1:
        print(f"Element {target} found at index {index}")
    else:
        print(f"Element {target} not found in the array")`,
        javascript: `function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) {
                return low;
            }
            return -1;
        }
        
        // Calculate the probable position
        const pos = Math.floor(low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
        
        // Target found
        if (arr[pos] === target) {
            return pos;
        }
        
        // If target is larger, target is in right subarray
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, target is in left subarray
        else {
            high = pos - 1;
        }
    }
    
    return -1;
}

// Example usage
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 70;

const index = interpolationSearch(arr, target);

if (index !== -1) {
    console.log(\`Element \${target} found at index \${index}\`);
} else {
    console.log(\`Element \${target} not found in the array\`);
}`,
      }}
    />
  )
}
