"use client"

import Link from "next/link"
import { ArrowRight, Target, Users, TrendingUp, BarChart3, Sparkles, Zap, Shield, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Target,
    title: "Market Segmentation",
    description: "Automatically identify customer segments based on demographics, lifestyle, and behavior patterns."
  },
  {
    icon: Users,
    title: "Customer Personas",
    description: "Generate detailed buyer personas with motivations, pain points, and purchasing behavior."
  },
  {
    icon: TrendingUp,
    title: "Launch Strategy",
    description: "Get tailored go-to-market strategies including soft launch, influencer-led, and beta testing approaches."
  },
  {
    icon: BarChart3,
    title: "Channel Recommendations",
    description: "Discover the best marketing channels for your product with data-driven insights."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description: "Advanced AI analyzes your product to deliver actionable marketing strategies."
  },
  {
    icon: LineChart,
    title: "Lifecycle Strategy",
    description: "Complete marketing plans across launch, growth, and maturity stages."
  }
]

const stats = [
  { value: "10x", label: "faster strategy creation" },
  { value: "85%", label: "accuracy in targeting" },
  { value: "3hr", label: "average time saved" },
  { value: "500+", label: "product categories" }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Product-to-Market AI</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              How it Works
            </Link>
            <Link href="/analyze" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
          </div>
          <Link href="/analyze">
            <Button size="sm">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              AI-Powered Marketing Strategy
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Transform any product into a{" "}
              <span className="text-accent">market success</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Your virtual AI marketing consultant. Generate complete go-to-market strategies 
              for any product in minutes, not months.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/analyze">
                <Button size="lg" className="h-12 px-8 text-base">
                  Start Building Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Everything you need to launch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive marketing strategy generation powered by advanced AI
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-secondary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-y border-border bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              From product idea to market strategy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to your professional marketing blueprint
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Describe Your Product",
                description: "Enter your product details, target market guess, and the problem it solves."
              },
              {
                step: "02",
                title: "AI Analyzes & Generates",
                description: "Our AI engine analyzes your input and generates a comprehensive marketing strategy."
              },
              {
                step: "03",
                title: "Review & Download",
                description: "Review your strategy dashboard and download your complete marketing blueprint."
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-accent/20">{item.step}</div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Innovative features that set us apart
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Beyond basic strategy generation, our platform offers unique insights
              </p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Market Truth Analyzer",
                    description: "Validates whether your product solves a meaningful customer problem"
                  },
                  {
                    icon: TrendingUp,
                    title: "Marketing Path Simulator",
                    description: "Compare alternative strategies and understand their risks and rewards"
                  },
                  {
                    icon: Users,
                    title: "Customer Friction Map",
                    description: "Identifies hesitation points in your customer journey"
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="space-y-4">
                <div className="h-4 w-3/4 rounded bg-secondary" />
                <div className="h-4 w-1/2 rounded bg-secondary" />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-secondary p-4">
                    <div className="h-3 w-1/2 rounded bg-accent/30" />
                    <div className="mt-2 h-8 w-full rounded bg-accent/20" />
                  </div>
                  <div className="rounded-lg bg-secondary p-4">
                    <div className="h-3 w-1/2 rounded bg-accent/30" />
                    <div className="mt-2 h-8 w-full rounded bg-accent/20" />
                  </div>
                </div>
                <div className="mt-4 h-32 rounded-lg bg-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Ready to launch your product?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start generating your go-to-market strategy today. No credit card required.
            </p>
            <Link href="/analyze">
              <Button size="lg" className="mt-8 h-12 px-8 text-base">
                Create Your Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Zap className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="font-semibold text-foreground">Product-to-Market AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with AI to help entrepreneurs succeed
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
