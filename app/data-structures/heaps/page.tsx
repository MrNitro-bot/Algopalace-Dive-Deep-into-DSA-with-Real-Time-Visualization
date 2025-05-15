import type { Metadata } from "next"
import { ProblemList } from "@/components/problem-list"

export const metadata: Metadata = {
  title: "Heap Problems | AlgoMaster",
  description: "Practice heap problems to master this fundamental data structure",
}

export default function HeapProblemsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Heap Problems</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Master heaps by solving these carefully selected problems
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <ProblemList problems={heapProblems} category="heaps" />
      </div>
    </div>
  )
}

const heapProblems = [
  {
    id: "215",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    description: `Given an integer array \`nums\` and an integer \`k\`, return the \`kth\` largest element in the array.

Note that it is the \`kth\` largest element in the sorted order, not the \`kth\` distinct element.

Can you solve it without sorting?`,
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
        explanation: "",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int findKthLargest(int[] nums, int k) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "347",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    description: `Given an integer array \`nums\` and an integer \`k\`, return the \`k\` most frequent elements. You may return the answer in any order.`,
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
        explanation: "",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "295",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    description: `The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

- For example, for \`arr = [2,3,4]\`, the median is \`3\`.
- For example, for \`arr = [2,3]\`, the median is \`(2 + 3) / 2 = 2.5\`.

Implement the MedianFinder class:

- \`MedianFinder()\` initializes the MedianFinder object.
- \`void addNum(int num)\` adds the integer \`num\` from the data stream to the data structure.
- \`double findMedian()\` returns the median of all elements so far. Answers within \`10^-5\` of the actual answer will be accepted.`,
    examples: [
      {
        input: `["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]`,
        output: `[null, null, null, 1.5, null, 2.0]`,
        explanation: `
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0`,
      },
    ],
    starterCode: {
      cpp: `class MedianFinder {
public:
    MedianFinder() {
        
    }
    
    void addNum(int num) {
        
    }
    
    double findMedian() {
        
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */`,
      java: `class MedianFinder {

    public MedianFinder() {
        
    }
    
    public void addNum(int num) {
        
    }
    
    public double findMedian() {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */`,
      python: `class MedianFinder:

    def __init__(self):
        

    def addNum(self, num: int) -> None:
        

    def findMedian(self) -> float:
        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()`,
      javascript: `/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var MedianFinder = function() {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
};`,
    },
  },
  {
    id: "23",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    description: `You are given an array of \`k\` linked-lists \`lists\`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation:
          "The linked-lists are: [1->4->5, 1->3->4, 2->6]. Merging them into one sorted list: 1->1->2->3->4->4->5->6",
      },
      {
        input: "lists = []",
        output: "[]",
        explanation: "",
      },
      {
        input: "lists = [[]]",
        output: "[]",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Write your solution here
        
    }
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        
    }
}`,
      python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # Write your solution here
        
`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "973",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    description: `Given an array of \`points\` where \`points[i] = [xi, yi]\` represents a point on the X-Y plane and an integer \`k\`, return the \`k\` closest points to the origin \`(0, 0)\`.

The distance between two points on the X-Y plane is the Euclidean distance (i.e., \`√(x1 - x2)2 + (y1 - y2)2\`).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).`,
    examples: [
      {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
        explanation:
          "The distance between (1, 3) and the origin is sqrt(10). The distance between (-2, 2) and the origin is sqrt(8). Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin. We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].",
      },
      {
        input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
        output: "[[3,3],[-2,4]]",
        explanation: "The answer [[-2,4],[3,3]] would also be accepted.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int[][] kClosest(int[][] points, int k) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // Write your solution here
    
};`,
    },
  },
]
