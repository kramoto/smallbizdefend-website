import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function BlogPage() {
  // In a real implementation, this would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "Decoding VPNs: A Small Business Owner's Guide to Online Privacy & Security",
      excerpt:
        "Confused by VPNs? This simple guide decodes Virtual Private Networks for small business owners, explaining how they boost your online privacy, secure data, and why they are essential in 2025.",
      date: "May 9, 2025",
      slug: "decoding-vpns-small-business-guide",
    },
    {
      id: 2,
      title: "The Freelancer's Fortress: 5 Must-Have Cybersecurity Tools in 2025",
      excerpt:
        "Juggling clients and deadlines? Don't let cybersecurity slip! Discover the 5 essential tools every freelancer needs in 2025 to protect their business, data, and reputation.",
      date: "May 2, 2025",
      slug: "freelancers-fortress-cybersecurity-tools",
    },
    {
      id: 3,
      title: "How to Create a Strong Password Policy for Your Small Business",
      excerpt:
        "Learn how to create and implement an effective password policy that keeps your business secure without frustrating your employees.",
      date: "April 25, 2025",
      slug: "strong-password-policy-small-business",
    },
    {
      id: 4,
      title: "Phishing Attacks: How to Spot and Avoid Them",
      excerpt:
        "Phishing remains one of the most common attack vectors. Learn how to identify suspicious emails and protect your business from these deceptive threats.",
      date: "April 18, 2025",
      slug: "phishing-attacks-spot-avoid",
    },
    {
      id: 5,
      title: "The Small Business Guide to Data Backups",
      excerpt:
        "Don't wait until it's too late. Discover simple, affordable backup solutions that can save your business in case of data loss or ransomware attacks.",
      date: "April 11, 2025",
      slug: "small-business-guide-data-backups",
    },
    {
      id: 6,
      title: "Securing Your Remote Workforce: Essential Tips",
      excerpt:
        "With more employees working remotely, learn how to maintain security when your team is distributed across various locations and networks.",
      date: "April 4, 2025",
      slug: "securing-remote-workforce-tips",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader
        title="Small Business Cybersecurity Blog"
        description="Your source for actionable insights, practical advice, and the latest updates on cybersecurity trends that matter to small businesses."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/blog/${post.slug}`}>Read Article</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
