"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, SkipForward } from "lucide-react"

export function AlgorithmVisualizer() {
  const [array, setArray] = useState<number[]>([])
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [speed, setSpeed] = useState(50)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<number[][]>([])
  const [comparisons, setComparisons] = useState<[number, number][]>([])
  const [currentComparison, setCurrentComparison] = useState<[number, number] | null>(null)
  const [algorithm, setAlgorithm] = useState<"bubble" | "insertion" | "selection" | "quick">("bubble")

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Generate random array
  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < 12; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 10)
    }
    setArray(newArray)
    setCompleted(false)
    setCurrentStep(0)
    setSteps([])
    setComparisons([])
    setCurrentComparison(null)
  }

  // Initialize array on component mount
  useEffect(() => {
    generateArray()
  }, [])

  // Prepare sorting steps
  useEffect(() => {
    if (array.length === 0) return

    // Only recalculate steps when array or algorithm changes and not during sorting
    if (sorting) return

    const newSteps: number[][] = [[...array]]
    const newComparisons: [number, number][] = []

    const arrCopy = [...array]

    if (algorithm === "bubble") {
      // Bubble sort
      for (let i = 0; i < arrCopy.length; i++) {
        for (let j = 0; j < arrCopy.length - i - 1; j++) {
          newComparisons.push([j, j + 1])
          if (arrCopy[j] > arrCopy[j + 1]) {
            const temp = arrCopy[j]
            arrCopy[j] = arrCopy[j + 1]
            arrCopy[j + 1] = temp
            newSteps.push([...arrCopy])
          }
        }
      }
    } else if (algorithm === "insertion") {
      // Insertion sort
      for (let i = 1; i < arrCopy.length; i++) {
        let j = i
        while (j > 0 && arrCopy[j - 1] > arrCopy[j]) {
          newComparisons.push([j - 1, j])
          const temp = arrCopy[j]
          arrCopy[j] = arrCopy[j - 1]
          arrCopy[j - 1] = temp
          j--
          newSteps.push([...arrCopy])
        }
      }
    } else if (algorithm === "selection") {
      // Selection sort
      for (let i = 0; i < arrCopy.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arrCopy.length; j++) {
          newComparisons.push([minIndex, j])
          if (arrCopy[j] < arrCopy[minIndex]) {
            minIndex = j
          }
        }
        if (minIndex !== i) {
          const temp = arrCopy[i]
          arrCopy[i] = arrCopy[minIndex]
          arrCopy[minIndex] = temp
          newSteps.push([...arrCopy])
        }
      }
    }

    setSteps(newSteps)
    setComparisons(newComparisons)
  }, [array, algorithm, sorting])

  // Handle sorting animation
  useEffect(() => {
    if (!sorting) return

    if (currentStep >= steps.length - 1) {
      setSorting(false)
      setCompleted(true)
      return
    }

    const comparisonIndex = Math.min(currentStep, comparisons.length - 1)
    setCurrentComparison(comparisons[comparisonIndex])

    timeoutRef.current = setTimeout(
      () => {
        setCurrentStep((prev) => prev + 1)
      },
      1000 - speed * 9,
    )

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [sorting, currentStep, steps.length, comparisons, speed])

  // Update array based on current step
  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length) {
      // Only update if the array is actually different
      if (JSON.stringify(array) !== JSON.stringify(steps[currentStep])) {
        setArray(steps[currentStep])
      }
    }
  }, [currentStep, steps])

  // Start sorting
  const startSorting = () => {
    if (completed) {
      resetArray()
      setTimeout(() => {
        setSorting(true)
      }, 100)
    } else {
      setSorting(true)
    }
  }

  // Pause sorting
  const pauseSorting = () => {
    setSorting(false)
  }

  // Reset array
  const resetArray = () => {
    setSorting(false)
    setCompleted(false)
    setCurrentStep(0)
    setCurrentComparison(null)
  }

  // Step forward
  const stepForward = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      const comparisonIndex = Math.min(currentStep + 1, comparisons.length - 1)
      setCurrentComparison(comparisons[comparisonIndex])
    }
  }

  // Step backward
  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      const comparisonIndex = Math.max(currentStep - 1, 0)
      setCurrentComparison(comparisons[comparisonIndex])
    }
  }

  // Skip to end
  const skipToEnd = () => {
    setCurrentStep(steps.length - 1)
    setCompleted(true)
    setSorting(false)
  }

  // Get bar color
  const getBarColor = (index: number) => {
    if (completed) return "bg-green-500"
    if (currentComparison && (index === currentComparison[0] || index === currentComparison[1])) {
      return "bg-yellow-500"
    }
    return "bg-primary"
  }

  // Get algorithm name
  const getAlgorithmName = () => {
    switch (algorithm) {
      case "bubble":
        return "Bubble Sort"
      case "insertion":
        return "Insertion Sort"
      case "selection":
        return "Selection Sort"
      case "quick":
        return "Quick Sort"
      default:
        return "Bubble Sort"
    }
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl font-bold">{getAlgorithmName()}</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSorting(false)
                setAlgorithm("bubble")
                generateArray()
              }}
              className={algorithm === "bubble" ? "bg-primary/10" : ""}
            >
              Bubble
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSorting(false)
                setAlgorithm("insertion")
                generateArray()
              }}
              className={algorithm === "insertion" ? "bg-primary/10" : ""}
            >
              Insertion
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSorting(false)
                setAlgorithm("selection")
                generateArray()
              }}
              className={algorithm === "selection" ? "bg-primary/10" : ""}
            >
              Selection
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm">Speed:</span>
          <Slider
            value={[speed]}
            min={1}
            max={100}
            step={1}
            onValueChange={(value) => setSpeed(value[0])}
            className="w-full max-w-xs"
          />
        </div>
      </div>

      <div className="flex h-64 items-end justify-center gap-2 rounded-md bg-muted/50 p-4">
        <AnimatePresence>
          {array.map((value, index) => (
            <motion.div
              key={index}
              className={`${getBarColor(index)} rounded-t-md w-12 flex items-end justify-center`}
              style={{ height: `${value * 2}px` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="mb-1 text-xs font-medium text-white">{value}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={resetArray}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={stepBackward} disabled={currentStep === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {sorting ? (
            <Button onClick={pauseSorting}>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </Button>
          ) : (
            <Button onClick={startSorting}>
              <Play className="mr-2 h-4 w-4" /> {completed ? "Restart" : "Start"}
            </Button>
          )}
          <Button variant="outline" size="icon" onClick={stepForward} disabled={currentStep >= steps.length - 1}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={skipToEnd} disabled={completed}>
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={generateArray}>
            New Array
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <div className="rounded-md bg-muted p-4">
          <h4 className="mb-2 font-medium">Algorithm Details:</h4>
          <p className="text-sm text-muted-foreground">
            {algorithm === "bubble" && (
              <>
                <strong>Bubble Sort</strong> works by repeatedly stepping through the list, comparing adjacent elements
                and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps
                are needed.
                <br />
                <br />
                <strong>Time Complexity:</strong> O(n²) in worst and average cases
              </>
            )}
            {algorithm === "insertion" && (
              <>
                <strong>Insertion Sort</strong> builds the final sorted array one item at a time. It iterates through an
                input array and removes one element per iteration, finds the location where that element belongs, and
                then inserts it there.
                <br />
                <br />
                <strong>Time Complexity:</strong> O(n²) in worst and average cases, O(n) in best case
              </>
            )}
            {algorithm === "selection" && (
              <>
                <strong>Selection Sort</strong> divides the input list into two parts: a sorted sublist of items built
                up from left to right and a sublist of the remaining unsorted items. It repeatedly selects the smallest
                element from the unsorted sublist and moves it to the end of the sorted sublist.
                <br />
                <br />
                <strong>Time Complexity:</strong> O(n²) in all cases
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
