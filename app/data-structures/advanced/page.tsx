import type { Metadata } from "next"
import { ProblemList } from "@/components/problem-list"

export const metadata: Metadata = {
  title: "Advanced Data Structures Problems | AlgoMaster",
  description: "Practice advanced data structure problems to master these specialized structures",
}

export default function AdvancedStructuresProblemsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Advanced Data Structures</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Master advanced data structures by solving these carefully selected problems
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <ProblemList problems={advancedProblems} category="advanced" />
      </div>
    </div>
  )
}

const advancedProblems = [
  {
    id: "208",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    description: `A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- \`Trie()\` Initializes the trie object.
- \`void insert(String word)\` Inserts the string \`word\` into the trie.
- \`boolean search(String word)\` Returns \`true\` if the string \`word\` is in the trie (i.e., was inserted before), and \`false\` otherwise.
- \`boolean startsWith(String prefix)\` Returns \`true\` if there is a previously inserted string \`word\` that has the prefix \`prefix\`, and \`false\` otherwise.`,
    examples: [
      {
        input: `["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]`,
        output: `[null, null, true, false, true, null, true]`,
        explanation: `
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True`,
      },
    ],
    starterCode: {
      cpp: `class Trie {
public:
    Trie() {
        
    }
    
    void insert(string word) {
        
    }
    
    bool search(string word) {
        
    }
    
    bool startsWith(string prefix) {
        
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */`,
      java: `class Trie {

    public Trie() {
        
    }
    
    public void insert(String word) {
        
    }
    
    public boolean search(String word) {
        
    }
    
    public boolean startsWith(String prefix) {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */`,
      python: `class Trie:

    def __init__(self):
        

    def insert(self, word: str) -> None:
        

    def search(self, word: str) -> bool:
        

    def startsWith(self, prefix: str) -> bool:
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)`,
      javascript: `/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var Trie = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};`,
    },
  },
  {
    id: "307",
    title: "Range Sum Query - Mutable",
    difficulty: "Medium",
    description: `Given an integer array \`nums\`, handle multiple queries of the following types:

1. Update the value of an element in \`nums\`.
2. Calculate the sum of the elements of \`nums\` between indices \`left\` and \`right\` inclusive where \`left <= right\`.

Implement the \`NumArray\` class:

- \`NumArray(int[] nums)\` Initializes the object with the integer array \`nums\`.
- \`void update(int index, int val)\` Updates the value of \`nums[index]\` to be \`val\`.
- \`int sumRange(int left, int right)\` Returns the sum of the elements of \`nums\` between indices \`left\` and \`right\` inclusive (i.e. \`nums[left] + nums[left + 1] + ... + nums[right]\`).`,
    examples: [
      {
        input: `["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]`,
        output: `[null, 9, null, 8]`,
        explanation: `
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8`,
      },
    ],
    starterCode: {
      cpp: `class NumArray {
public:
    NumArray(vector<int>& nums) {
        
    }
    
    void update(int index, int val) {
        
    }
    
    int sumRange(int left, int right) {
        
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * obj->update(index,val);
 * int param_2 = obj->sumRange(left,right);
 */`,
      java: `class NumArray {

    public NumArray(int[] nums) {
        
    }
    
    public void update(int index, int val) {
        
    }
    
    public int sumRange(int left, int right) {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.update(index,val);
 * int param_2 = obj.sumRange(left,right);
 */`,
      python: `class NumArray:

    def __init__(self, nums: List[int]):
        

    def update(self, index: int, val: int) -> None:
        

    def sumRange(self, left: int, right: int) -> int:
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)`,
      javascript: `/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */`,
    },
  },
  {
    id: "211",
    title: "Design Add and Search Words Data Structure",
    difficulty: "Medium",
    description: `Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the \`WordDictionary\` class:

- \`WordDictionary()\` Initializes the object.
- \`void addWord(word)\` Adds \`word\` to the data structure, it can be matched later.
- \`bool search(word)\` Returns \`true\` if there is any string in the data structure that matches \`word\` or \`false\` otherwise. \`word\` may contain dots \`'.'\` where dots can be matched with any letter.`,
    examples: [
      {
        input: `["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]`,
        output: `[null,null,null,null,false,true,true,true]`,
        explanation: `
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True`,
      },
    ],
    starterCode: {
      cpp: `class WordDictionary {
public:
    WordDictionary() {
        
    }
    
    void addWord(string word) {
        
    }
    
    bool search(string word) {
        
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary* obj = new WordDictionary();
 * obj->addWord(word);
 * bool param_2 = obj->search(word);
 */`,
      java: `class WordDictionary {

    public WordDictionary() {
        
    }
    
    public void addWord(String word) {
        
    }
    
    public boolean search(String word) {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */`,
      python: `class WordDictionary:

    def __init__(self):
        

    def addWord(self, word: str) -> None:
        

    def search(self, word: str) -> bool:
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)`,
      javascript: `/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
var WordDictionary = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};`,
    },
  },
  {
    id: "212",
    title: "Word Search II",
    difficulty: "Hard",
    description: `Given an \`m x n\` \`board\` of characters and a list of strings \`words\`, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.`,
    examples: [
      {
        input: `board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]`,
        output: `["eat","oath"]`,
        explanation: "",
      },
      {
        input: `board = [["a","b"],["c","d"]], words = ["abcb"]`,
        output: `[]`,
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public List<String> findWords(char[][] board, String[] words) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "315",
    title: "Count of Smaller Numbers After Self",
    difficulty: "Hard",
    description: `Given an integer array \`nums\`, return an integer array \`counts\` where \`counts[i]\` is the number of smaller elements to the right of \`nums[i]\`.`,
    examples: [
      {
        input: "nums = [5,2,6,1]",
        output: "[2,1,1,0]",
        explanation: `
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.`,
      },
      {
        input: "nums = [-1]",
        output: "[0]",
        explanation: "",
      },
      {
        input: "nums = [-1,-1]",
        output: "[0,0]",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public List<Integer> countSmaller(int[] nums) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    // Write your solution here
    
};`,
    },
  },
]
