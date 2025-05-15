import Link from "next/link"
import { ArrowRight, Search, Layers, SortAsc } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AlgorithmsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Algorithms</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Learn about fundamental algorithms and their implementations
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
        {algorithmCategories.map((category) => (
          <Card
            key={category.title}
            className="flex flex-col justify-between overflow-hidden border-muted bg-background transition-all hover:border-foreground hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <category.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <CardDescription className="text-base">{category.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={category.link} className="inline-flex items-center text-sm font-medium text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const algorithmCategories = [
  {
    title: "Sorting Algorithms",
    description: "Learn about bubble sort, merge sort, quick sort, and other sorting techniques",
    icon: SortAsc,
    link: "/algorithms/sorting",
  },
  {
    title: "Searching Algorithms",
    description: "Explore linear search, binary search, and other searching methods",
    icon: Search,
    link: "/algorithms/searching",
  },
  {
    title: "Dynamic Programming",
    description: "Master the art of breaking down problems into simpler subproblems",
    icon: Layers,
    link: "/algorithms/dynamic-programming",
  },
]
