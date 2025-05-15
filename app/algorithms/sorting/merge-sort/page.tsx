import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeEditor } from "@/components/code-editor"

export default function MergeSortPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Link
          href="/algorithms/sorting"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sorting Algorithms
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Merge Sort Algorithm</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Given an array of size n, sort the array using Merge Sort.</p>

            <div className="mt-6 space-y-4">
              <h3 className="font-medium">Examples:</h3>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-mono">
                  <strong>Example 1:</strong>
                  <br />
                  <strong>Input:</strong> N=5, arr[]=[4,2,1,6,7]
                  <br />
                  <strong>Output:</strong> 1,2,4,6,7
                </p>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <p className="font-mono">
                  <strong>Example 2:</strong>
                  <br />
                  <strong>Input:</strong> N=7, arr[]=[3,2,8,5,1,4,23]
                  <br />
                  <strong>Output:</strong> 1,2,3,4,5,8,23
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Intuition</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Merge Sort is a divide and conquer algorithm</strong>, it divides the given array into equal
                    parts and then merges the 2 sorted parts.
                  </li>
                  <li>
                    <strong>There are 2 main functions:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>merge():</strong> This function is used to merge the 2 halves of the array. It assumes
                        that both parts of the array are sorted and merges both of them.
                      </li>
                      <li>
                        <strong>mergeSort():</strong> This function divides the array into 2 parts: low to mid and mid+1
                        to high where,
                        <br />
                        low = leftmost index of the array
                        <br />
                        high = rightmost index of the array
                        <br />
                        mid = Middle index of the array
                      </li>
                    </ul>
                  </li>
                  <li>We recursively split the array, and go from top-down until all sub-arrays size becomes 1.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Approach</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We will be creating 2 functions mergeSort() and merge().</li>
                  <li>
                    <strong>mergeSort(arr, low, high):</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Base case: If low is greater than or equal to high, return.</li>
                      <li>Calculate mid = low + (high - low) / 2</li>
                      <li>Call mergeSort for first half: mergeSort(arr, low, mid)</li>
                      <li>Call mergeSort for second half: mergeSort(arr, mid + 1, high)</li>
                      <li>Merge the two halves: merge(arr, low, mid, high)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>merge(arr, low, mid, high):</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Create temporary arrays to store the two halves</li>
                      <li>Copy data to temporary arrays</li>
                      <li>Merge the temporary arrays back into arr[low..high]</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Complexity Analysis</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Time Complexity:</strong> O(n log n) - The algorithm divides the array into two halves and
                    takes linear time to merge them.
                  </li>
                  <li>
                    <strong>Space Complexity:</strong> O(n) - We need additional space for the temporary arrays during
                    merging.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cpp">
              <TabsList>
                <TabsTrigger value="cpp">C++</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="cpp" className="mt-4">
                <CodeEditor
                  language="cpp"
                  defaultValue={`#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int low, int mid, int high) {
    vector<int> temp; // temporary array
    int left = low;      // starting index of left half of arr
    int right = mid + 1;   // starting index of right half of arr

    // storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left]);
            left++;
        }
        else {
            temp.push_back(arr[right]);
            right++;
        }
    }

    // if elements on the left half are still left
    while (left <= mid) {
        temp.push_back(arr[left]);
        left++;
    }

    // if elements on the right half are still left
    while (right <= high) {
        temp.push_back(arr[right]);
        right++;
    }

    // transferring all elements from temporary to arr
    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

void mergeSort(vector<int>& arr, int low, int high) {
    if (low >= high) return;
    
    int mid = low + (high - low) / 2;
    mergeSort(arr, low, mid);      // left half
    mergeSort(arr, mid + 1, high); // right half
    merge(arr, low, mid, high);    // merging sorted halves
}

int main() {
    vector<int> arr = {9, 4, 7, 6, 3, 1, 5};
    int n = arr.size();
    
    cout << "Before sorting array: " << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    mergeSort(arr, 0, n - 1);
    
    cout << "After sorting array: " << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}`}
                />
              </TabsContent>
              <TabsContent value="java" className="mt-4">
                <CodeEditor
                  language="java"
                  defaultValue={`import java.util.Arrays;

public class MergeSort {
    public static void merge(int[] arr, int low, int mid, int high) {
        int[] temp = new int[high - low + 1]; // temporary array
        int left = low;      // starting index of left half of arr
        int right = mid + 1;   // starting index of right half of arr
        int k = 0;

        // storing elements in the temporary array in a sorted manner
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp[k++] = arr[left++];
            }
            else {
                temp[k++] = arr[right++];
            }
        }

        // if elements on the left half are still left
        while (left <= mid) {
            temp[k++] = arr[left++];
        }

        // if elements on the right half are still left
        while (right <= high) {
            temp[k++] = arr[right++];
        }

        // transferring all elements from temporary to arr
        for (int i = 0; i < temp.length; i++) {
            arr[low + i] = temp[i];
        }
    }

    public static void mergeSort(int[] arr, int low, int high) {
        if (low >= high) return;
        
        int mid = low + (high - low) / 2;
        mergeSort(arr, low, mid);      // left half
        mergeSort(arr, mid + 1, high); // right half
        merge(arr, low, mid, high);    // merging sorted halves
    }

    public static void main(String[] args) {
        int[] arr = {9, 4, 7, 6, 3, 1, 5};
        int n = arr.length;
        
        System.out.println("Before sorting array: ");
        System.out.println(Arrays.toString(arr));
        
        mergeSort(arr, 0, n - 1);
        
        System.out.println("After sorting array: ");
        System.out.println(Arrays.toString(arr));
    }
}`}
                />
              </TabsContent>
              <TabsContent value="python" className="mt-4">
                <CodeEditor
                  language="python"
                  defaultValue={`def merge(arr, low, mid, high):
    temp = []  # temporary array
    left = low  # starting index of left half of arr
    right = mid + 1  # starting index of right half of arr

    # storing elements in the temporary array in a sorted manner
    while left <= mid and right <= high:
        if arr[left] <= arr[right]:
            temp.append(arr[left])
            left += 1
        else:
            temp.append(arr[right])
            right += 1

    # if elements on the left half are still left
    while left <= mid:
        temp.append(arr[left])
        left += 1

    # if elements on the right half are still left
    while right <= high:
        temp.append(arr[right])
        right += 1

    # transferring all elements from temporary to arr
    for i in range(low, high + 1):
        arr[i] = temp[i - low]


def merge_sort(arr, low, high):
    if low >= high:
        return
    
    mid = low + (high - low) // 2
    merge_sort(arr, low, mid)  # left half
    merge_sort(arr, mid + 1, high)  # right half
    merge(arr, low, mid, high)  # merging sorted halves


# Example usage
if __name__ == "__main__":
    arr = [9, 4, 7, 6, 3, 1, 5]
    n = len(arr)
    
    print("Before sorting array:", arr)
    
    merge_sort(arr, 0, n - 1)
    
    print("After sorting array:", arr)
`}
                />
              </TabsContent>
              <TabsContent value="javascript" className="mt-4">
                <CodeEditor
                  language="javascript"
                  defaultValue={`function merge(arr, low, mid, high) {
    let temp = []; // temporary array
    let left = low; // starting index of left half of arr
    let right = mid + 1; // starting index of right half of arr

    // storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // if elements on the left half are still left
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // if elements on the right half are still left
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return;
    
    const mid = Math.floor(low + (high - low) / 2);
    mergeSort(arr, low, mid); // left half
    mergeSort(arr, mid + 1, high); // right half
    merge(arr, low, mid, high); // merging sorted halves
}

// Example usage
const arr = [9, 4, 7, 6, 3, 1, 5];
const n = arr.length;

console.log("Before sorting array:", arr);

mergeSort(arr, 0, n - 1);

console.log("After sorting array:", arr);
`}
                />
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-center">
              <Button>Practice Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
