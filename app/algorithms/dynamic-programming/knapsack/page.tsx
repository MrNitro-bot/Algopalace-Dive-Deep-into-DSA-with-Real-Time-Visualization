import { AlgorithmDetailTemplate } from "@/components/algorithm-detail-template"

export default function KnapsackPage() {
  return (
    <AlgorithmDetailTemplate
      title="0/1 Knapsack Problem"
      category="Dynamic Programming"
      categoryPath="dynamic-programming"
      description="Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. In the 0/1 Knapsack problem, you can either take an item (1) or leave it (0)."
      intuition={[
        "For each item, we have two choices: include it in the knapsack or exclude it.",
        "The naive approach would be to try all possible combinations of items, leading to an exponential time complexity of O(2^n).",
        "Dynamic Programming can optimize this by storing the results of subproblems to avoid redundant calculations.",
        "We can define a state DP[i][w] as the maximum value that can be obtained using the first i items with a maximum weight of w.",
      ]}
      approach={[
        "Create a 2D array dp[n+1][W+1] where n is the number of items and W is the maximum weight capacity.",
        "Initialize the base case: dp[0][w] = 0 for all w (no items means no value) and dp[i][0] = 0 for all i (zero capacity means no value).",
        "For each item i and weight w, if the weight of item i is greater than w, we can't include it, so dp[i][w] = dp[i-1][w].",
        "Otherwise, we take the maximum of two cases: (a) excluding the item: dp[i-1][w], or (b) including the item: value[i-1] + dp[i-1][w-weight[i-1]].",
        "The final answer is dp[n][W], which represents the maximum value with n items and weight capacity W.",
      ]}
      complexity={{
        time: "O(n×W) - We fill a 2D table of size (n+1)×(W+1).",
        space: "O(n×W) - We use a 2D array of size (n+1)×(W+1).",
      }}
      examples={[
        {
          input: "values = [60, 100, 120], weights = [10, 20, 30], capacity = 50",
          output: "220",
          explanation: "We can take items with values 100 and 120, with weights 20 and 30, for a total value of 220.",
        },
        {
          input: "values = [10, 40, 30, 50], weights = [5, 4, 6, 3], capacity = 10",
          output: "90",
          explanation: "We can take items with values 40 and 50, with weights 4 and 3, for a total value of 90.",
        },
      ]}
      implementations={{
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Bottom-up approach (Tabulation)
int knapsack(vector<int>& values, vector<int>& weights, int capacity) {
    int n = values.size();
    vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= capacity; w++) {
            // If current item's weight is more than capacity, we can't include it
            if (weights[i - 1] > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                // Max of (excluding current item, including current item)
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            }
        }
    }
    
    return dp[n][capacity];
}

// Space-optimized version (using 1D array)
int knapsackOptimized(vector<int>& values, vector<int>& weights, int capacity) {
    int n = values.size();
    vector<int> dp(capacity + 1, 0);
    
    for (int i = 0; i < n; i++) {
        for (int w = capacity; w >= weights[i]; w--) {
            dp[w] = max(dp[w], values[i] + dp[w - weights[i]]);
        }
    }
    
    return dp[capacity];
}

int main() {
    vector<int> values = {60, 100, 120};
    vector<int> weights = {10, 20, 30};
    int capacity = 50;
    
    cout << "Maximum value: " << knapsack(values, weights, capacity) << endl;
    cout << "Maximum value (optimized): " << knapsackOptimized(values, weights, capacity) << endl;
    
    return 0;
}`,
        java: `import java.util.Arrays;

public class Knapsack {
    // Bottom-up approach (Tabulation)
    public static int knapsack(int[] values, int[] weights, int capacity) {
        int n = values.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                // If current item's weight is more than capacity, we can't include it
                if (weights[i - 1] > w) {
                    dp[i][w] = dp[i - 1][w];
                } else {
                    // Max of (excluding current item, including current item)
                    dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
                }
            }
        }
        
        return dp[n][capacity];
    }
    
    // Space-optimized version (using 1D array)
    public static int knapsackOptimized(int[] values, int[] weights, int capacity) {
        int n = values.length;
        int[] dp = new int[capacity + 1];
        
        for (int i = 0; i < n; i++) {
            for (int w = capacity; w >= weights[i]; w--) {
                dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
            }
        }
        
        return dp[capacity];
    }
    
    // To find which items are included in the optimal solution
    public static void printSelectedItems(int[] values, int[] weights, int capacity) {
        int n = values.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i - 1] > w) {
                    dp[i][w] = dp[i - 1][w];
                } else {
                    dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
                }
            }
        }
        
        // Backtrack to find selected items
        boolean[] selected = new boolean[n];
        int w = capacity;
        for (int i = n; i > 0; i--) {
            if (dp[i][w] != dp[i - 1][w]) {
                selected[i - 1] = true;
                w -= weights[i - 1];
            }
        }
        
        System.out.println("Selected items (index, weight, value):");
        for (int i = 0; i < n; i++) {
            if (selected[i]) {
                System.out.println(i + ", " + weights[i] + ", " + values[i]);
            }
        }
    }
    
    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int capacity = 50;
        
        System.out.println("Maximum value: " + knapsack(values, weights, capacity));
        System.out.println("Maximum value (optimized): " + knapsackOptimized(values, weights, capacity));
        
        printSelectedItems(values, weights, capacity);
    }
}`,
        python: `# Bottom-up approach (Tabulation)
