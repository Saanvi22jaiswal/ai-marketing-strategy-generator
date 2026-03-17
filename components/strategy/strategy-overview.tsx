"use client"

import { Target, Users, TrendingUp, Lightbulb } from "lucide-react"
import { type ProductInput, type MarketingStrategy } from "@/lib/types"

interface StrategyOverviewProps {
  productInput: ProductInput
  strategy: MarketingStrategy
}

export function StrategyOverview({ productInput, strategy }: StrategyOverviewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Target Audience */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Target className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Primary Audience</p>
            <p className="font-semibold text-foreground">{strategy.targetAudience.primary}</p>
          </div>
        </div>
      </div>

      {/* Launch Strategy */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <TrendingUp className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Launch Strategy</p>
            <p className="font-semibold text-foreground">{strategy.launchStrategy.type}</p>
          </div>
        </div>
      </div>

      {/* Market Segments */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Market Segments</p>
            <p className="font-semibold text-foreground">{strategy.productAnalysis.marketSegments.length} Identified</p>
          </div>
        </div>
      </div>

      {/* Market Truth Score */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Lightbulb className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Market Truth Score</p>
            <p className="font-semibold text-foreground">{strategy.marketTruth.score}/10</p>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="rounded-xl border border-border bg-card p-5 md:col-span-2">
        <h3 className="mb-3 font-semibold text-foreground">Value Propositions</h3>
        <ul className="space-y-2">
          {strategy.productAnalysis.valuePropositions.slice(0, 3).map((prop, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {prop}
            </li>
          ))}
        </ul>
      </div>

      {/* Target Audience Details */}
      <div className="rounded-xl border border-border bg-card p-5 md:col-span-2">
        <h3 className="mb-3 font-semibold text-foreground">Target Audience Analysis</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Secondary</span>
            <span className="text-foreground">{strategy.targetAudience.secondary}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Niche Opportunity</span>
            <span className="text-foreground">{strategy.targetAudience.nicheOpportunity}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
