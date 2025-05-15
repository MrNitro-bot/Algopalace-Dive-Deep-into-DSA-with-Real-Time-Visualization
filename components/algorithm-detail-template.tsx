import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeEditor } from "@/components/code-editor"

interface Example {
  input: string
  output: string
  explanation: string
}

interface Complexity {
  time: string
  space: string
}

interface Implementations {
  cpp: string
  java: string
  python: string
  javascript: string
}

interface AlgorithmDetailTemplateProps {
  title: string
  category: string
  categoryPath: string
  description: string
  intuition: string[]
  approach: string[]
  complexity: Complexity
  examples: Example[]
  implementations: Implementations
}

export function AlgorithmDetailTemplate({
  title,
  category,
  categoryPath,
  description,
  intuition,
  approach,
  complexity,
  examples,
  implementations,
}: AlgorithmDetailTemplateProps) {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Link
          href={`/algorithms/${categoryPath}`}
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {category} Algorithms
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{description}</p>

            {examples.length > 0 && (
              <div className="mt-6 space-y-4">
                <h3 className="font-medium">Examples:</h3>

                {examples.map((example, index) => (
                  <div key={index} className="bg-muted p-4 rounded-md">
                    <p className="font-mono">
                      <strong>Example {index + 1}:</strong>
                      <br />
                      <strong>Input:</strong> {example.input}
                      <br />
                      <strong>Output:</strong> {example.output}
                      <br />
                      <strong>Explanation:</strong> {example.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Intuition</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {intuition.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Approach</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {approach.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Complexity Analysis</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Time Complexity:</strong> {complexity.time}
                  </li>
                  <li>
                    <strong>Space Complexity:</strong> {complexity.space}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cpp">
              <TabsList>
                <TabsTrigger value="cpp">C++</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="cpp" className="mt-4">
                <CodeEditor language="cpp" defaultValue={implementations.cpp} />
              </TabsContent>
              <TabsContent value="java" className="mt-4">
                <CodeEditor language="java" defaultValue={implementations.java} />
              </TabsContent>
              <TabsContent value="python" className="mt-4">
                <CodeEditor language="python" defaultValue={implementations.python} />
              </TabsContent>
              <TabsContent value="javascript" className="mt-4">
                <CodeEditor language="javascript" defaultValue={implementations.javascript} />
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-center">
              <Button>Practice Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
