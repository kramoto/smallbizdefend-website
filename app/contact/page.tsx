import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, Shield } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader
        title="Get in Touch: We're Here to Help Secure Your Small Business"
        description="Have questions about our services or need cybersecurity advice? We'd love to hear from you."
      />

      <div className="max-w-4xl mx-auto mt-12">
        <p className="mb-8">
          At SmallBizDefend.com, we are committed to supporting you on your cybersecurity journey. Whether you have a
          question about our "Small Business Cybersecurity Awareness Starter Kit," need more information on our
          workshop, have a query about our blog content, or simply want to share your feedback, we genuinely want to
          hear from you.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For direct correspondence, you can reach us at:</p>
              <p className="font-medium">contact@smallbizdefend.com</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground mb-4">Our general support and communication hours:</p>
              <p className="font-medium">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM CET
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground mb-4">We aim to respond to all messages promptly:</p>
              <p className="font-medium">Typically within 24-48 business hours</p>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please provide details about your inquiry..."
                className="min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Looking for Quick Answers?</h2>
          <p className="mb-4">
            Before sending your message, you might find that your question has already been answered on our site. We
            encourage you to explore:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Our{" "}
              <a href="/workshop" className="text-primary hover:underline">
                Workshop Page
              </a>{" "}
              for details about the online workshop, including what's covered and how to enroll.
            </li>
            <li>
              Our{" "}
              <a href="/services" className="text-primary hover:underline">
                Services Page
              </a>{" "}
              for comprehensive information about the Cybersecurity Awareness Starter Kit.
            </li>
            <li>
              Our{" "}
              <a href="/blog" className="text-primary hover:underline">
                Blog
              </a>{" "}
              for a wide range of articles and guides on small business cybersecurity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
