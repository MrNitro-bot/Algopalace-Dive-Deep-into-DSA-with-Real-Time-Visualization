import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AlgorithmVisualizer } from "@/components/algorithm-visualizer"
import { Toaster } from "@/components/ui/toast"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Visualize Algorithms in Action</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              See how algorithms work step-by-step with our interactive visualizations
            </p>
          </div>

          <div className="mx-auto max-w-5xl mt-12">
            <AlgorithmVisualizer />
          </div>
        </section>
      </main>
      <Toaster />
    </div>
  )
}
