import { z } from "zod"

export const productInputSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  productDescription: z.string().min(10, "Please provide at least 10 characters"),
  productCategory: z.string().min(1, "Please select a category"),
  priceRange: z.string().min(1, "Please select a price range"),
  problemSolved: z.string().min(10, "Please describe the problem in at least 10 characters"),
  targetAudienceGuess: z.string().nullable()
})

export type ProductInput = z.infer<typeof productInputSchema>

export interface MarketSegment {
  name: string
  demographics: string
  size: string
  potential: string
}

export interface CustomerPersona {
  name: string
  ageGroup: string
  profession: string
  lifestyle: string
  motivations: string[]
  painPoints: string[]
  buyingBehavior: string
}

export interface LaunchStrategy {
  type: string
  description: string
  messaging: string
  initialCampaign: string
}

export interface MarketingChannel {
  name: string
  fit: string
  budget: string
  reasoning: string
}

export interface LifecycleStage {
  stage: string
  objective: string
  channels: string[]
  campaignStyle: string
}

export interface CustomerResistance {
  barrier: string
  solution: string
}

export interface BudgetAllocation {
  category: string
  percentage: number
  actions: string[]
}

export interface MarketingStrategy {
  productAnalysis: {
    marketSegments: MarketSegment[]
    nicheOpportunities: string[]
    valuePropositions: string[]
    demandAssumptions: string[]
    positioningSuggestions: string[]
  }
  targetAudience: {
    primary: string
    secondary: string
    nicheOpportunity: string
    reasoning: string
  }
  customerPersona: CustomerPersona
  customerResistance: CustomerResistance[]
  launchStrategy: LaunchStrategy
  marketingChannels: MarketingChannel[]
  budgetAllocation: BudgetAllocation[]
  lifecycleStrategy: LifecycleStage[]
  strategicWarnings: string[]
  marketTruth: {
    score: number
    analysis: string
    recommendation: string
  }
  alternativeStrategies: {
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
  customerFrictionPoints: {
    stage: string
    friction: string
    solution: string
  }[]
  attentionStrategy: string[]
}

export const productCategories = [
  "Consumer Electronics",
  "Fashion & Apparel",
  "Food & Beverage",
  "Health & Wellness",
  "Beauty & Skincare",
  "Home & Garden",
  "Sports & Fitness",
  "Toys & Games",
  "Automotive",
  "Pet Products",
  "Software & Apps",
  "Digital Services",
  "Education & Learning",
  "Financial Services",
  "Travel & Hospitality",
  "Other"
]

export const priceRanges = [
  "Under $10",
  "$10 - $50",
  "$50 - $100",
  "$100 - $500",
  "$500 - $1,000",
  "$1,000 - $5,000",
  "Over $5,000"
]
