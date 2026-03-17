"use client"

import { MapPin, ArrowRight, CheckCircle } from "lucide-react"

interface FrictionMapCardProps {
  frictionPoints: {
    stage: string
    friction: string
    solution: string
  }[]
}

export function FrictionMapCard({ frictionPoints }: FrictionMapCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <MapPin className="h-5 w-5 text-accent" />
        Customer Friction Map
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Stages in the customer journey where hesitation may occur
      </p>

      <div className="space-y-3">
        {frictionPoints.map((point, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-3 rounded-lg border border-border bg-secondary/50 p-4 md:flex-row md:items-center"
          >
            {/* Stage */}
            <div className="shrink-0 md:w-32">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                {point.stage}
              </span>
            </div>

            {/* Friction */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Friction:</span> {point.friction}
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden h-4 w-4 shrink-0 text-accent md:block" />

            {/* Solution */}
            <div className="flex items-start gap-2 rounded-lg bg-accent/5 p-2 md:w-64">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-xs text-muted-foreground">{point.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
