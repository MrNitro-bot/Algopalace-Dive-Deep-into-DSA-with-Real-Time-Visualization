import Link from "next/link"
import { ArrowRight, BookOpen, Code, Cpu, GitBranch, LineChart, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Master Data Structures & Algorithms
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Our interactive platform helps you learn DSA concepts through visualizations, step-by-step explanations, and
          hands-on coding challenges.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col justify-between overflow-hidden border-muted bg-background transition-all hover:border-foreground hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <feature.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={feature.link} className="inline-flex items-center text-sm font-medium text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    title: "Interactive Visualizations",
    description: "See algorithms in action with step-by-step visual explanations",
    icon: LineChart,
    link: "/visualizations",
  },
  {
    title: "Comprehensive Curriculum",
    description: "Structured learning path from basic to advanced concepts",
    icon: BookOpen,
    link: "/curriculum",
  },
  {
    title: "Coding Challenges",
    description: "Practice with real-world problems and get instant feedback",
    icon: Code,
    link: "/challenges",
  },
  {
    title: "Data Structure Library",
    description: "Explore common data structures with interactive examples",
    icon: GitBranch,
    link: "/data-structures",
  },
  {
    title: "Algorithm Playground",
    description: "Experiment with algorithms and see how they perform",
    icon: Cpu,
    link: "/playground",
  },
  {
    title: "Performance Analysis",
    description: "Learn Big O notation and analyze algorithm efficiency",
    icon: Zap,
    link: "/performance",
  },
]
