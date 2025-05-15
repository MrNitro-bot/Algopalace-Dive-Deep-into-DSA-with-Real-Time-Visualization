import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SortingAlgorithmsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Link href="/algorithms" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Algorithms
        </Link>
      </div>

      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Sorting Algorithms</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Learn about different sorting techniques and their implementations
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:gap-8 mt-12">
        {sortingAlgorithms.map((algorithm) => (
          <Card
            key={algorithm.title}
            className="flex flex-col justify-between overflow-hidden border-muted bg-background transition-all hover:border-foreground hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-xl">{algorithm.title}</CardTitle>
              <CardDescription className="text-sm">
                Time Complexity: {algorithm.timeComplexity} | Space Complexity: {algorithm.spaceComplexity}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-base">{algorithm.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Difficulty: {algorithm.difficulty}</div>
              <Link href={algorithm.link}>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const sortingAlgorithms = [
  {
    title: "Bubble Sort",
    description:
      "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    difficulty: "Easy",
    link: "/algorithms/sorting/bubble-sort",
  },
  {
    title: "Selection Sort",
    description:
      "An in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    difficulty: "Easy",
    link: "/algorithms/sorting/selection-sort",
  },
  {
    title: "Insertion Sort",
    description:
      "Builds the final sorted array one item at a time. It's much less efficient on large lists than more advanced algorithms.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    difficulty: "Easy",
    link: "/algorithms/sorting/insertion-sort",
  },
  {
    title: "Merge Sort",
    description:
      "An efficient, stable, divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    difficulty: "Medium",
    link: "/algorithms/sorting/merge-sort",
  },
  {
    title: "Quick Sort",
    description:
      "An efficient, in-place sorting algorithm that uses a divide-and-conquer strategy with a pivot element to partition the array.",
    timeComplexity: "O(n log n) average, O(n²) worst",
    spaceComplexity: "O(log n)",
    difficulty: "Medium",
    link: "/algorithms/sorting/quick-sort",
  },
  {
    title: "Heap Sort",
    description:
      "A comparison-based sorting algorithm that uses a binary heap data structure to build a max-heap and then repeatedly extracts the maximum element.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    difficulty: "Medium",
    link: "/algorithms/sorting/heap-sort",
  },
  {
    title: "Counting Sort",
    description:
      "A non-comparison-based sorting algorithm that works well when there is a limited range of input values.",
    timeComplexity: "O(n + k)",
    spaceComplexity: "O(n + k)",
    difficulty: "Medium",
    link: "/algorithms/sorting/counting-sort",
  },
  {
    title: "Radix Sort",
    description:
      "A non-comparative sorting algorithm that sorts data with integer keys by grouping keys by individual digits that share the same position and value.",
    timeComplexity: "O(nk)",
    spaceComplexity: "O(n + k)",
    difficulty: "Hard",
    link: "/algorithms/sorting/radix-sort",
  },
]
