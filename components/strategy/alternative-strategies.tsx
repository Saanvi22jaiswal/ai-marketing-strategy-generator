"use client"

import { GitBranch, CheckCircle, AlertTriangle } from "lucide-react"

interface AlternativeStrategiesProps {
  strategies: {
    strategyA: {
      name: string
      description: string
      advantages: string[]
      risks: string[]
    }
    strategyB: {
      name: string
      description: string
      advantages: string[]
      risks: string[]
    }
  }
}

export function AlternativeStrategies({ strategies }: AlternativeStrategiesProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <GitBranch className="h-5 w-5 text-accent" />
        Marketing Path Simulator
      </h3>

      <div className="space-y-4">
        {/* Strategy A */}
        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
              Path A
            </span>
            <h4 className="font-medium text-foreground">{strategies.strategyA.name}</h4>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">{strategies.strategyA.description}</p>
          
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <h5 className="mb-1 flex items-center gap-1 text-xs font-medium text-accent">
                <CheckCircle className="h-3 w-3" />
                Advantages
              </h5>
              <ul className="space-y-1">
                {strategies.strategyA.advantages.map((adv, index) => (
                  <li key={index} className="text-xs text-muted-foreground">+ {adv}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-1 flex items-center gap-1 text-xs font-medium text-destructive">
                <AlertTriangle className="h-3 w-3" />
                Risks
              </h5>
              <ul className="space-y-1">
                {strategies.strategyA.risks.map((risk, index) => (
                  <li key={index} className="text-xs text-muted-foreground">- {risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* VS Divider */}
        <div className="flex items-center justify-center">
          <span className="rounded-full bg-border px-3 py-1 text-xs font-medium text-muted-foreground">VS</span>
        </div>

        {/* Strategy B */}
        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-chart-2 px-2 py-0.5 text-xs font-medium text-background">
              Path B
            </span>
            <h4 className="font-medium text-foreground">{strategies.strategyB.name}</h4>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">{strategies.strategyB.description}</p>
          
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <h5 className="mb-1 flex items-center gap-1 text-xs font-medium text-accent">
                <CheckCircle className="h-3 w-3" />
                Advantages
              </h5>
              <ul className="space-y-1">
                {strategies.strategyB.advantages.map((adv, index) => (
                  <li key={index} className="text-xs text-muted-foreground">+ {adv}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-1 flex items-center gap-1 text-xs font-medium text-destructive">
                <AlertTriangle className="h-3 w-3" />
                Risks
              </h5>
              <ul className="space-y-1">
                {strategies.strategyB.risks.map((risk, index) => (
                  <li key={index} className="text-xs text-muted-foreground">- {risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
