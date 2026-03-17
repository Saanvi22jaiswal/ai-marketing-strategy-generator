"use client"

import { PieChart, CheckCircle } from "lucide-react"
import { type BudgetAllocation } from "@/lib/types"

interface BudgetAllocationCardProps {
  allocations: BudgetAllocation[]
}

export function BudgetAllocationCard({ allocations }: BudgetAllocationCardProps) {
  const colors = ["bg-accent", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"]

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <PieChart className="h-5 w-5 text-accent" />
        Budget Allocation
      </h3>

      {/* Visual Bar */}
      <div className="mb-6 flex h-4 overflow-hidden rounded-full">
        {allocations.map((allocation, index) => (
          <div
            key={index}
            className={`${colors[index % colors.length]}`}
            style={{ width: `${allocation.percentage}%` }}
          />
        ))}
      </div>

      {/* Breakdown */}
      <div className="space-y-4">
        {allocations.map((allocation, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${colors[index % colors.length]}`} />
                <span className="font-medium text-foreground">{allocation.category}</span>
              </div>
              <span className="text-sm font-medium text-accent">{allocation.percentage}%</span>
            </div>
            <ul className="ml-5 space-y-1">
              {allocation.actions.map((action, actionIndex) => (
                <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
