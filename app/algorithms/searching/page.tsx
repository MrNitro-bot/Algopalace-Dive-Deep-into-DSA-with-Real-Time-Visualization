import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SearchingAlgorithmsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Link href="/algorithms" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Algorithms
        </Link>
      </div>

      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Searching Algorithms</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Learn about different searching techniques and their implementations
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:gap-8 mt-12">
        {searchingAlgorithms.map((algorithm) => (
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

const searchingAlgorithms = [
  {
    title: "Linear Search",
    description:
      "A simple search algorithm that checks each element in a list sequentially until the desired element is found or the list ends.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    difficulty: "Easy",
    link: "/algorithms/searching/linear-search",
  },
  {
    title: "Binary Search",
    description:
      "An efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    difficulty: "Easy",
    link: "/algorithms/searching/binary-search",
  },
  {
    title: "Jump Search",
    description:
      "A search algorithm that works on sorted arrays by jumping ahead by fixed steps and then performing linear search.",
    timeComplexity: "O(√n)",
    spaceComplexity: "O(1)",
    difficulty: "Medium",
    link: "/algorithms/searching/jump-search",
  },
  {
    title: "Interpolation Search",
    description:
      "An improved variant of binary search that works better for uniformly distributed data by estimating the position of the target value.",
    timeComplexity: "O(log log n) average, O(n) worst",
    spaceComplexity: "O(1)",
    difficulty: "Medium",
    link: "/algorithms/searching/interpolation-search",
  },
]
