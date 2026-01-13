import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Globe, Truck, DollarSign, Shield, CheckCircle, ArrowRight, Download, Users } from "lucide-react";
import exportGuideImage from "@/assets/export-consultation.jpg";

const ExportImportGuide = () => {
  const guideSteps = [
    {
      step: "1",
      title: "Market Research & Planning",
      description: "Identify target markets, analyze demand, and understand local regulations",
      icon: Globe,
      details: [
        "Study international market trends",
        "Identify potential buyers and suppliers",
        "Analyze competition and pricing",
        "Understand cultural and business practices"
      ]
    },
    {
      step: "2", 
      title: "Legal Documentation",
      description: "Prepare all necessary export-import documentation and licenses",
      icon: FileText,
      details: [
        "IEC (Import Export Code) registration",
        "Commercial invoices and packing lists",
        "Certificate of origin",
        "Quality certificates and testing reports"
      ]
    },
    {
      step: "3",
      title: "Logistics & Shipping",
      description: "Choose transportation methods and manage supply chain",
      icon: Truck,
      details: [
        "Select appropriate shipping methods",
        "Coordinate with freight forwarders",
        "Arrange cargo insurance",
        "Track shipments and deliveries"
      ]
    },
    {
      step: "4",
      title: "Financial Management",
      description: "Handle payments, financing, and currency exchange",
      icon: DollarSign,
      details: [
        "Secure trade financing options",
        "Manage currency fluctuation risks",
        "Process international payments",
        "Handle banking documentation"
      ]
    }
  ];

  const benefits = [
    "Access to global markets and customers",
    "Diversified revenue streams",
    "Higher profit margins",
    "Business growth opportunities",
    "Reduced dependency on domestic market",
    "Enhanced brand recognition internationally"
  ];

  const commonChallenges = [
    {
      challenge: "Complex Documentation",
      solution: "Use professional documentation services and maintain checklists"
    },
    {
      challenge: "Language Barriers",
      solution: "Work with local agents and use translation services"
    },
    {
      challenge: "Currency Fluctuations",
      solution: "Use hedging strategies and flexible pricing models"
    },
    {
      challenge: "Quality Standards",
      solution: "Implement strict quality control and obtain certifications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Comprehensive Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Complete Export Import Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master the art of international trade with our comprehensive guide covering everything from market research to successful delivery. Perfect for beginners and experienced traders alike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Expert Guidance</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={exportGuideImage} 
                alt="Export Import Guide - International trade consultation and documentation"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              4-Step Export Import Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our proven methodology to establish successful international trade operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guideSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {step.step}
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Step {step.step}</Badge>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of Export Import Business
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the advantages of expanding your business globally through international trade
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">45+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </Card>
              <Card className="text-center p-6">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Monthly Shipments</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">99.8%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Challenges & Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to overcome typical export-import challenges with proven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonChallenges.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{item.challenge}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-700 mb-1">Solution:</p>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Export Import Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get personalized guidance from our international trade experts and start expanding globally
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/more">Explore More Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExportImportGuide;