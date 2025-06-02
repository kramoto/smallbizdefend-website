import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your Trusted Cybersecurity Partner
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Making top-tier cybersecurity accessible to every small business.
            </p>
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            We translate complex security concepts into simple, actionable steps that protect your business without
            breaking your budget or overwhelming your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/workshop">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
