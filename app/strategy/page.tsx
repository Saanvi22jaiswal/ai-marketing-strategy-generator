"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { 
  Zap, ArrowLeft, Download, Target, Users, TrendingUp, 
  AlertTriangle, Lightbulb, BarChart3, Clock, DollarSign,
  CheckCircle, XCircle, ArrowRight, Sparkles, RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type ProductInput, type MarketingStrategy } from "@/lib/types"
import { StrategyOverview } from "@/components/strategy/strategy-overview"
import { MarketSegments } from "@/components/strategy/market-segments"
import { CustomerPersonaCard } from "@/components/strategy/customer-persona"
import { LaunchStrategyCard } from "@/components/strategy/launch-strategy"
import { MarketingChannelsCard } from "@/components/strategy/marketing-channels"
import { BudgetAllocationCard } from "@/components/strategy/budget-allocation"
import { LifecycleStrategyCard } from "@/components/strategy/lifecycle-strategy"
import { ResistanceCard } from "@/components/strategy/resistance-card"
import { MarketTruthCard } from "@/components/strategy/market-truth"
import { AlternativeStrategies } from "@/components/strategy/alternative-strategies"
import { FrictionMapCard } from "@/components/strategy/friction-map"
import { StrategicWarnings } from "@/components/strategy/strategic-warnings"
import { generateStrategyReport } from "@/lib/report-generator"

export default function StrategyPage() {
  const router = useRouter()
  const [productInput, setProductInput] = useState<ProductInput | null>(null)
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const generateStrategy = useCallback(async (input: ProductInput) => {
    setIsLoading(true)
    setError(null)
    setProgress(0)

    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + Math.random() * 10, 85))
    }, 600)

    try {
      const response = await fetch("/api/generate-strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productInput: input })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate strategy")
      }

      if (data.strategy) {
        setStrategy(data.strategy)
        setProgress(100)
      } else {
        throw new Error("No strategy data received")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Strategy generation failed. Please try again.")
    } finally {
      clearInterval(progressInterval)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const stored = sessionStorage.getItem("productInput")
    if (!stored) {
      router.push("/analyze")
      return
    }

    const input = JSON.parse(stored) as ProductInput
    setProductInput(input)
    generateStrategy(input)
  }, [router, generateStrategy])

  const handleDownload = () => {
    if (!strategy || !productInput) return
    const report = generateStrategyReport(productInput, strategy)
    const blob = new Blob([report], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${productInput.productName.replace(/\s+/g, "-").toLowerCase()}-marketing-strategy.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleRegenerate = () => {
    if (productInput) {
      generateStrategy(productInput)
    }
  }

  if (!productInput) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Product-to-Market AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/analyze">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                New Analysis
              </Button>
            </Link>
            {strategy && (
              <>
                <Button variant="outline" size="sm" onClick={handleRegenerate} disabled={isLoading}>
                  <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                  Regenerate
                </Button>
                <Button size="sm" onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Product Header */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{productInput.productName}</h1>
              <p className="mt-1 text-muted-foreground">{productInput.productCategory} | {productInput.priceRange}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              AI-Generated Marketing Strategy
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Sparkles className="h-8 w-8 animate-pulse text-accent" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Generating Your Strategy</h2>
            <p className="mb-6 text-muted-foreground">Our AI is analyzing your product and creating a comprehensive marketing plan</p>
            <div className="w-full max-w-md">
              <Progress value={progress} className="h-2" />
              <p className="mt-2 text-center text-sm text-muted-foreground">{Math.round(progress)}% complete</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: Target, label: "Market Analysis" },
                { icon: Users, label: "Audience Targeting" },
                { icon: TrendingUp, label: "Launch Strategy" },
                { icon: BarChart3, label: "Channel Planning" }
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className={`flex items-center gap-2 rounded-lg border border-border p-3 transition-all ${
                    progress > (index + 1) * 20 ? "border-accent bg-accent/5" : ""
                  }`}
                >
                  <item.icon className={`h-4 w-4 ${progress > (index + 1) * 20 ? "text-accent" : "text-muted-foreground"}`} />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
              <XCircle className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Strategy Generation Failed</h2>
            <p className="mb-6 text-muted-foreground">{error}</p>
            <Button onClick={handleRegenerate}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        )}

        {/* Strategy Dashboard */}
        {strategy && !isLoading && (
          <div className="space-y-8">
            {/* Strategy Overview */}
            <StrategyOverview 
              productInput={productInput}
              strategy={strategy}
            />

            {/* Tabs for detailed sections */}
            <Tabs defaultValue="audience" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto lg:grid-cols-5">
                <TabsTrigger value="audience" className="gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Audience</span>
                </TabsTrigger>
                <TabsTrigger value="strategy" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Strategy</span>
                </TabsTrigger>
                <TabsTrigger value="channels" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Channels</span>
                </TabsTrigger>
                <TabsTrigger value="risks" className="gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="hidden sm:inline">Risks</span>
                </TabsTrigger>
                <TabsTrigger value="insights" className="gap-2">
                  <Lightbulb className="h-4 w-4" />
                  <span className="hidden sm:inline">Insights</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="audience" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <MarketSegments segments={strategy.productAnalysis.marketSegments} />
                  <CustomerPersonaCard persona={strategy.customerPersona} />
                </div>
              </TabsContent>

              <TabsContent value="strategy" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <LaunchStrategyCard strategy={strategy.launchStrategy} />
                  <LifecycleStrategyCard stages={strategy.lifecycleStrategy} />
                </div>
              </TabsContent>

              <TabsContent value="channels" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <MarketingChannelsCard channels={strategy.marketingChannels} />
                  <BudgetAllocationCard allocations={strategy.budgetAllocation} />
                </div>
              </TabsContent>

              <TabsContent value="risks" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <ResistanceCard resistances={strategy.customerResistance} />
                  <StrategicWarnings warnings={strategy.strategicWarnings} />
                </div>
                <FrictionMapCard frictionPoints={strategy.customerFrictionPoints} />
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <MarketTruthCard marketTruth={strategy.marketTruth} />
                  <AlternativeStrategies strategies={strategy.alternativeStrategies} />
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Sparkles className="h-5 w-5 text-accent" />
                    Attention Economy Strategies
                  </h3>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {strategy.attentionStrategy.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            {/* Download CTA */}
            <div className="rounded-xl border border-accent/50 bg-accent/5 p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground">Ready to Execute?</h3>
              <p className="mt-2 text-muted-foreground">
                Download your complete marketing strategy as a detailed report
              </p>
              <Button className="mt-4" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download Full Report
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
