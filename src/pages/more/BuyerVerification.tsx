import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { UserCheck, Shield, Search, FileText, Globe, TrendingUp } from "lucide-react";
import verificationImage from "@/assets/export-consultation.jpg";

const BuyerVerification = () => {
  const verificationSteps = [
    { step: "Company Registration", check: "Legal entity verification", time: "1-2 days" },
    { step: "Financial Assessment", check: "Credit history and stability", time: "2-3 days" },
    { step: "Trade References", check: "Previous supplier feedback", time: "3-5 days" },
    { step: "Site Verification", check: "Physical presence confirmation", time: "5-7 days" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <UserCheck className="w-4 h-4 mr-2" />
                Buyer Verification
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                International Buyer Verification
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Secure your export business with thorough buyer verification services. Minimize payment risks and ensure credible business partnerships.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Verify Buyers Now</Link>
              </Button>
            </div>
            <div>
              <img 
                src={verificationImage} 
                alt="International Buyer Verification - Secure trade partnerships"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Verification Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                  <Badge variant="outline">{step.time}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.check}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyerVerification;