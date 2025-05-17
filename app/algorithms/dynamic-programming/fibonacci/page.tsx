import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function FibonacciPage() {
  return (
    <AlgorithmDetailTemplate
      title="Fibonacci Sequence"
      category="Dynamic Programming"
      categoryPath="dynamic-programming"
      description="The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. Given a number n, calculate the nth Fibonacci number."
      intuition={[
        "The naive recursive approach to calculate Fibonacci numbers leads to exponential time complexity due to recalculating the same values multiple times.",
        "Dynamic Programming can optimize this by storing previously calculated values to avoid redundant calculations.",
        "We can use either a top-down approach (memoization) or a bottom-up approach (tabulation) to solve this problem efficiently.",
      ]}
      approach={[
        "Initialize an array or map to store previously calculated Fibonacci numbers.",
        "For the bottom-up approach, start from the base cases (F(0) = 0, F(1) = 1) and iteratively calculate F(2), F(3), ..., F(n).",
        "For the top-down approach, use recursion with memoization to calculate F(n) by checking if F(n) is already calculated before making recursive calls.",
        "Return the nth Fibonacci number once calculated.",
      ]}
      complexity={{
        time: "O(n) - We calculate each Fibonacci number exactly once.",
        space: "O(n) - We store all Fibonacci numbers from 0 to n.",
      }}
      examples={[
        {
          input: "n = 5",
          output: "5",
          explanation: "The Fibonacci sequence is [0, 1, 1, 2, 3, 5, 8, ...]. F(5) = 5.",
        },
        {
          input: "n = 10",
          output: "55",
          explanation: "F(10) = F(9) + F(8) = 34 + 21 = 55.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
using namespace std;

// Bottom-up approach (Tabulation)
int fibonacci(int n) {
    if (n <= 1) return n;
    
    vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space-optimized version
int fibonacciOptimized(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0;
    int prev1 = 1;
    int current;
    
    for (int i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

int main() {
    int n = 10;
    cout << "F(" << n << ") = " << fibonacci(n) << endl;
    cout << "F(" << n << ") (optimized) = " << fibonacciOptimized(n) << endl;
    return 0;
}`,
        java: `public class Fibonacci {
    // Bottom-up approach (Tabulation)
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }
    
    // Space-optimized version
    public static int fibonacciOptimized(int n) {
        if (n <= 1) return n;
        
        int prev2 = 0;
        int prev1 = 1;
        int current = 0;
        
        for (int i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
    
    // Top-down approach (Memoization)
    public static int fibonacciMemoization(int n, Integer[] memo) {
        if (n <= 1) return n;
        
        if (memo[n] != null) return memo[n];
        
        memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
        return memo[n];
    }
    
    public static void main(String[] args) {
        int n = 10;
        System.out.println("F(" + n + ") = " + fibonacci(n));
        System.out.println("F(" + n + ") (optimized) = " + fibonacciOptimized(n));
        
        Integer[] memo = new Integer[n + 1];
        System.out.println("F(" + n + ") (memoization) = " + fibonacciMemoization(n, memo));
    }
}`,
        python: `# Bottom-up approach (Tabulation)
def fibonacci(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# Space-optimized version
def fibonacci_optimized(n):
    if n <= 1:
        return n
    
    prev2 = 0
    prev1 = 1
    
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    
    return prev1

# Top-down approach (Memoization)
def fibonacci_memoization(n, memo={}):
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo)
    return memo[n]

# Test
n = 10
print(f"F({n}) = {fibonacci(n)}")
print(f"F({n}) (optimized) = {fibonacci_optimized(n)}")
print(f"F({n}) (memoization) = {fibonacci_memoization(n)}")`,
        javascript: `// Bottom-up approach (Tabulation)
function fibonacci(n) {
  if (n <= 1) return n;
  
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Space-optimized version
function fibonacciOptimized(n) {
  if (n <= 1) return n;
  
  let prev2 = 0;
  let prev1 = 1;
  let current;
  
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}

// Top-down approach (Memoization)
function fibonacciMemoization(n, memo = {}) {
  if (n in memo) return memo[n];
  
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}

// Test
const n = 10;
console.log(\`F(\${n}) = \${fibonacci(n)}\`);
console.log(\`F(\${n}) (optimized) = \${fibonacciOptimized(n)}\`);
console.log(\`F(\${n}) (memoization) = \${fibonacciMemoization(n)}\`);`,
      }}
    />
  )
}
