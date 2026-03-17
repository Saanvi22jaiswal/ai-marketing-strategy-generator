"use client"

import { Rocket, MessageSquare, Megaphone } from "lucide-react"
import { type LaunchStrategy } from "@/lib/types"

interface LaunchStrategyCardProps {
  strategy: LaunchStrategy
}

export function LaunchStrategyCard({ strategy }: LaunchStrategyCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <Rocket className="h-5 w-5 text-accent" />
        Launch Strategy
      </h3>

      {/* Strategy Type */}
      <div className="mb-4 rounded-lg border border-accent/50 bg-accent/5 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            {strategy.type}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{strategy.description}</p>
      </div>

      {/* Messaging */}
      <div className="mb-4">
        <h5 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
          <MessageSquare className="h-4 w-4 text-accent" />
          Key Messaging
        </h5>
        <p className="rounded-lg bg-secondary/50 p-3 text-sm italic text-muted-foreground">
          "{strategy.messaging}"
        </p>
      </div>

      {/* Initial Campaign */}
      <div>
        <h5 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
          <Megaphone className="h-4 w-4 text-accent" />
          Initial Campaign Idea
        </h5>
        <p className="text-sm text-muted-foreground">{strategy.initialCampaign}</p>
      </div>
    </div>
  )
}