def knapsack(values, weights, capacity):
    n = len(values)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            # If current item's weight is more than capacity, we can't include it
            if weights[i - 1] > w:
                dp[i][w] = dp[i - 1][w]
            else:
                # Max of (excluding current item, including current item)
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])
    
    return dp[n][capacity]

# Space-optimized version (using 1D array)
def knapsack_optimized(values, weights, capacity):
    n = len(values)
    dp = [0] * (capacity + 1)
    
    for i in range(n):
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], values[i] + dp[w - weights[i]])
    
    return dp[capacity]

# To find which items are included in the optimal solution
def print_selected_items(values, weights, capacity):
    n = len(values)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] > w:
                dp[i][w] = dp[i - 1][w]
            else:
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])
    
    # Backtrack to find selected items
    selected = [False] * n
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            selected[i - 1] = True
            w -= weights[i - 1]
    
    print("Selected items (index, weight, value):")
    for i in range(n):
        if selected[i]:
            print(f"{i}, {weights[i]}, {values[i]}")

# Test
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50

print(f"Maximum value: {knapsack(values, weights, capacity)}")
print(f"Maximum value (optimized): {knapsack_optimized(values, weights, capacity)}")

print_selected_items(values, weights, capacity)`,
        javascript: `// Bottom-up approach (Tabulation)
function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      // If current item's weight is more than capacity, we can't include it
      if (weights[i - 1] > w) {
        dp[i][w] = dp[i - 1][w];
      } else {
        // Max of (excluding current item, including current item)
        dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
      }
    }
  }
  
  return dp[n][capacity];
}

// Space-optimized version (using 1D array)
function knapsackOptimized(values, weights, capacity) {
  const n = values.length;
  const dp = Array(capacity + 1).fill(0);
  
  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
    }
  }
  
  return dp[capacity];
}

// To find which items are included in the optimal solution
function printSelectedItems(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] > w) {
        dp[i][w] = dp[i - 1][w];
      } else {
        dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
      }
    }
  }
  
  // Backtrack to find selected items
  const selected = Array(n).fill(false);
  let w = capacity;
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selected[i - 1] = true;
      w -= weights[i - 1];
    }
  }
  
  console.log("Selected items (index, weight, value):");
  for (let i = 0; i < n; i++) {
    if (selected[i]) {
      console.log(\`\${i}, \${weights[i]}, \${values[i]}\`);
    }
  }
}

// Test
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;

console.log(\`Maximum value: \${knapsack(values, weights, capacity)}\`);
console.log(\`Maximum value (optimized): \${knapsackOptimized(values, weights, capacity)}\`);

printSelectedItems(values, weights, capacity);`,
      }}
    />
  )
}
