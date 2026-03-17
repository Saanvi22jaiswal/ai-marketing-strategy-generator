"use client"

import { Search, CheckCircle, AlertCircle } from "lucide-react"

interface MarketTruthCardProps {
  marketTruth: {
    score: number
    analysis: string
    recommendation: string
  }
}

export function MarketTruthCard({ marketTruth }: MarketTruthCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-accent"
    if (score >= 5) return "text-chart-4"
    return "text-destructive"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 8) return "Strong Market Fit"
    if (score >= 5) return "Moderate Market Fit"
    return "Weak Market Fit"
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <Search className="h-5 w-5 text-accent" />
        Market Truth Analyzer
      </h3>

      {/* Score Display */}
      <div className="mb-4 flex items-center justify-center rounded-lg border border-border bg-secondary/50 p-6">
        <div className="text-center">
          <div className={`text-5xl font-bold ${getScoreColor(marketTruth.score)}`}>
            {marketTruth.score}
            <span className="text-2xl text-muted-foreground">/10</span>
          </div>
          <p className={`mt-1 text-sm font-medium ${getScoreColor(marketTruth.score)}`}>
            {getScoreLabel(marketTruth.score)}
          </p>
        </div>
      </div>

      {/* Analysis */}
      <div className="mb-4">
        <h5 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
          <Search className="h-4 w-4 text-accent" />
          Analysis
        </h5>
        <p className="text-sm text-muted-foreground">{marketTruth.analysis}</p>
      </div>

      {/* Recommendation */}
      <div className="rounded-lg border border-accent/50 bg-accent/5 p-4">
        <h5 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
          <CheckCircle className="h-4 w-4 text-accent" />
          Recommendation
        </h5>
        <p className="text-sm text-muted-foreground">{marketTruth.recommendation}</p>
      </div>
    </div>
  )
}
