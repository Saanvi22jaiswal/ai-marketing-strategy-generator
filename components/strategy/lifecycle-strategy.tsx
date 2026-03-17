"use client"

import { Clock, Target, Share2, Megaphone } from "lucide-react"
import { type LifecycleStage } from "@/lib/types"

interface LifecycleStrategyCardProps {
  stages: LifecycleStage[]
}

export function LifecycleStrategyCard({ stages }: LifecycleStrategyCardProps) {
  const getStageIcon = (stage: string) => {
    const stageLower = stage.toLowerCase()
    if (stageLower.includes("launch")) return Megaphone
    if (stageLower.includes("growth")) return TrendingUp
    return Clock
  }

  const TrendingUp = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  )

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <Clock className="h-5 w-5 text-accent" />
        Product Lifecycle Strategy
      </h3>

      <div className="relative space-y-4">
        {/* Connecting line */}
        <div className="absolute left-5 top-6 h-[calc(100%-48px)] w-0.5 bg-border" />

        {stages.map((stage, index) => {
          const Icon = getStageIcon(stage.stage)
          return (
            <div key={index} className="relative flex gap-4">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent bg-background">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 rounded-lg border border-border bg-secondary/50 p-4">
                <h4 className="mb-1 font-medium text-foreground">{stage.stage}</h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Objective:</span> {stage.objective}
                </p>
                <div className="mb-2 flex flex-wrap gap-2">
                  {stage.channels.map((channel, channelIndex) => (
                    <span 
                      key={channelIndex} 
                      className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Campaign Style:</span> {stage.campaignStyle}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
