import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function HeapSortPage() {
  return (
    <AlgorithmDetailTemplate
      title="Heap Sort"
      category="Sorting"
      categoryPath="sorting"
      description="Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the largest element and moving it to the sorted region."
      intuition={[
        "Heap Sort uses a binary heap data structure, which is a complete binary tree where each node is greater than or equal to its children (max heap).",
        "The algorithm first builds a max heap from the input array.",
        "Then, it repeatedly extracts the maximum element (root of the heap) and places it at the end of the array.",
        "After each extraction, it maintains the heap property by heapifying the reduced heap.",
      ]}
      approach={[
        "Build a max heap from the input array.",
        "Extract the maximum element (root) and place it at the end of the array.",
        "Reduce the heap size by 1 and heapify the root element to maintain the max heap property.",
        "Repeat steps 2 and 3 until the heap size is 1.",
      ]}
      complexity={{
        time: "O(n log n) for all cases (best, average, and worst) because building a heap takes O(n) time and each of the n heapify operations takes O(log n) time.",
        space: "O(1) as it sorts in-place, requiring only a constant amount of additional memory.",
      }}
      examples={[
        {
          input: "arr = [12, 11, 13, 5, 6, 7]",
          output: "[5, 6, 7, 11, 12, 13]",
          explanation:
            "The algorithm builds a max heap and then repeatedly extracts the maximum element to sort the array.",
        },
        {
          input: "arr = [4, 10, 3, 5, 1]",
          output: "[1, 3, 4, 5, 10]",
          explanation: "The algorithm efficiently sorts the array using the heap data structure.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

// To heapify a subtree rooted with node i which is an index in arr[]
void heapify(vector<int>& arr, int n, int i) {
    int largest = i; // Initialize largest as root
    int left = 2 * i + 1; // left = 2*i + 1
    int right = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest])
        largest = left;
    
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest])
        largest = right;
    
    // If largest is not root
    if (largest != i) {
        swap(arr[i], arr[largest]);
        
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Main function to do heap sort
void heapSort(vector<int>& arr) {
    int n = arr.size();
    
    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    
    // One by one extract an element from heap
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        swap(arr[0], arr[i]);
        
        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};
    int n = arr.size();
    
    cout << "Original array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    heapSort(arr);
    
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class HeapSort {
    public void sort(int[] arr) {
        int n = arr.length;
        
        // Build heap (rearrange array)
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);
        
        // One by one extract an element from heap
        for (int i = n - 1; i > 0; i--) {
            // Move current root to end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            
            // Call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
    
    // To heapify a subtree rooted with node i which is an index in arr[]
    void heapify(int[] arr, int n, int i) {
        int largest = i; // Initialize largest as root
        int left = 2 * i + 1; // left = 2*i + 1
        int right = 2 * i + 2; // right = 2*i + 2
        
        // If left child is larger than root
        if (left < n && arr[left] > arr[largest])
            largest = left;
        
        // If right child is larger than largest so far
        if (right < n && arr[right] > arr[largest])
            largest = right;
        
        // If largest is not root
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        
        System.out.println("Original array: " + Arrays.toString(arr));
        
        HeapSort ob = new HeapSort();
        ob.sort(arr);
        
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`,
        python: `def heapify(arr, n, i):
    largest = i  # Initialize largest as root
    left = 2 * i + 1  # left = 2*i + 1
    right = 2 * i + 2  # right = 2*i + 2
    
    # If left child is larger than root
    if left < n and arr[left] > arr[largest]:
        largest = left
    
    # If right child is larger than largest so far
    if right < n and arr[right] > arr[largest]:
        largest = right
    
    # If largest is not root
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap
        
        # Recursively heapify the affected sub-tree
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    
    # Build a maxheap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # One by one extract elements
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)

# Example usage
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6, 7]
    
    print("Original array:", arr)
    
    heap_sort(arr)
    
    print("Sorted array:", arr)`,
        javascript: `function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap
        
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;
    
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]; // swap
        
        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];

console.log("Original array:", arr);

heapSort(arr);

console.log("Sorted array:", arr);`,
      }}
    />
  )
}
