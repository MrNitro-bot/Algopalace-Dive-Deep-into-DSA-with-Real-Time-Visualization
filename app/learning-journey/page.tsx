import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeEditor } from "@/components/code-editor"

export default function LearningJourneyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Learning Journey</h1>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-4 border-b">
              <h2 className="font-medium">Data Structures & Algorithms</h2>
            </div>
            <div className="p-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 rounded-md bg-primary/10 text-primary font-medium">
                  <ChevronDown className="h-4 w-4" />
                  Step 1: Learn the basics
                  <span className="ml-auto text-xs">30/31</span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                  Step 2: Learn Important Sorting Techniques
                  <span className="ml-auto text-xs">3/7</span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                  Step 3: Solve Problems on Arrays [Easy -&gt; Medium -&gt; Hard]
                  <span className="ml-auto text-xs">21/40</span>
                </div>

                <div className="pl-6 space-y-1">
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                    Lec 1: Easy
                    <span className="ml-auto text-xs">11/14</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                    Lec 2: Medium
                    <span className="ml-auto text-xs">10/14</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                    Lec 3: Hard
                    <span className="ml-auto text-xs">0/12</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                  Step 4: Binary Search [1D, 2D Arrays, Search Space]
                  <span className="ml-auto text-xs">0/32</span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                  Step 5: Strings [Basic and Medium]
                  <span className="ml-auto text-xs">0/15</span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                  Step 6: Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]
                  <span className="ml-auto text-xs">0/31</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problem: Two Sum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of
                    the two numbers such that they add up to <code>target</code>.
                  </p>
                  <p className="text-sm mt-2">
                    You may assume that each input would have exactly one solution, and you may not use the same element
                    twice.
                  </p>
                  <p className="text-sm mt-2">You can return the answer in any order.</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Example 1:</h4>
                    <p className="text-sm mt-1">
                      <strong>Input:</strong> nums = [2,7,11,15], target = 9<br />
                      <strong>Output:</strong> [0,1]
                      <br />
                      <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Example 2:</h4>
                    <p className="text-sm mt-1">
                      <strong>Input:</strong> nums = [3,2,4], target = 6<br />
                      <strong>Output:</strong> [1,2]
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Example 3:</h4>
                    <p className="text-sm mt-1">
                      <strong>Input:</strong> nums = [3,3], target = 6<br />
                      <strong>Output:</strong> [0,1]
                    </p>
                  </div>
                </div>

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
                      defaultValue={`#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // Write your solution here
        
    }
};`}
                    />
                  </TabsContent>
                  <TabsContent value="java" className="mt-4">
                    <CodeEditor
                      language="java"
                      defaultValue={`import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`}
                    />
                  </TabsContent>
                  <TabsContent value="python" className="mt-4">
                    <CodeEditor
                      language="python"
                      defaultValue={`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your solution here
        
`}
                    />
                  </TabsContent>
                  <TabsContent value="javascript" className="mt-4">
                    <CodeEditor
                      language="javascript"
                      defaultValue={`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here
    
};`}
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Submit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
