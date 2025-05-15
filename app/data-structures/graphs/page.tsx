import type { Metadata } from "next"
import { ProblemList } from "@/components/problem-list"

export const metadata: Metadata = {
  title: "Graph Problems | AlgoMaster",
  description: "Practice graph problems to master this fundamental data structure",
}

export default function GraphProblemsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Graph Problems</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Master graphs by solving these carefully selected problems
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <ProblemList problems={graphProblems} category="graphs" />
      </div>
    </div>
  )
}

const graphProblems = [
  {
    id: "200",
    title: "Number of Islands",
    difficulty: "Medium",
    description: `Given an \`m x n\` 2D binary grid \`grid\` which represents a map of \`'1'\`s (land) and \`'0'\`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
    examples: [
      {
        input: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
        output: "1",
        explanation: "",
      },
      {
        input: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,
        output: "3",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "133",
    title: "Clone Graph",
    difficulty: "Medium",
    description: `Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (\`int\`) and a list (\`List[Node]\`) of its neighbors.

\`\`\`
class Node {
    public int val;
    public List<Node> neighbors;
}
\`\`\`

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with \`val == 1\`, the second node with \`val == 2\`, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with \`val = 1\`. You must return the copy of the given node as a reference to the cloned graph.`,
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
        explanation:
          "There are 4 nodes in the graph. 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4). 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3). 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4). 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).",
      },
      {
        input: "adjList = [[]]",
        output: "[[]]",
        explanation:
          "Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.",
      },
      {
        input: "adjList = []",
        output: "[]",
        explanation: "This an empty graph, it does not have any nodes.",
      },
    ],
    starterCode: {
      cpp: `/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

class Solution {
public:
    Node* cloneGraph(Node* node) {
        // Write your solution here
        
    }
};`,
      java: `/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        // Write your solution here
        
    }
}`,
      python: `"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        # Write your solution here
        
`,
      javascript: `/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "207",
    title: "Course Schedule",
    difficulty: "Medium",
    description: `There are a total of \`numCourses\` courses you have to take, labeled from \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [ai, bi]\` indicates that you must take course \`bi\` first if you want to take course \`ai\`.

For example, the pair \`[0, 1]\`, indicates that to take course \`0\` you have to first take course \`1\`.

Return \`true\` if you can finish all courses. Otherwise, return \`false\`.`,
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation:
          "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation:
          "There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "743",
    title: "Network Delay Time",
    difficulty: "Medium",
    description: `You are given a network of \`n\` nodes, labeled from \`1\` to \`n\`. You are also given \`times\`, a list of travel times as directed edges \`times[i] = (ui, vi, wi)\`, where \`ui\` is the source node, \`vi\` is the target node, and \`wi\` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node \`k\`. Return the minimum time it takes for all the \`n\` nodes to receive the signal. If it is impossible for all the \`n\` nodes to receive the signal, return \`-1\`.`,
    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
        explanation:
          "We start at node 2. First, we reach node 1 in 1 time unit. Then, we reach node 3 in 1 time unit. Finally, we reach node 4 from node 3 in 1 time unit. So the total time is 2.",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 1",
        output: "1",
        explanation: "We start at node 1 and reach node 2 in 1 time unit.",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 2",
        output: "-1",
        explanation: "We start at node 2, but we can't reach node 1.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "269",
    title: "Alien Dictionary",
    difficulty: "Hard",
    description: `There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings \`words\` from the alien language's dictionary, where the strings in \`words\` are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return \`""\`. If there are multiple solutions, return any of them.`,
    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
        explanation:
          "The letters from the alien language are 'w', 'e', 'r', 't', and 'f'. From the given words, we can determine that 'w' comes before 'e', 'e' comes before 'r', 'r' comes before 't', and 'w' comes before 'f'. So the unique letters in lexicographical order are 'w', 'e', 'r', 't', and 'f'.",
      },
      {
        input: 'words = ["z","x"]',
        output: '"zx"',
        explanation:
          "The letters from the alien language are 'z' and 'x'. From the given words, we can determine that 'z' comes before 'x'. So the unique letters in lexicographical order are 'z' and 'x'.",
      },
      {
        input: 'words = ["z","x","z"]',
        output: '""',
        explanation: "The order is invalid, so return ''.",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    string alienOrder(vector<string>& words) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public String alienOrder(String[] words) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def alienOrder(self, words: List[str]) -> str:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    // Write your solution here
    
};`,
    },
  },
]
