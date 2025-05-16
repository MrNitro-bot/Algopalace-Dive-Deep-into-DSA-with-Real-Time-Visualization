import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function JumpSearchPage() {
  return (
    <AlgorithmDetailTemplate
      title="Jump Search"
      category="Searching"
      categoryPath="searching"
      description="Jump Search is a searching algorithm for sorted arrays that works by jumping ahead by fixed steps and then performing a linear search within a smaller range."
      intuition={[
        "Jump Search works on the principle of skipping some elements to reduce the number of comparisons.",
        "It jumps ahead by a fixed step size, and when it finds a value greater than the search element, it performs a linear search in the previous block.",
        "The optimal jump size is √n, where n is the size of the array.",
        "Jump Search is faster than Linear Search but slower than Binary Search.",
      ]}
      approach={[
        "Determine the block size to jump (typically √n).",
        "Jump from index 0 to block size, then to 2*block size, and so on until finding a value greater than the search element or reaching the end of the array.",
        "Once a value greater than the search element is found, perform a linear search in the previous block.",
        "If the element is found, return its index; otherwise, return -1.",
      ]}
      complexity={{
        time: "O(√n) where n is the number of elements in the array.",
        space: "O(1) as it only uses a constant amount of extra space.",
      }}
      examples={[
        {
          input: "arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], target = 55",
          output: "10",
          explanation:
            "Jump Search first jumps ahead by √16 = 4 steps until it finds a value greater than 55, then performs a linear search in the previous block to find 55 at index 10.",
        },
        {
          input: "arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], target = 18",
          output: "8",
          explanation:
            "Jump Search jumps ahead by √10 ≈ 3 steps until it finds a value greater than 18, then performs a linear search to find 18 at index 8.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int jumpSearch(vector<int>& arr, int target) {
    int n = arr.size();
    
    // Finding the block size to be jumped
    int step = sqrt(n);
    
    // Finding the block where the target may be present
    int prev = 0;
    while (arr[min(step, n) - 1] < target) {
        prev = step;
        step += sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }
    
    // Doing a linear search for target in the block
    while (arr[prev] < target) {
        prev++;
        
        // If we reached the next block or end of array, target is not present
        if (prev == min(step, n)) {
            return -1;
        }
    }
    
    // If the element is found
    if (arr[prev] == target) {
        return prev;
    }
    
    return -1;
}

int main() {
    vector<int> arr = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610};
    int target = 55;
    
    int index = jumpSearch(arr, target);
    
    if (index != -1) {
        cout << "Number " << target << " is at index " << index << endl;
    } else {
        cout << "Number " << target << " is not present in the array" << endl;
    }
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class JumpSearch {
    public static int jumpSearch(int[] arr, int target) {
        int n = arr.length;
        
        // Finding the block size to be jumped
        int step = (int) Math.floor(Math.sqrt(n));
        
        // Finding the block where the target may be present
        int prev = 0;
        while (arr[Math.min(step, n) - 1] < target) {
            prev = step;
            step += (int) Math.floor(Math.sqrt(n));
            if (prev >= n) {
                return -1;
            }
        }
        
        // Doing a linear search for target in the block
        while (arr[prev] < target) {
            prev++;
            
            // If we reached the next block or end of array, target is not present
            if (prev == Math.min(step, n)) {
                return -1;
            }
        }
        
        // If the element is found
        if (arr[prev] == target) {
            return prev;
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610};
        int target = 55;
        
        int index = jumpSearch(arr, target);
        
        if (index != -1) {
            System.out.println("Number " + target + " is at index " + index);
        } else {
            System.out.println("Number " + target + " is not present in the array");
        }
    }
}`,
        python: `import math

def jump_search(arr, target):
    n = len(arr)
    
    # Finding the block size to be jumped
    step = int(math.sqrt(n))
    
    # Finding the block where the target may be present
    prev = 0
    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1
    
    # Doing a linear search for target in the block
    while arr[prev] < target:
        prev += 1
        
        # If we reached the next block or end of array, target is not present
        if prev == min(step, n):
            return -1
    
    # If the element is found
    if arr[prev] == target:
        return prev
    
    return -1

# Example usage
if __name__ == "__main__":
    arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
    target = 55
    
    index = jump_search(arr, target)
    
    if index != -1:
        print(f"Number {target} is at index {index}")
    else:
        print(f"Number {target} is not present in the array")`,
        javascript: `function jumpSearch(arr, target) {
    const n = arr.length;
    
    // Finding the block size to be jumped
    const step = Math.floor(Math.sqrt(n));
    
    // Finding the block where the target may be present
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1;
        }
    }
    
    // Doing a linear search for target in the block
    while (arr[prev] < target) {
        prev++;
        
        // If we reached the next block or end of array, target is not present
        if (prev == Math.min(step, n)) {
            return -1;
        }
    }
    
    // If the element is found
    if (arr[prev] === target) {
        return prev;
    }
    
    return -1;
}

// Example usage
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const target = 55;

const index = jumpSearch(arr, target);

if (index !== -1) {
    console.log(\`Number \${target} is at index \${index}\`);
} else {
    console.log(\`Number \${target} is not present in the array\`);
}`,
      }}
    />
  )
}
