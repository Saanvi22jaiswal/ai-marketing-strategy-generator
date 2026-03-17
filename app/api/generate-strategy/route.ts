import { generateText, Output } from "ai"
import { z } from "zod"
import { type MarketingStrategy } from "@/lib/types"

const marketingStrategySchema = z.object({
  productAnalysis: z.object({
    marketSegments: z.array(z.object({
      name: z.string(),
      demographics: z.string(),
      size: z.string(),
      potential: z.string()
    })),
    nicheOpportunities: z.array(z.string()),
    valuePropositions: z.array(z.string()),
    demandAssumptions: z.array(z.string()),
    positioningSuggestions: z.array(z.string())
  }),
  targetAudience: z.object({
    primary: z.string(),
    secondary: z.string(),
    nicheOpportunity: z.string(),
    reasoning: z.string()
  }),
  customerPersona: z.object({
    name: z.string(),
    ageGroup: z.string(),
    profession: z.string(),
    lifestyle: z.string(),
    motivations: z.array(z.string()),
    painPoints: z.array(z.string()),
    buyingBehavior: z.string()
  }),
  customerResistance: z.array(z.object({
    barrier: z.string(),
    solution: z.string()
  })),
  launchStrategy: z.object({
    type: z.string(),
    description: z.string(),
    messaging: z.string(),
    initialCampaign: z.string()
  }),
  marketingChannels: z.array(z.object({
    name: z.string(),
    fit: z.string(),
    budget: z.string(),
    reasoning: z.string()
  })),
  budgetAllocation: z.array(z.object({
    category: z.string(),
    percentage: z.number(),
    actions: z.array(z.string())
  })),
  lifecycleStrategy: z.array(z.object({
    stage: z.string(),
    objective: z.string(),
    channels: z.array(z.string()),
    campaignStyle: z.string()
  })),
  strategicWarnings: z.array(z.string()),
  marketTruth: z.object({
    score: z.number(),
    analysis: z.string(),
    recommendation: z.string()
  }),
  alternativeStrategies: z.object({
    strategyA: z.object({
      name: z.string(),
      description: z.string(),
      advantages: z.array(z.string()),
      risks: z.array(z.string())
    }),
    strategyB: z.object({
      name: z.string(),
      description: z.string(),
      advantages: z.array(z.string()),
      risks: z.array(z.string())
    })
  }),
  customerFrictionPoints: z.array(z.object({
    stage: z.string(),
    friction: z.string(),
    solution: z.string()
  })),
  attentionStrategy: z.array(z.string())
})

