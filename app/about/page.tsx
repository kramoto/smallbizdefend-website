import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Target, CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About SmallBizDefend"
        description="Your trusted partner in making cybersecurity accessible, practical, and affordable for small businesses."
      />

      {/* Mission Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              At SmallBizDefend, we believe that robust cybersecurity shouldn't be a luxury reserved for large
              corporations. Every small business deserves protection from cyber threats, regardless of their technical
              expertise or budget constraints.
            </p>
            <p className="text-muted-foreground">
              Our mission is to democratize cybersecurity by translating complex security concepts into simple,
              actionable steps that any business owner can implement and understand.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Founded by Experience</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              SmallBizDefend was founded by an IT Security Consultant with over 15 years of hands-on experience
              protecting businesses from cyber threats. Having worked with companies of all sizes, from startups to
              enterprises, our founder recognized a critical gap in the market.
            </p>
            <p className="text-muted-foreground mb-6">
              While large corporations had dedicated IT teams and unlimited budgets for cybersecurity, small businesses
              were left vulnerable, often becoming easy targets for cybercriminals. This realization sparked the
              creation of SmallBizDefend – a company dedicated exclusively to serving the unique needs of small
              businesses.
            </p>
            <p className="text-muted-foreground">
              Our approach is born from real-world experience, not theoretical knowledge. We've seen what works, what
              doesn't, and most importantly, what small businesses actually need to stay secure.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Approach</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">No Jargon, Just Results</h3>
                  <p className="text-muted-foreground">
                    We speak in plain English, not technical jargon. Our explanations are clear, actionable, and
                    designed for business owners who need to focus on running their business, not becoming IT experts.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Budget-Conscious Solutions</h3>
                  <p className="text-muted-foreground">
                    We understand that small businesses operate on tight budgets. Our recommendations prioritize
                    cost-effective solutions that deliver maximum security impact without breaking the bank.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Step-by-Step Implementation</h3>
                  <p className="text-muted-foreground">
                    We break down complex security measures into manageable, step-by-step processes that you can
                    implement gradually, without disrupting your daily operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Practical, Real-World Focus</h3>
                  <p className="text-muted-foreground">
                    Our advice is based on real-world threats and practical solutions. We focus on what actually matters
                    for small businesses, not theoretical scenarios that may never apply to your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What Drives Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-muted-foreground">
                We believe every business, regardless of size, deserves enterprise-level protection from cyber threats.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">People-Centered</h3>
              <p className="text-muted-foreground">
                Technology serves people, not the other way around. Our solutions are designed with human usability in
                mind.
              </p>
            </div>

            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Results-Oriented</h3>
              <p className="text-muted-foreground">
                We measure our success by your security improvements, not by how complex our solutions appear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Why Choose SmallBizDefend?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              Unlike generic cybersecurity companies that try to serve everyone, we specialize exclusively in small
              business cybersecurity. This focus allows us to understand your unique challenges and provide solutions
              that actually fit your reality.
            </p>
            <p className="text-muted-foreground mb-8">
              We're not here to sell you expensive enterprise software or overwhelm you with unnecessary complexity.
              We're here to help you build a strong, practical defense that protects what matters most to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
