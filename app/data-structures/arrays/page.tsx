import type { Metadata } from "next"
import { ProblemList } from "@/components/problem-list"

export const metadata: Metadata = {
  title: "Array Problems | AlgoMaster",
  description: "Practice array problems to master this fundamental data structure",
}

export default function ArrayProblemsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Array Problems</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Master arrays by solving these carefully selected problems
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <ProblemList problems={arrayProblems} category="arrays" />
      </div>
    </div>
  )
}

const arrayProblems = [
  {
    id: "1752",
    title: "Check if Array Is Sorted and Rotated",
    difficulty: "Easy",
    description: `Given an array \`nums\`, return \`true\` if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return \`false\`.

There may be duplicates in the original array.

Note: An array \`A\` rotated by \`x\` positions results in an array \`B\` of the same length such that \`B[i] == A[(i+x) % A.length]\` for every valid index \`i\`.`,
    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "true",
        explanation:
          "[1,2,3,4,5] is the original sorted array. You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].",
      },
      {
        input: "nums = [2,1,3,4]",
        output: "false",
        explanation: "There is no sorted array once rotated that can make nums.",
      },
      {
        input: "nums = [1,2,3]",
        output: "true",
        explanation:
          "[1,2,3] is the original sorted array. You can rotate the array by x = 0 positions (i.e. no rotation) to get the same array.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    bool check(vector<int>& nums) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public boolean check(int[] nums) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def check(self, nums: List[int]) -> bool:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "53",
    title: "Maximum Subarray",
    difficulty: "Medium",
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.

A subarray is a contiguous non-empty sequence of elements within an array.`,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 6, we return [0, 1].",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "121",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`ith\` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.`,
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "238",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.

The product of any prefix or suffix of \`nums\` is guaranteed to fit in a 32-bit integer.

You must write an algorithm running in \`O(n)\` time and without using the division operation.`,
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation: "",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Write your solution here
    
};`,
    },
  },
]
