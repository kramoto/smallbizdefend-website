import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, Shield } from "lucide-react"
import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function WorkshopPage() {
  const workshopTopics = [
    "Understanding Common Cyber Threats",
    "Essential Password Security Practices",
    "Securing Your Devices",
    "Safe Internet & Email Habits",
    "The Basics of Data Backup & Recovery",
    "Recognizing Red Flags & Reporting Incidents",
    "Creating a Simple Security Action Plan",
  ]

  const workshopBenefits = [
    "Increased confidence in your ability to protect your business",
    "Significantly reduce your risk of falling victim to common cyber-attacks",
    "Actionable steps you can implement the same day",
    "Peace of mind, knowing you're taking proactive measures",
    "Protect your finances, customer data, and business reputation",
  ]

  const workshopIncludes = [
    "90-Minute Pre-recorded Video Workshop",
    "Downloadable Presentation Slides",
    "Actionable Cybersecurity Checklist for Small Businesses",
    "Curated List of Free & Low-Cost Security Tools & Resources",
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader
        title="Stop Worrying About Cyber Threats. Start Protecting Your Business."
        description="Our 'Securing Your Small Business: First Steps to Digital Safety' workshop will empower you with the knowledge and strategies you need."
      />

      <div className="max-w-4xl mx-auto mt-12">
        <div className="md:flex gap-8 items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Workshop Preview"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Are You Making These Common Cybersecurity Mistakes?</h2>
            <p className="mb-4">
              Many small businesses unknowingly leave themselves vulnerable. Perhaps you think you're too small to be a
              target, or that cybersecurity is too complex or expensive to tackle.
            </p>
            <p className="mb-4">
              Cybercriminals actively target small businesses, perceiving them as softer targets. The consequences can
              be devastating: financial losses, reputational damage, and operational disruptions.
            </p>
            <p>
              This workshop is your first, most crucial step to moving from uncertainty and fear to clarity and control.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Your Clear Path to Small Business Cybersecurity: What You Will Learn
          </h2>
          <p className="mb-6">
            This isn't a dry, technical lecture. Our workshop is an engaging, on-demand session that you can take at
            your own pace. It's specifically designed for non-tech small business owners and their key team members.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {workshopTopics.map((topic, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>

          <p className="italic">
            Our unique selling proposition is simple: we provide practical, jargon-free, and actionable cybersecurity
            education tailored specifically for the busy, non-technical small business owner.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Go From Confused to Confident About Your Business Security</h2>
        <p className="mb-6">
          Imagine feeling a sense of control over your digital environment. This workshop is designed to deliver exactly
          that. By investing just 90 minutes, you will:
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {workshopBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <Shield className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">What's Included in Your Workshop Package</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {workshopIncludes.map((item, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{item}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Secure Your Spot: An Investment in Your Business's Future</CardTitle>
            <CardDescription>Protecting your business doesn't have to be complicated or expensive</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">Special introductory price</p>
              <div className="text-4xl font-bold">$47</div>
              <div className="flex items-center justify-center mt-2">
                <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">90-minute workshop, lifetime access</span>
              </div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg">
              <p className="text-sm text-center">
                <strong>Actionable Insights Guarantee:</strong> If you complete the workshop and don't walk away with at
                least three actionable steps you can implement immediately to improve your business's security, we'll
                refund your $47. No questions asked.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button size="lg" className="w-full md:w-auto">
              Enroll Now & Secure Your Business
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
