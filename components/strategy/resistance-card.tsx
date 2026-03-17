"use client"

import { ShieldAlert, ArrowRight, CheckCircle } from "lucide-react"
import { type CustomerResistance } from "@/lib/types"

interface ResistanceCardProps {
  resistances: CustomerResistance[]
}

export function ResistanceCard({ resistances }: ResistanceCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <ShieldAlert className="h-5 w-5 text-accent" />
        Customer Resistance Predictor
      </h3>

      <div className="space-y-4">
        {resistances.map((resistance, index) => (
          <div 
            key={index} 
            className="rounded-lg border border-border bg-secondary/50 p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-xs font-medium text-destructive">
                {index + 1}
              </span>
              <h4 className="font-medium text-foreground">{resistance.barrier}</h4>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-accent/5 p-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <span className="text-xs font-medium text-accent">Solution</span>
                <p className="text-sm text-muted-foreground">{resistance.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
