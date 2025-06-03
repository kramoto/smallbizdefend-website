import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Your Trusted Cybersecurity Partner</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-6">
            Enterprise-Level Cybersecurity — Without the Enterprise Price Tag. We help small businesses secure their
            systems with simple, step-by-step protection — no IT team, no jargon, no overwhelm.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">Built for non-tech business owners</span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">Easy to implement — no experience needed</span>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">Proven by 15+ years in real-world security consulting</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/workshop">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
