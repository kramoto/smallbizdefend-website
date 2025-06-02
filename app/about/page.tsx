import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, BookOpen } from 'lucide-react'
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Problem Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
            Overwhelmed by Cyber Threats? You're Not Alone.
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              Many small business owners feel the pressure. You might be worried about phishing scams that look
              increasingly convincing, the nightmare of a ransomware attack locking up your critical files, or simply
              the nagging feeling that your customer data isn't as secure as it should be.
            </p>
            <p className="text-muted-foreground mb-6">
              Perhaps you lack a dedicated IT team, or the technical jargon feels like another language. These are
              common concerns, and they are valid. The reality is, small businesses are increasingly targeted, precisely
              because they are often perceived as easier targets.
            </p>
            <p className="text-muted-foreground">
              But being a small business doesn't mean you have to be an easy target. We believe that robust
              cybersecurity shouldn't be a luxury reserved for large corporations. We're here to show you how to build a
              strong defense, step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">How We Help You Defend Your Business</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Expert Guides & Tool Reviews"
              description="Knowledge is your first line of defense. Our comprehensive blog is packed with in-depth articles, actionable tips, and unbiased reviews of cybersecurity tools specifically chosen for small businesses."
              ctaText="Read Our Latest Articles"
              ctaLink="/blog"
            />

            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Cybersecurity Awareness Starter Kit"
              description="Your employees can be your strongest security asset, or your weakest link. Our Starter Kit is a done-for-you content package designed to equip your team with essential cybersecurity knowledge."
              ctaText="Discover the Starter Kit"
              ctaLink="/services"
            />

            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Online Workshop: First Steps to Digital Safety"
              description="Join our practical, 90-minute online workshop designed specifically for non-tech owners and their teams. You'll walk away with confidence and an actionable plan."
              ctaText="Learn About the Workshop"
              ctaLink="/workshop"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Your Trusted Cybersecurity Partner</h2>
            <p className="text-muted-foreground mb-8">
              At SmallBizDefend, we're on a mission to make top-tier cybersecurity accessible to every small business.
              Founded by an IT Security Consultant with over 15 years of experience protecting businesses from cyber
              threats, we understand the unique challenges you face.
            </p>
            <p className="text-muted-foreground mb-8">
              We know you don't have time to become a cybersecurity expert – that's our job. Our role is to translate
              complex security concepts into simple, actionable steps that protect your business without breaking your
              budget or overwhelming your team.
            </p>
            <p className="text-muted-foreground mb-8">
              Cybersecurity doesn't have to be complex or costly. Let us help you defend what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/blog">Explore Our Resources</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
