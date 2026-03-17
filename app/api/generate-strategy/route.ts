import { streamText, Output } from "ai"
import { z } from "zod"

export async function POST(req: Request) {
  const { productInput } = await req.json()

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

  const result = streamText({
    model: "anthropic/claude-opus-4",
    system: systemPrompt,
    prompt: userPrompt,
    experimental_output: Output.object({
      schema: marketingStrategySchema
    })
  })

  return result.toUIMessageStreamResponse()
}
