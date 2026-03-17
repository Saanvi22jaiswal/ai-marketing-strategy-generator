"use client"

import { Share2, DollarSign, TrendingUp } from "lucide-react"
import { type MarketingChannel } from "@/lib/types"

interface MarketingChannelsCardProps {
  channels: MarketingChannel[]
}

export function MarketingChannelsCard({ channels }: MarketingChannelsCardProps) {
  const getFitColor = (fit: string) => {
    const fitLower = fit.toLowerCase()
    if (fitLower.includes("high") || fitLower.includes("excellent")) return "text-accent"
    if (fitLower.includes("medium") || fitLower.includes("good")) return "text-chart-4"
    return "text-muted-foreground"
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <Share2 className="h-5 w-5 text-accent" />
        Marketing Channels
      </h3>

      <div className="space-y-3">
        {channels.map((channel, index) => (
          <div 
            key={index} 
            className="rounded-lg border border-border bg-secondary/50 p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium text-foreground">{channel.name}</h4>
              <span className={`text-sm font-medium ${getFitColor(channel.fit)}`}>
                {channel.fit}
              </span>
            </div>
            <p className="mb-2 text-sm text-muted-foreground">{channel.reasoning}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <DollarSign className="h-3 w-3" />
              Budget: {channel.budget}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
