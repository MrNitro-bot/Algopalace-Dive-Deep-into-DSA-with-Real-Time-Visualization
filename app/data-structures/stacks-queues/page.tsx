import type { Metadata } from "next"
import { ProblemList } from "@/components/problem-list"

export const metadata: Metadata = {
  title: "Stacks & Queues Problems | AlgoMaster",
  description: "Practice stack and queue problems to master these fundamental data structures",
}

export default function StacksQueuesProblemsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Stacks & Queues Problems</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Master stacks and queues by solving these carefully selected problems
        </p>
      </div>

      <div className="mx-auto max-w-5xl mt-12">
        <ProblemList problems={stacksQueuesProblems} category="stacks-queues" />
      </div>
    </div>
  )
}

const stacksQueuesProblems = [
  {
    id: "20",
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "",
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "155",
    title: "Min Stack",
    difficulty: "Medium",
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the \`MinStack\` class:
- \`MinStack()\` initializes the stack object.
- \`void push(int val)\` pushes the element \`val\` onto the stack.
- \`void pop()\` removes the element on the top of the stack.
- \`int top()\` gets the top element of the stack.
- \`int getMin()\` retrieves the minimum element in the stack.

You must implement a solution with \`O(1)\` time complexity for each function.`,
    examples: [
      {
        input: `["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]`,
        output: `[null,null,null,null,-3,null,0,-2]`,
        explanation: `
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2`,
      },
    ],
    starterCode: {
      cpp: `class MinStack {
public:
    MinStack() {
        
    }
    
    void push(int val) {
        
    }
    
    void pop() {
        
    }
    
    int top() {
        
    }
    
    int getMin() {
        
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */`,
      java: `class MinStack {
    
    public MinStack() {
        
    }
    
    public void push(int val) {
        
    }
    
    public void pop() {
        
    }
    
    public int top() {
        
    }
    
    public int getMin() {
        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */`,
      python: `class MinStack:

    def __init__(self):
        

    def push(self, val: int) -> None:
        

    def pop(self) -> None:
        

    def top(self) -> int:
        

    def getMin(self) -> int:
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()`,
      javascript: `/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var MinStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};`,
    },
  },
  {
    id: "232",
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    description: `Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (\`push\`, \`peek\`, \`pop\`, and \`empty\`).

Implement the \`MyQueue\` class:
- \`void push(int x)\` Pushes element x to the back of the queue.
- \`int pop()\` Removes the element from the front of the queue and returns it.
- \`int peek()\` Returns the element at the front of the queue.
- \`boolean empty()\` Returns \`true\` if the queue is empty, \`false\` otherwise.

Notes:
- You must use only standard operations of a stack, which means only \`push to top\`, \`peek/pop from top\`, \`size\`, and \`is empty\` operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.`,
    examples: [
      {
        input: `["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]`,
        output: `[null, null, null, 1, 1, false]`,
        explanation: `
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false`,
      },
    ],
    starterCode: {
      cpp: `class MyQueue {
public:
    MyQueue() {
        
    }
    
    void push(int x) {
        
    }
    
    int pop() {
        
    }
    
    int peek() {
        
    }
    
    bool empty() {
        
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */`,
      java: `class MyQueue {
    
    public MyQueue() {
        
    }
    
    public void push(int x) {
        
    }
    
    public int pop() {
        
    }
    
    public int peek() {
        
    }
    
    public boolean empty() {
        
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */`,
      python: `class MyQueue:

    def __init__(self):
        

    def push(self, x: int) -> None:
        

    def pop(self) -> int:
        

    def peek(self) -> int:
        

    def empty(self) -> bool:
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()`,
      javascript: `var MyQueue = function() {
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */`,
    },
  },
  {
    id: "84",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    description: `Given an array of integers \`heights\` representing the histogram's bar height where the width of each bar is \`1\`, return the area of the largest rectangle in the histogram.`,
    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation:
          "The above is a histogram where width of each bar is 1. The largest rectangle is shown in the red area, which has an area = 10 units.",
      },
      {
        input: "heights = [2,4]",
        output: "4",
        explanation: "",
      },
    ],
    starterCode: {
      cpp: `class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int largestRectangleArea(int[] heights) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // Write your solution here
    
};`,
    },
  },
  {
    id: "239",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    description: `You are given an array of integers \`nums\`, there is a sliding window of size \`k\` which is moving from the very left of the array to the very right. You can only see the \`k\` numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.`,
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
        explanation: `
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7`,
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
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        // Write your solution here
        
    }
};`,
      java: `class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        
    }
}`,
      python: `class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        # Write your solution here
        
`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // Write your solution here
    
};`,
    },
  },
]