function generateFallbackStrategy(productInput: {
  productName: string
  productDescription: string
  productCategory: string
  priceRange: string
  problemSolved: string
  targetAudienceGuess?: string | null
}): MarketingStrategy {
  return {
    productAnalysis: {
      marketSegments: [
        {
          name: "Early Adopters",
          demographics: "Tech-savvy professionals aged 25-40",
          size: "Medium",
          potential: "High growth potential"
        },
        {
          name: "Value Seekers",
          demographics: "Budget-conscious consumers aged 30-50",
          size: "Large",
          potential: "Moderate growth potential"
        },
        {
          name: "Premium Buyers",
          demographics: "High-income individuals aged 35-55",
          size: "Small",
          potential: "High revenue potential"
        }
      ],
      nicheOpportunities: [
        `Specialized ${productInput.productCategory.toLowerCase()} market`,
        "Underserved geographic regions",
        "B2B applications"
      ],
      valuePropositions: [
        productInput.problemSolved,
        "Quality and reliability",
        "Excellent customer support"
      ],
      demandAssumptions: [
        "Growing market interest in this category",
        "Customers willing to pay for quality solutions",
        "Digital channels driving awareness"
      ],
      positioningSuggestions: [
        `Position as the go-to solution for ${productInput.problemSolved.toLowerCase()}`,
        "Emphasize unique features and benefits",
        "Build trust through testimonials and case studies"
      ]
    },
    targetAudience: {
      primary: productInput.targetAudienceGuess || "Professionals seeking efficient solutions",
      secondary: "Small business owners and entrepreneurs",
      nicheOpportunity: "Industry-specific applications",
      reasoning: `Based on the product category (${productInput.productCategory}) and price range (${productInput.priceRange}), the target audience likely values quality and effectiveness.`
    },
    customerPersona: {
      name: "Alex Professional",
      ageGroup: "28-45",
      profession: "Manager or Business Owner",
      lifestyle: "Busy professional seeking efficiency",
      motivations: [
        "Save time and increase productivity",
        "Solve specific pain points",
        "Stay ahead of competition"
      ],
      painPoints: [
        "Current solutions are inadequate",
        "Limited time to research alternatives",
        "Need reliable and proven products"
      ],
      buyingBehavior: "Research-driven, values reviews and recommendations"
    },
    customerResistance: [
      {
        barrier: "Price concerns",
        solution: "Offer flexible payment options and demonstrate ROI"
      },
      {
        barrier: "Trust in new brand",
        solution: "Provide money-back guarantee and showcase testimonials"
      },
      {
        barrier: "Uncertainty about effectiveness",
        solution: "Offer free trials or demos"
      }
    ],
    launchStrategy: {
      type: "Soft Launch with Beta Testing",
      description: "Start with a limited audience to gather feedback and refine the product before full launch",
      messaging: `${productInput.productName}: The solution you've been waiting for`,
      initialCampaign: "Early adopter program with exclusive benefits"
    },
    marketingChannels: [
      {
        name: "Social Media Marketing",
        fit: "High",
        budget: "30%",
        reasoning: "Cost-effective reach to target demographics"
      },
      {
        name: "Content Marketing",
        fit: "High",
        budget: "25%",
        reasoning: "Build authority and organic traffic"
      },
      {
        name: "Email Marketing",
        fit: "Medium",
        budget: "15%",
        reasoning: "Nurture leads and retain customers"
      },
      {
        name: "Paid Advertising",
        fit: "Medium",
        budget: "20%",
        reasoning: "Quick visibility and targeted reach"
      },
      {
        name: "Influencer Partnerships",
        fit: "Medium",
        budget: "10%",
        reasoning: "Leverage trusted voices in the industry"
      }
    ],
    budgetAllocation: [
      {
        category: "Digital Advertising",
        percentage: 35,
        actions: ["Social media ads", "Search engine marketing", "Display advertising"]
      },
      {
        category: "Content Creation",
        percentage: 25,
        actions: ["Blog posts", "Video content", "Infographics"]
      },
      {
        category: "PR & Outreach",
        percentage: 20,
        actions: ["Press releases", "Media outreach", "Industry events"]
      },
      {
        category: "Tools & Analytics",
        percentage: 10,
        actions: ["Marketing automation", "Analytics platforms", "CRM"]
      },
      {
        category: "Contingency",
        percentage: 10,
        actions: ["Unexpected opportunities", "Testing new channels", "Crisis management"]
      }
    ],
    lifecycleStrategy: [
      {
        stage: "Launch",
        objective: "Build awareness and acquire early adopters",
        channels: ["Social Media", "PR", "Content Marketing"],
        campaignStyle: "Buzz-building and exclusivity"
      },
      {
        stage: "Growth",
        objective: "Scale customer acquisition and expand market share",
        channels: ["Paid Advertising", "SEO", "Partnerships"],
        campaignStyle: "Performance-driven with clear CTAs"
      },
      {
        stage: "Maturity",
        objective: "Maximize retention and customer lifetime value",
        channels: ["Email Marketing", "Loyalty Programs", "Referral Marketing"],
        campaignStyle: "Relationship-focused and community building"
      }
    ],
    strategicWarnings: [
      "Monitor competitor responses to your market entry",
      "Be prepared to iterate based on customer feedback",
      "Don't over-extend marketing budget before proving product-market fit",
      "Build systems to handle potential rapid growth"
    ],
    marketTruth: {
      score: 7,
      analysis: `${productInput.productName} addresses a real need in the ${productInput.productCategory} market. The problem it solves (${productInput.problemSolved}) resonates with target customers.`,
      recommendation: "Validate assumptions through customer interviews and small-scale testing before major investment."
    },
    alternativeStrategies: {
      strategyA: {
        name: "Premium Positioning",
        description: "Focus on high-end market segment with premium pricing and exclusive features",
        advantages: ["Higher margins", "Brand prestige", "Quality-focused customers"],
        risks: ["Smaller market", "Higher customer expectations", "Longer sales cycles"]
      },
      strategyB: {
        name: "Mass Market Approach",
        description: "Competitive pricing to capture market share quickly",
        advantages: ["Larger customer base", "Faster growth", "Market dominance potential"],
        risks: ["Lower margins", "Price wars", "Brand perception challenges"]
      }
    },
    customerFrictionPoints: [
      {
        stage: "Awareness",
        friction: "Standing out in a crowded market",
        solution: "Focus on unique value proposition and targeted messaging"
      },
      {
        stage: "Consideration",
        friction: "Comparing with alternatives",
        solution: "Provide clear comparison guides and social proof"
      },
      {
        stage: "Purchase",
        friction: "Checkout complexity or price hesitation",
        solution: "Streamline checkout and offer guarantees"
      },
      {
        stage: "Post-Purchase",
        friction: "Onboarding and adoption",
        solution: "Excellent customer support and educational content"
      }
    ],
    attentionStrategy: [
      "Use pattern interrupts in advertising to capture attention",
      "Create shareable content that encourages organic spread",
      "Leverage storytelling to create emotional connections",
      "Utilize user-generated content for authenticity",
      "Implement retargeting to stay top-of-mind"
    ]
  }
}

