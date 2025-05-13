import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
  const features = [
    "Five Expert-Written Blog Posts/Articles",
    "Ten Engaging Social Media Snippets",
    "One Customizable Internal Email Template",
    "Saves You Valuable Time and Effort",
    "Expertly Crafted Content",
    "Easy to Implement",
    "Actionable and Practical Advice",
    "Covers Essential Cybersecurity Topics",
    "Builds a Stronger Security Culture",
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader
        title="Empower Your Team: The Essential Cybersecurity Awareness Starter Kit"
        description="Transform your team from a potential risk into a proactive line of defense with our comprehensive, done-for-you content package."
      />

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Is Your Team Your Biggest Security Risk? We Can Help You Change That.
        </h2>
        <p className="mb-6">
          Many small businesses operate under the constant, nagging worry of cyber threats. Phishing emails, ransomware
          attacks, and data breaches are not just problems for large corporations; they are increasingly targeting
          businesses like yours.
        </p>
        <p className="mb-6">
          Often, these breaches occur not because of sophisticated technological failures, but due to simple human error
          – a clicked malicious link, a weak password, or an unheeded security warning. The cost of such an incident can
          be devastating, leading to financial loss, reputational damage, and operational chaos.
        </p>
        <p className="mb-12">
          Our Starter Kit directly addresses this critical vulnerability by equipping your employees with the awareness
          and understanding they need to recognize and respond to threats effectively.
        </p>

        <div className="bg-slate-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            What You Get in the Small Business Cybersecurity Awareness Starter Kit
          </h2>
          <p className="mb-6">
            We've taken the complexity out of cybersecurity awareness training. This kit is packed with high-quality,
            engaging content, ready for you to implement immediately. You receive:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Who Is This Starter Kit For?</h2>
        <p className="mb-12">
          This kit is ideal for small business owners, managers, and HR professionals who understand the importance of
          cybersecurity but may lack the dedicated resources or in-house expertise to develop comprehensive awareness
          materials. It's particularly beneficial for businesses in professional services (like legal, accounting, or
          consulting firms), small online retailers, and any organization looking for an affordable and effective way to
          significantly boost their team's cybersecurity knowledge and vigilance.
        </p>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Your Investment in a More Secure Business</CardTitle>
            <CardDescription>The "Done-For-You Foundation" Offer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">For a limited time, get the complete kit for just</p>
              <div className="text-4xl font-bold">$147</div>
              <p className="text-sm text-muted-foreground mt-2">One-time payment, lifetime access</p>
            </div>
            <p className="text-center mb-4">
              This is a small investment when you consider the potential cost of a single security breach. You're not
              just buying content; you're investing in your team's knowledge, your business's resilience, and your peace
              of mind.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button size="lg" className="w-full md:w-auto">
              Get Your Starter Kit Now
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center">
          <p className="mb-4">Have questions about the Starter Kit?</p>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
