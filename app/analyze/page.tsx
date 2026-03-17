"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Zap, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { productCategories, priceRanges, type ProductInput } from "@/lib/types"

export default function AnalyzePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<ProductInput>({
    productName: "",
    productDescription: "",
    productCategory: "",
    priceRange: "",
    problemSolved: "",
    targetAudienceGuess: null
  })

  const handleInputChange = (field: keyof ProductInput, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required"
    }
    if (formData.productDescription.length < 10) {
      newErrors.productDescription = "Please provide at least 10 characters"
    }
    if (!formData.productCategory) {
      newErrors.productCategory = "Please select a category"
    }
    if (!formData.priceRange) {
      newErrors.priceRange = "Please select a price range"
    }
    if (formData.problemSolved.length < 10) {
      newErrors.problemSolved = "Please describe the problem in at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    // Store form data in session storage for the strategy page
    sessionStorage.setItem("productInput", JSON.stringify(formData))
    
    // Navigate to strategy page
    router.push("/strategy")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Product-to-Market AI</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
            <Zap className="h-6 w-6 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Describe Your Product</h1>
          <p className="mt-2 text-muted-foreground">
            Tell us about your product and we will generate a complete marketing strategy
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Name */}
          <div className="space-y-2">
            <label htmlFor="productName" className="text-sm font-medium text-foreground">
              Product Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="productName"
              placeholder="e.g., EcoBottle Pro"
              value={formData.productName}
              onChange={(e) => handleInputChange("productName", e.target.value)}
              className={errors.productName ? "border-destructive" : ""}
            />
            {errors.productName && (
              <p className="text-sm text-destructive">{errors.productName}</p>
            )}
          </div>

          {/* Product Description */}
          <div className="space-y-2">
            <label htmlFor="productDescription" className="text-sm font-medium text-foreground">
              Product Description <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="productDescription"
              placeholder="Describe your product in detail. What is it? What makes it unique?"
              rows={4}
              value={formData.productDescription}
              onChange={(e) => handleInputChange("productDescription", e.target.value)}
              className={errors.productDescription ? "border-destructive" : ""}
            />
            {errors.productDescription && (
              <p className="text-sm text-destructive">{errors.productDescription}</p>
            )}
          </div>

          {/* Category and Price Range */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Product Category <span className="text-destructive">*</span>
              </label>
              <Select
                value={formData.productCategory}
                onValueChange={(value) => handleInputChange("productCategory", value)}
              >
                <SelectTrigger className={errors.productCategory ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {productCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.productCategory && (
                <p className="text-sm text-destructive">{errors.productCategory}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Price Range <span className="text-destructive">*</span>
              </label>
              <Select
                value={formData.priceRange}
                onValueChange={(value) => handleInputChange("priceRange", value)}
              >
                <SelectTrigger className={errors.priceRange ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.priceRange && (
                <p className="text-sm text-destructive">{errors.priceRange}</p>
              )}
            </div>
          </div>

          {/* Problem Solved */}
          <div className="space-y-2">
            <label htmlFor="problemSolved" className="text-sm font-medium text-foreground">
              Problem Your Product Solves <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="problemSolved"
              placeholder="What specific problem does your product solve for customers?"
              rows={3}
              value={formData.problemSolved}
              onChange={(e) => handleInputChange("problemSolved", e.target.value)}
              className={errors.problemSolved ? "border-destructive" : ""}
            />
            {errors.problemSolved && (
              <p className="text-sm text-destructive">{errors.problemSolved}</p>
            )}
          </div>

          {/* Target Audience Guess */}
          <div className="space-y-2">
            <label htmlFor="targetAudienceGuess" className="text-sm font-medium text-foreground">
              Target Audience Guess <span className="text-muted-foreground">(Optional)</span>
            </label>
            <Textarea
              id="targetAudienceGuess"
              placeholder="Who do you think your ideal customers are? (e.g., young professionals, parents, fitness enthusiasts)"
              rows={2}
              value={formData.targetAudienceGuess || ""}
              onChange={(e) => handleInputChange("targetAudienceGuess", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              If you have an idea of who might buy your product, share it here. Our AI will validate and refine this.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg" disabled={isLoading} className="h-12 px-8">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Generate Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Info Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { title: "AI-Powered", description: "Advanced analysis engine" },
            { title: "Comprehensive", description: "Full go-to-market plan" },
            { title: "Instant Results", description: "Strategy in minutes" }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-4 text-center">
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
