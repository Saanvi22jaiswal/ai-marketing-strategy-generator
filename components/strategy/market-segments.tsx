"use client"

import { Users } from "lucide-react"
import { type MarketSegment } from "@/lib/types"

interface MarketSegmentsProps {
  segments: MarketSegment[]
}

export function MarketSegments({ segments }: MarketSegmentsProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <Users className="h-5 w-5 text-accent" />
        Market Segments
      </h3>
      <div className="space-y-4">
        {segments.map((segment, index) => (
          <div 
            key={index} 
            className="rounded-lg border border-border bg-secondary/50 p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium text-foreground">{segment.name}</h4>
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                {segment.size}
              </span>
            </div>
            <p className="mb-2 text-sm text-muted-foreground">{segment.demographics}</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Potential:</span>
              <span className="text-accent">{segment.potential}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
