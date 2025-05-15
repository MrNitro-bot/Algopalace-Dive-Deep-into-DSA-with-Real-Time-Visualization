// Define the structure for test cases
export interface TestCase {
  input: string
  expectedOutput: string
}

// Define test cases for each problem
export const testCases: Record<string, TestCase[]> = {
  // Arrays problems
  "1": [
    // Two Sum
    { input: "[2,7,11,15], 9", expectedOutput: "[0,1]" },
    { input: "[3,2,4], 6", expectedOutput: "[1,2]" },
    { input: "[3,3], 6", expectedOutput: "[0,1]" },
  ],
  "53": [
    // Maximum Subarray
    { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
    { input: "[1]", expectedOutput: "1" },
    { input: "[5,4,-1,7,8]", expectedOutput: "23" },
  ],
  "121": [
    // Best Time to Buy and Sell Stock
    { input: "[7,1,5,3,6,4]", expectedOutput: "5" },
    { input: "[7,6,4,3,1]", expectedOutput: "0" },
  ],
  "238": [
    // Product of Array Except Self
    { input: "[1,2,3,4]", expectedOutput: "[24,12,8,6]" },
    { input: "[-1,1,0,-3,3]", expectedOutput: "[0,0,9,0,0]" },
  ],
  "1752": [
    // Check if Array Is Sorted and Rotated
    { input: "[3,4,5,1,2]", expectedOutput: "true" },
    { input: "[2,1,3,4]", expectedOutput: "false" },
    { input: "[1,2,3]", expectedOutput: "true" },
  ],

  // Linked List problems
  "206": [
    // Reverse Linked List
    { input: "[1,2,3,4,5]", expectedOutput: "[5,4,3,2,1]" },
    { input: "[1,2]", expectedOutput: "[2,1]" },
    { input: "[]", expectedOutput: "[]" },
  ],
  "21": [
    // Merge Two Sorted Lists
    { input: "[1,2,4], [1,3,4]", expectedOutput: "[1,1,2,3,4,4]" },
    { input: "[], []", expectedOutput: "[]" },
    { input: "[], [0]", expectedOutput: "[0]" },
  ],
  "19": [
    // Remove Nth Node From End of List
    { input: "[1,2,3,4,5], 2", expectedOutput: "[1,2,3,5]" },
    { input: "[1], 1", expectedOutput: "[]" },
    { input: "[1,2], 1", expectedOutput: "[1]" },
  ],
  "141": [
    // Linked List Cycle
    { input: "[3,2,0,-4], 1", expectedOutput: "true" },
    { input: "[1,2], 0", expectedOutput: "true" },
    { input: "[1], -1", expectedOutput: "false" },
  ],
  "23": [
    // Merge k Sorted Lists
    { input: "[[1,4,5],[1,3,4],[2,6]]", expectedOutput: "[1,1,2,3,4,4,5,6]" },
    { input: "[]", expectedOutput: "[]" },
    { input: "[[]]", expectedOutput: "[]" },
  ],

  // Stacks & Queues problems
  "20": [
    // Valid Parentheses
    { input: "()", expectedOutput: "true" },
    { input: "()[]{}", expectedOutput: "true" },
    { input: "(]", expectedOutput: "false" },
  ],
  "155": [
    // Min Stack
    { input: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()", expectedOutput: "-3, 0, -2" },
  ],
  "232": [
    // Implement Queue using Stacks
    { input: "push(1), push(2), peek(), pop(), empty()", expectedOutput: "1, 1, false" },
  ],
  "84": [
    // Largest Rectangle in Histogram
    { input: "[2,1,5,6,2,3]", expectedOutput: "10" },
    { input: "[2,4]", expectedOutput: "4" },
  ],
  "239": [
    // Sliding Window Maximum
    { input: "[1,3,-1,-3,5,3,6,7], 3", expectedOutput: "[3,3,5,5,6,7]" },
    { input: "[1], 1", expectedOutput: "[1]" },
  ],

  // Hash Tables problems
  "49": [
    // Group Anagrams
    { input: '["eat","tea","tan","ate","nat","bat"]', expectedOutput: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
    { input: '[""]', expectedOutput: '[[""]]' },
    { input: '["a"]', expectedOutput: '[["a"]]' },
  ],
  "128": [
    // Longest Consecutive Sequence
    { input: "[100,4,200,1,3,2]", expectedOutput: "4" },
    { input: "[0,3,7,2,5,8,4,6,0,1]", expectedOutput: "9" },
  ],
  "146": [
    // LRU Cache
    {
      input: "capacity=2, put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4)",
      expectedOutput: "1, -1, -1, 3, 4",
    },
  ],
  "76": [
    // Minimum Window Substring
    { input: 's = "ADOBECODEBANC", t = "ABC"', expectedOutput: '"BANC"' },
    { input: 's = "a", t = "a"', expectedOutput: '"a"' },
    { input: 's = "a", t = "aa"', expectedOutput: '""' },
  ],

  // Trees problems
  "104": [
    // Maximum Depth of Binary Tree
    { input: "[3,9,20,null,null,15,7]", expectedOutput: "3" },
    { input: "[1,null,2]", expectedOutput: "2" },
  ],
  "100": [
    // Same Tree
    { input: "[1,2,3], [1,2,3]", expectedOutput: "true" },
    { input: "[1,2], [1,null,2]", expectedOutput: "false" },
    { input: "[1,2,1], [1,1,2]", expectedOutput: "false" },
  ],
  "102": [
    // Binary Tree Level Order Traversal
    { input: "[3,9,20,null,null,15,7]", expectedOutput: "[[3],[9,20],[15,7]]" },
    { input: "[1]", expectedOutput: "[[1]]" },
    { input: "[]", expectedOutput: "[]" },
  ],
  "98": [
    // Validate Binary Search Tree
    { input: "[2,1,3]", expectedOutput: "true" },
    { input: "[5,1,4,null,null,3,6]", expectedOutput: "false" },
  ],
  "124": [
    // Binary Tree Maximum Path Sum
    { input: "[1,2,3]", expectedOutput: "6" },
    { input: "[-10,9,20,null,null,15,7]", expectedOutput: "42" },
  ],

  // Graphs problems
  "200": [
    // Number of Islands
    {
      input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
      expectedOutput: "1",
    },
    {
      input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      expectedOutput: "3",
    },
  ],
  "133": [
    // Clone Graph
    { input: "[[2,4],[1,3],[2,4],[1,3]]", expectedOutput: "[[2,4],[1,3],[2,4],[1,3]]" },
    { input: "[[]]", expectedOutput: "[[]]" },
    { input: "[]", expectedOutput: "[]" },
  ],
  "207": [
    // Course Schedule
    { input: "2, [[1,0]]", expectedOutput: "true" },
    { input: "2, [[1,0],[0,1]]", expectedOutput: "false" },
  ],

  // Heaps problems
  "215": [
    // Kth Largest Element in an Array
    { input: "[3,2,1,5,6,4], 2", expectedOutput: "5" },
    { input: "[3,2,3,1,2,4,5,5,6], 4", expectedOutput: "4" },
  ],
  "347": [
    // Top K Frequent Elements
    { input: "[1,1,1,2,2,3], 2", expectedOutput: "[1,2]" },
    { input: "[1], 1", expectedOutput: "[1]" },
  ],
  "295": [
    // Find Median from Data Stream
    { input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()", expectedOutput: "1.5, 2.0" },
  ],
  "973": [
    // K Closest Points to Origin
    { input: "[[1,3],[-2,2]], 1", expectedOutput: "[[-2,2]]" },
    { input: "[[3,3],[5,-1],[-2,4]], 2", expectedOutput: "[[3,3],[-2,4]]" },
  ],

  // Advanced Structures problems
  "208": [
    // Implement Trie (Prefix Tree)
    {
      input: 'insert("apple"), search("apple"), search("app"), startsWith("app"), insert("app"), search("app")',
      expectedOutput: "true, false, true, true",
    },
  ],
  "307": [
    // Range Sum Query - Mutable
    { input: "nums = [1, 3, 5], sumRange(0, 2), update(1, 2), sumRange(0, 2)", expectedOutput: "9, 8" },
  ],
  "211": [
    // Design Add and Search Words Data Structure
    {
      input:
        'addWord("bad"), addWord("dad"), addWord("mad"), search("pad"), search("bad"), search(".ad"), search("b..")',
      expectedOutput: "false, true, true, true",
    },
  ],
  "212": [
    // Word Search II
    {
      input: '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"]',
      expectedOutput: '["eat","oath"]',
    },
    { input: '[["a","b"],["c","d"]], ["abcb"]', expectedOutput: "[]" },
  ],
  "315": [
    // Count of Smaller Numbers After Self
    { input: "[5,2,6,1]", expectedOutput: "[2,1,1,0]" },
    { input: "[-1]", expectedOutput: "[0]" },
    { input: "[-1,-1]", expectedOutput: "[0,0]" },
  ],
}

// Helper function to get test cases for a problem
export function getTestCases(problemId: string): TestCase[] {
  return testCases[problemId] || []
}

// Helper function to normalize output for comparison
export function normalizeOutput(output: string): string {
  return output
    .trim()
    .replace(/\s+/g, "")
    .replace(/[[\]"']/g, "")
    .toLowerCase()
}

// Function to validate output against expected output
export function validateOutput(output: string, expectedOutput: string): boolean {
  const normalizedOutput = normalizeOutput(output)
  const normalizedExpected = normalizeOutput(expectedOutput)

  return normalizedOutput === normalizedExpected
}
