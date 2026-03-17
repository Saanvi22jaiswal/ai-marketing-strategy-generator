"use client"

import { User, Heart, AlertCircle, ShoppingCart } from "lucide-react"
import { type CustomerPersona } from "@/lib/types"

interface CustomerPersonaCardProps {
  persona: CustomerPersona
}

export function CustomerPersonaCard({ persona }: CustomerPersonaCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
        <User className="h-5 w-5 text-accent" />
        Customer Persona
      </h3>
      
      {/* Persona Header */}
      <div className="mb-4 flex items-center gap-4 rounded-lg border border-border bg-secondary/50 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <User className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{persona.name}</h4>
          <p className="text-sm text-muted-foreground">{persona.ageGroup} | {persona.profession}</p>
        </div>
      </div>

      {/* Lifestyle */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">{persona.lifestyle}</p>
      </div>

      {/* Motivations */}
      <div className="mb-4">
        <h5 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
          <Heart className="h-4 w-4 text-accent" />
          Motivations
        </h5>
        <ul className="space-y-1">
          {persona.motivations.map((motivation, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {motivation}
            </li>
          ))}
        </ul>
      </div>

      {/* Pain Points */}
      <div className="mb-4">
        <h5 className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
          <AlertCircle className="h-4 w-4 text-destructive" />
          Pain Points
        </h5>
        <ul className="space-y-1">
          {persona.painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-destructive" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Buying Behavior */}
      <div className="rounded-lg bg-secondary/50 p-3">
        <h5 className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
          <ShoppingCart className="h-4 w-4 text-accent" />
          Buying Behavior
        </h5>
        <p className="text-sm text-muted-foreground">{persona.buyingBehavior}</p>
      </div>
    </div>
  )
}