export async function POST(req: Request) {
  let productInput: {
    productName: string
    productDescription: string
    productCategory: string
    priceRange: string
    problemSolved: string
    targetAudienceGuess?: string | null
  } | null = null

  try {
    const body = await req.json()
    productInput = body.productInput

    if (!productInput || !productInput.productName) {
      return Response.json({ error: "Invalid product input" }, { status: 400 })
    }

    const systemPrompt = `You are an expert marketing strategist and go-to-market consultant. 
Your task is to analyze a product and generate a comprehensive, actionable marketing strategy.

Guidelines:
- Be specific and practical in your recommendations
- Consider the product category, price point, and target market
- Provide data-driven insights based on marketing best practices
- Include creative and innovative strategies
- Consider both digital and traditional marketing channels where appropriate
- Be realistic about budget allocation and timeline
- Identify potential risks and provide mitigation strategies

For market segments, provide 3-4 distinct segments.
For marketing channels, recommend 4-6 channels with clear reasoning.
For lifecycle strategy, cover Launch, Growth, and Maturity stages.
For budget allocation, ensure percentages sum to 100.
For market truth score, rate from 1-10 how well the product solves a real problem.`

    const userPrompt = `Generate a complete go-to-market marketing strategy for the following product:

**Product Name:** ${productInput.productName}

**Product Description:** ${productInput.productDescription}

**Category:** ${productInput.productCategory}

**Price Range:** ${productInput.priceRange}

**Problem Solved:** ${productInput.problemSolved}

${productInput.targetAudienceGuess ? `**Target Audience Guess:** ${productInput.targetAudienceGuess}` : ""}

Please provide a comprehensive marketing strategy including market segmentation, customer personas, launch strategy, marketing channels, budget allocation, lifecycle strategy, and strategic recommendations.`

    const result = await generateText({
      model: "anthropic/claude-sonnet-4",
      system: systemPrompt,
      prompt: userPrompt,
      experimental_output: Output.object({
        schema: marketingStrategySchema
      })
    })

    if (result.experimental_output) {
      return Response.json({ strategy: result.experimental_output })
    } else {
      const fallbackStrategy = generateFallbackStrategy(productInput)
      return Response.json({ strategy: fallbackStrategy })
    }
  } catch {
    // AI failed - use fallback strategy generation
    if (productInput) {
      const fallbackStrategy = generateFallbackStrategy(productInput)
      return Response.json({ strategy: fallbackStrategy })
    }
    
    return Response.json(
      { error: "Failed to generate strategy. Please try again." },
      { status: 500 }
    )
  }
}
