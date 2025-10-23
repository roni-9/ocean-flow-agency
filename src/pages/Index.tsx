import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, TrendingUp, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import teamAlex from "@/assets/team-alex.jpg";
import teamDavid from "@/assets/team-david.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Ocean Web Service
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <Button className="bg-gradient-ocean hover:opacity-90">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We craft exceptional web experiences that drive results and inspire audiences
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Custom websites built with cutting-edge technologies for optimal performance and scalability"
              },
              {
                icon: Palette,
                title: "UI Design",
                description: "Beautiful, intuitive interfaces that engage users and enhance brand identity"
              },
              {
                icon: TrendingUp,
                title: "Strategy & Planning",
                description: "Data-driven strategies to maximize your digital presence and achieve business goals"
              },
              {
                icon: Zap,
                title: "Optimization",
                description: "Performance optimization and SEO to ensure your site ranks high and loads fast"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-ocean flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Responsive Design</h3>
                  <div className="w-full bg-muted rounded-full h-3 mb-2">
                    <div className="bg-gradient-ocean h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-muted-foreground">Flawless experience across all devices</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Design Experience</h3>
                  <div className="w-full bg-muted rounded-full h-3 mb-2">
                    <div className="bg-gradient-ocean h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-muted-foreground">Award-winning creative excellence</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Development Quality</h3>
                  <div className="w-full bg-muted rounded-full h-3 mb-2">
                    <div className="bg-gradient-ocean h-3 rounded-full" style={{ width: '93%' }}></div>
                  </div>
                  <p className="text-muted-foreground">Clean, maintainable code</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">SEO Optimization</h3>
                  <div className="w-full bg-muted rounded-full h-3 mb-2">
                    <div className="bg-gradient-ocean h-3 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  <p className="text-muted-foreground">Built-in best practices for visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert professionals dedicated to bringing your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { name: "Alex Morgan", role: "Director", image: teamAlex },
              { name: "David Smith", role: "Designer", image: teamDavid },
              { name: "Sarah Chen", role: "Developer", image: teamSarah }
            ].map((member, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights and trends from the digital world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: blog1,
                date: "March 15, 2024",
                title: "The Future of Responsive Web Design",
                excerpt: "Discover the latest trends and techniques in creating websites that work seamlessly across all devices."
              },
              {
                image: blog2,
                date: "March 10, 2024",
                title: "Maximizing ROI with Digital Marketing",
                excerpt: "Learn how data-driven strategies can transform your online presence and boost conversions."
              },
              {
                image: blog3,
                date: "March 5, 2024",
                title: "UI/UX Best Practices for 2024",
                excerpt: "Explore the principles that make interfaces intuitive, engaging, and user-friendly."
              }
            ].map((article, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="px-0 text-primary">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Ocean Web Service transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations.",
                author: "Jessica Williams",
                company: "TechStart Inc."
              },
              {
                quote: "Professional, responsive, and incredibly talented. They delivered our project on time and the results speak for themselves.",
                author: "Michael Brown",
                company: "Creative Studios"
              },
              {
                quote: "Working with this team was a pleasure. They understood our vision and brought it to life in ways we hadn't imagined.",
                author: "Emily Davis",
                company: "Venture Capital Group"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-8">
                  <p className="text-lg mb-6 italic text-foreground">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's collaborate to create something amazing. Get in touch with us today.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Ocean Web Service</h3>
              <p className="text-background/80">
                Crafting exceptional digital experiences
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/80 hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#team" className="text-background/80 hover:text-accent transition-colors">Our Team</a></li>
                <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">Web Development</a></li>
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">UI Design</a></li>
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@oceanwebservices.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (888) 263-7301</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/80 text-center">
              © 2025 OceanWebService. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
