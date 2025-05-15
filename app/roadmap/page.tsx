import { ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">DSA Learning Roadmap</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A structured path to master Data Structures and Algorithms from beginner to expert
        </p>
      </div>

      <div className="mx-auto max-w-4xl mt-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Learning Path Overview</CardTitle>
              <CardDescription>
                Follow this roadmap to systematically build your knowledge of data structures and algorithms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Fundamentals</h3>
                    <p className="text-sm text-muted-foreground">
                      Start with the basics of programming, time complexity, and space complexity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Basic Data Structures</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn arrays, strings, linked lists, stacks, and queues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Basic Algorithms</h3>
                    <p className="text-sm text-muted-foreground">
                      Master sorting, searching, and basic problem-solving techniques
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Intermediate Data Structures</h3>
                    <p className="text-sm text-muted-foreground">
                      Study hash tables, trees, heaps, and basic graph representations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium">Intermediate Algorithms</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn divide and conquer, greedy algorithms, and dynamic programming
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    6
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced Data Structures</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore advanced trees, disjoint sets, and complex graph structures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    7
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced Algorithms</h3>
                    <p className="text-sm text-muted-foreground">
                      Master advanced graph algorithms, string algorithms, and geometric algorithms
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Structures Learning Order</CardTitle>
              <CardDescription>Follow this sequence to build a strong foundation in data structures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="bg-muted px-4 py-2 font-medium">Beginner Level</div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Arrays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Strings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Linked Lists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Stacks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Queues</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="bg-muted px-4 py-2 font-medium">Intermediate Level</div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Hash Tables</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Binary Trees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Binary Search Trees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Heaps / Priority Queues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Graphs (Basics)</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="bg-muted px-4 py-2 font-medium">Advanced Level</div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Balanced Trees (AVL, Red-Black)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Tries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Segment Trees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Disjoint Set Union (Union Find)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Advanced Graph Structures</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Link href="/learning-journey">
                  <Button>
                    Start Your Learning Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
