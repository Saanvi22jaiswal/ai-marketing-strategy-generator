"use client"

import { AlertTriangle } from "lucide-react"

interface StrategicWarningsProps {
  warnings: string[]
}

export function StrategicWarnings({ warnings }: StrategicWarningsProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        Strategic Trade-Off Advisor
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Warnings and advice about what to avoid
      </p>

      <ul className="space-y-3">
        {warnings.map((warning, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-3"
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <span className="text-sm text-muted-foreground">{warning}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
