"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerWidth < 768 ? 400 : 500
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class for graph visualization
    class Node {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      connected: Node[]

      constructor(x: number, y: number, radius: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = "#3b82f6"
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.connected = []
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update(width: number, height: number) {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < this.radius || this.x > width - this.radius) {
          this.vx *= -1
        }

        if (this.y < this.radius || this.y > height - this.radius) {
          this.vy *= -1
        }
      }

      connect(node: Node) {
        if (!this.connected.includes(node)) {
          this.connected.push(node)
          node.connected.push(this)
        }
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = Math.min(15, Math.floor(window.innerWidth / 100))

    for (let i = 0; i < nodeCount; i++) {
      const radius = 6
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius
      nodes.push(new Node(x, y, radius))
    }

    // Connect nodes (create a graph structure)
    for (let i = 0; i < nodes.length; i++) {
      const connectCount = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < connectCount; j++) {
        const connectToIndex = Math.floor(Math.random() * nodes.length)
        if (connectToIndex !== i) {
          nodes[i].connect(nodes[connectToIndex])
        }
      }
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 1

      for (const node of nodes) {
        for (const connectedNode of node.connected) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        node.update(canvas.width, canvas.height)
        node.draw(ctx)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" style={{ height: "100%" }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Learn <span className="text-primary">Data Structures</span> &{" "}
                <span className="text-primary">Algorithms</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Master the fundamentals with interactive visualizations and hands-on coding challenges.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/#algorithm-visualizer">
                <Button size="lg">Get Started</Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  window.location.href = "/learning-journey"
                }}
              >
                Explore Curriculum
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden rounded-lg border bg-background p-4 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/0 opacity-50" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-2 border-b pb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-sm font-medium">BinarySearchTree.js</div>
                </div>
                <pre className="flex-1 overflow-auto p-4 text-sm">
                  <code className="language-javascript">
                    {`class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    
    while (true) {
      if (value === current.value) return this;
      
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  
  find(value) {
    if (!this.root) return false;
    
    let current = this.root;
    let found = false;
    
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    
    return found ? current : false;
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
