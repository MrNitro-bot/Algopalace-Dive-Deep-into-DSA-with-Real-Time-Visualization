import Link from "next/link"
import { ArrowRight, BookOpen, Database, GitBranch, GitFork, Hash, List, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataStructuresPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Data Structures</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Learn about the fundamental building blocks of computer science and how to implement them.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {dataStructures.map((ds) => (
          <Card
            key={ds.title}
            className="flex flex-col justify-between overflow-hidden border-muted bg-background transition-all hover:border-foreground hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <ds.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">{ds.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <CardDescription className="text-base">{ds.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={ds.link} className="inline-flex items-center text-sm font-medium text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-[58rem] mt-16">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-2xl font-bold mb-4">Learning Path</h2>
          <div className="space-y-4">
            {learningPath.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-none">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button>Start Learning</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const dataStructures = [
  {
    title: "Arrays",
    description: "Learn about the most basic data structure with O(1) access time",
    icon: List,
    link: "/data-structures/arrays",
  },
  {
    title: "Linked Lists",
    description: "Explore singly and doubly linked lists with dynamic memory allocation",
    icon: GitBranch,
    link: "/data-structures/linked-lists",
  },
  {
    title: "Stacks & Queues",
    description: "Understand LIFO and FIFO data structures and their applications",
    icon: Database,
    link: "/data-structures/stacks-queues",
  },
  {
    title: "Hash Tables",
    description: "Master hash functions and collision resolution techniques",
    icon: Hash,
    link: "/data-structures/hash-tables",
  },
  {
    title: "Trees",
    description: "Learn about binary trees, BSTs, AVL trees, and more",
    icon: GitFork,
    link: "/data-structures/trees",
  },
  {
    title: "Graphs",
    description: "Explore graph representations and traversal algorithms",
    icon: Network,
    link: "/data-structures/graphs",
  },
  {
    title: "Heaps",
    description: "Understand priority queues and heap implementations",
    icon: Database,
    link: "/data-structures/heaps",
  },
  {
    title: "Advanced Structures",
    description: "Explore tries, segment trees, and other specialized structures",
    icon: BookOpen,
    link: "/data-structures/advanced",
  },
]

const learningPath = [
  {
    title: "Start with Arrays",
    description: "Begin with the most fundamental data structure to understand memory allocation and indexing.",
  },
  {
    title: "Move to Linked Lists",
    description: "Learn about pointers and dynamic memory allocation with singly and doubly linked lists.",
  },
  {
    title: "Explore Stacks and Queues",
    description: "Understand these abstract data types and their implementations using arrays and linked lists.",
  },
  {
    title: "Study Hash Tables",
    description: "Learn about hash functions, collision resolution, and the power of O(1) average-case operations.",
  },
  {
    title: "Master Trees and Graphs",
    description: "Explore hierarchical and network data structures that power many algorithms and applications.",
  },
]
