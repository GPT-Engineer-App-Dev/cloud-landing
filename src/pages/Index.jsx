import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Index() {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center my-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Product</h1>
        <p className="text-lg mb-8">The best solution for your business needs.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      <section id="features" className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Basic features included.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <p>Standard features included.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>All features included.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="mb-4">
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <Input type="text" placeholder="Subject" />
                </div>
                <div className="mb-4">
                  <textarea className="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
                </div>
                <Button type="submit" variant="primary">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Index;