import type { Metadata } from "next"
import { ProblemList } from "@/components/problem-list"

export const metadata: Metadata = {
  title: "Hash Table Problems | AlgoMaster",
  description: "Practice hash table problems to master this fundamental data structure",
}

export default function HashTableProblemsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Hash Table Problems</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Master hash tables by solving these carefully selected problems
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <ProblemList problems={hashTableProblems} category="hash-tables" />
      </div>
    </div>
  )
}

const hashTableProblems = [
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
    id: "49",
    title: "Group Anagrams",
    difficulty: "Medium",
    description: `Given an array of strings \`strs\`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
        explanation: "",
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
        explanation: "",
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "128",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    description: `Given an unsorted array of integers \`nums\`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in \`O(n)\` time.`,
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
        explanation: "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.",
      },
      {
        input: "nums = [0,3,7,2,5,8,4,6,0,1]",
        output: "9",
        explanation:
          "The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int longestConsecutive(int[] nums) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "146",
    title: "LRU Cache",
    difficulty: "Medium",
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the \`LRUCache\` class:
- \`LRUCache(int capacity)\` Initialize the LRU cache with positive size \`capacity\`.
- \`int get(int key)\` Return the value of the \`key\` if the key exists, otherwise return \`-1\`.
- \`void put(int key, int value)\` Update the value of the \`key\` if the \`key\` exists. Otherwise, add the \`key-value\` pair to the cache. If the number of keys exceeds the \`capacity\` from this operation, evict the least recently used key.

The functions \`get\` and \`put\` must each run in \`O(1)\` average time complexity.`,
    examples: [
      {
        input: `["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]`,
        output: `[null, null, null, 1, null, -1, null, -1, 3, 4]`,
        explanation: `
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4`,
      },
    ],
    starterCode: {
      cpp: `class LRUCache {
public:
    LRUCache(int capacity) {
        
    }
    
    int get(int key) {
        
    }
    
    void put(int key, int value) {
        
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key, value);
 */`,
      java: `class LRUCache {

    public LRUCache(int capacity) {
        
    }
    
    public int get(int key) {
        
    }
    
    public void put(int key, int value) {
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key, value);
 */`,
      python: `class LRUCache:

    def __init__(self, capacity: int):
        

    def get(self, key: int) -> int:
        

    def put(self, key: int, value: int) -> None:
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)`,
      javascript: `/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */`,
    },
  },
  {
    id: "76",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    description: `Given two strings \`s\` and \`t\` of lengths \`m\` and \`n\` respectively, return the minimum window substring of \`s\` such that every character in \`t\` (including duplicates) is included in the window. If there is no such substring, return the empty string \`""\`.

The testcases will be generated such that the answer is unique.`,
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t.",
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
        explanation: "The entire string s is the minimum window.",
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
        explanation:
          "Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    string minWindow(string s, string t) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public String minWindow(String s, String t) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Write your solution here
    
};`,
    },
  },
]
