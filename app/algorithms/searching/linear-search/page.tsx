import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function LinearSearchPage() {
  return (
    <AlgorithmDetailTemplate
      title="Linear Search"
      category="Searching"
      categoryPath="searching"
      description="Linear Search is the simplest searching algorithm that checks each element in the list sequentially until the desired element is found or the list ends."
      intuition={[
        "Linear Search is a straightforward algorithm that works on both sorted and unsorted arrays.",
        "It sequentially checks each element of the list until a match is found or the whole list has been searched.",
        "While it's not the most efficient for large datasets, it's simple to implement and works well for small lists.",
        "It doesn't require the list to be sorted, unlike binary search.",
      ]}
      approach={[
        "Start from the leftmost element of the array and compare each element with the target value.",
        "If the element matches the target value, return its index.",
        "If the element doesn't match, move to the next element.",
        "If no match is found after checking all elements, return -1 to indicate the target is not present in the array.",
      ]}
      complexity={{
        time: "O(n) in the worst case, where n is the number of elements in the array. This occurs when the target is the last element or not present in the array.",
        space: "O(1) as it only requires a constant amount of additional memory regardless of the input size.",
      }}
      examples={[
        {
          input: "arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170], target = 110",
          output: "6 (index of target value)",
          explanation: "The algorithm sequentially checks each element and finds the target value 110 at index 6.",
        },
        {
          input: "arr = [10, 20, 80, 30, 60, 50], target = 100",
          output: "-1 (target not found)",
          explanation: "The algorithm checks all elements but doesn't find the target value 100, so it returns -1.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int>& arr, int target) {
    int n = arr.size();
    
    // Traverse the array
    for (int i = 0; i < n; i++) {
        // If element is found, return its index
        if (arr[i] == target) {
            return i;
        }
    }
    
    // If element is not found, return -1
    return -1;
}

int main() {
    vector<int> arr = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170};
    int target = 110;
    
    int result = linearSearch(arr, target);
    
    if (result == -1) {
        cout << "Element not present in array" << endl;
    } else {
        cout << "Element found at index " << result << endl;
    }
    
    return 0;
}`,
        java: `public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        int n = arr.length;
        
        // Traverse the array
        for (int i = 0; i < n; i++) {
            // If element is found, return its index
            if (arr[i] == target) {
                return i;
            }
        }
        
        // If element is not found, return -1
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170};
        int target = 110;
        
        int result = linearSearch(arr, target);
        
        if (result == -1) {
            System.out.println("Element not present in array");
        } else {
            System.out.println("Element found at index " + result);
        }
    }
}`,
        python: `def linear_search(arr, target):
    n = len(arr)
    
    # Traverse the array
    for i in range(n):
        # If element is found, return its index
        if arr[i] == target:
            return i
    
    # If element is not found, return -1
    return -1

# Example usage
if __name__ == "__main__":
    arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
    target = 110
    
    result = linear_search(arr, target)
    
    if result == -1:
        print("Element not present in array")
    else:
        print(f"Element found at index {result}")`,
        javascript: `function linearSearch(arr, target) {
    const n = arr.length;
    
    // Traverse the array
    for (let i = 0; i < n; i++) {
        // If element is found, return its index
        if (arr[i] === target) {
            return i;
        }
    }
    
    // If element is not found, return -1
    return -1;
}

// Example usage
const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const target = 110;

const result = linearSearch(arr, target);

if (result === -1) {
    console.log("Element not present in array");
} else {
    console.log(\`Element found at index \${result}\`);
}`,
      }}
    />
  )
}
