import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Shield, 
  Star, 
  Award, 
  CheckCircle,
  Menu,
  X,
  Stethoscope,
  Smile as SmileIcon,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary-soft selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-between rounded-xl bg-primary text-primary-foreground shadow-soft p-2">
              <Stethoscope className="h-6 w-6" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Aura<span className="text-primary">Dental</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">Services</a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">Our Specialists</a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">Testimonials</a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1555123456" className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </a>
            <Button asChild size="lg" className="rounded-xl shadow-soft">
              <a href="#book">Book Appointment</a>
            </Button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-foreground/80 hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
              >
                Our Specialists
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
              >
                Contact
              </a>
              <hr className="border-border" />
              <div className="flex flex-col gap-3">
                <a href="tel:+1555123456" className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </a>
                <Button asChild size="lg" className="w-full rounded-xl">
                  <a href="#book" onClick={() => setMobileMenuOpen(false)}>Book Appointment</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/50 px-4 py-1.5 text-sm font-semibold text-primary">
                <Star className="h-4 w-4 fill-primary" />
                <span>Top-Rated Dental Clinic in the City</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Your Smile Deserves the <span className="text-primary">Highest Quality Care</span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground mx-auto lg:mx-0 text-balance">
                Experience advanced dentistry in a warm, welcoming environment. Our expert team uses state-of-the-art technology to craft and protect your perfect smile.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="rounded-xl shadow-soft px-8 py-6 text-base font-semibold">
                  <a href="#book">Schedule a Visit <ChevronRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl px-8 py-6 text-base font-semibold bg-transparent">
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0 border-t border-border/60">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">15k+</div>
                  <div className="text-xs text-muted-foreground font-medium">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">99.8%</div>
                  <div className="text-xs text-muted-foreground font-medium">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">12+</div>
                  <div className="text-xs text-muted-foreground font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-3xl bg-accent/20 blur-3xl"></div>
              <div className="absolute -right-4 -bottom-4 h-72 w-72 rounded-3xl bg-primary/20 blur-3xl"></div>
              
              <div className="relative overflow-hidden rounded-3xl shadow-card border border-white/40 aspect-[4/3] sm:aspect-[4/3]">
                <img 
                  src="/src/assets/hero-dentist.jpg" 
                  alt="Modern Dental Clinic Room" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Float Widget */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-card backdrop-blur-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">Quick Scheduling</p>
                  <p className="text-sm font-bold text-foreground">Under 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-white border-y border-border/40 py-8 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">Visit Us</h3>
                <p className="text-sm text-muted-foreground">123 Medical Center Way, Suite 400</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">Open Hours</h3>
                <p className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">Contact</h3>
                <p className="text-sm text-muted-foreground">(555) 123-4567 | info@auradental.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Premium Services</h2>
            <p className="text-muted-foreground text-lg text-balance">
              We provide complete care to ensure your teeth, gums, and smile remain healthy and dazzling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/40 shadow-soft hover:shadow-card transition-all duration-300 rounded-2xl group overflow-hidden">
              <CardHeader className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SmileIcon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">General Dentistry</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  Routine cleanings, fillings, checkups, and general examinations to maintain prime oral hygiene.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-sm text-primary font-semibold flex items-center gap-1 cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4" />
              </CardContent>
            </Card>

            <Card className="border-border/40 shadow-soft hover:shadow-card transition-all duration-300 rounded-2xl group overflow-hidden">
              <CardHeader className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">Cosmetic Dentistry</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  Teeth whitening, porcelain veneers, and dental bonding to help you achieve the bright smile of your dreams.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-sm text-primary font-semibold flex items-center gap-1 cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4" />
              </CardContent>
            </Card>

            <Card className="border-border/40 shadow-soft hover:shadow-card transition-all duration-300 rounded-2xl group overflow-hidden">
              <CardHeader className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">Restorative Care</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  Durable implants, crowns, bridges, and root canal treatments to restore functionality and confidence.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-sm text-primary font-semibold flex items-center gap-1 cursor-pointer">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About/Dentist Section */}
      <section id="about" className="py-24 bg-white border-y border-border/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl shadow-card aspect-[4/3] sm:aspect-[4/3] border border-border/40">
                <img 
                  src="/src/assets/smile.jpg" 
                  alt="Doctor smiling in office" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-wider text-primary uppercase">Meet Your Doctor</span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dr. Evelyn Stone, DDS</h2>
                <p className="text-muted-foreground text-lg">
                  With over a decade of clinical experience, Dr. Stone is passionate about rendering personalized, high-caliber dental care that focuses on comfort and long-term wellness.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Columbia University Dental Graduate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-semibold text-foreground">ADA & AACD Registered Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Specialist in Minimal-Invasive Aesthetics</span>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-xl">
                <a href="#book">Book a Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment / Booking Form */}
      <section id="book" className="py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-white shadow-card overflow-hidden">
            <div className="bg-primary px-8 py-10 text-center text-primary-foreground">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Book an Appointment</h2>
              <p className="text-primary-soft/90 mt-2">Take the first step towards a healthier, brighter smile today.</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Appointment requested successfully! Our team will contact you shortly."); }} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullname" className="text-sm font-semibold text-foreground">Full Name</label>
                  <input 
                    type="text" 
                    id="fullname" 
                    placeholder="John Doe" 
                    required 
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="(555) 000-0000" 
                    required 
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground">Select Service</label>
                  <select 
                    id="service" 
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="">Choose a service...</option>
                    <option value="general">General Checkup</option>
                    <option value="cosmetic">Teeth Whitening / Veneers</option>
                    <option value="implant">Dental Implant Consultation</option>
                    <option value="braces">Orthodontic Examination</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-semibold text-foreground">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    required 
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-semibold text-foreground">Preferred Time</label>
                  <select 
                    id="time" 
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="">Choose a time...</option>
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Late Afternoon (4:00 PM - 6:00 PM)</option>
                  </select>
                </div>
              </div>
              
              <Button type="submit" size="lg" className="w-full rounded-xl py-6 shadow-soft font-semibold text-base">
                Confirm Appointment Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground p-1">
                  <Stethoscope className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  AuraDental
                </span>
              </div>
              <p className="text-sm text-background/60">
                Premium family and cosmetic dental care tailored to your needs.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-background/60">
                <li><a href="#services" className="hover:text-primary transition">Services</a></li>
                <li><a href="#about" className="hover:text-primary transition">Our Specialists</a></li>
                <li><a href="#book" className="hover:text-primary transition">Book Visit</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-background/60">
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Newsletter</h3>
              <p className="text-sm text-background/60 mb-4">Subscribe for oral health tips and updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-primary w-full border-none"
                />
                <Button size="sm" className="rounded-lg shrink-0 px-4">
                  Join
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
            <p>&copy; {new Date().getFullYear()} AuraDental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
