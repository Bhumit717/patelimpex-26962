import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { DollarSign, CreditCard, Shield, TrendingUp, Building, Handshake } from "lucide-react";
import financeImage from "@/assets/export-finance-banking.jpg";

const TradeFinance = () => {
  const financeOptions = [
    { type: "Letter of Credit", desc: "Bank guarantee for international payments", icon: Shield },
    { type: "Export Credit", desc: "Pre-shipment and post-shipment financing", icon: CreditCard },
    { type: "Trade Insurance", desc: "Protection against commercial and political risks", icon: Building },
    { type: "Factoring", desc: "Immediate cash flow against receivables", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <DollarSign className="w-4 h-4 mr-2" />
                Financial Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trade Finance Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive trade finance options to support your international business. From letters of credit to export insurance, we help secure your transactions.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get Finance Solutions</Link>
              </Button>
            </div>
            <div>
              <img 
                src={financeImage} 
                alt="Trade Finance - Export import banking and financial services"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Finance Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financeOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <option.icon className="w-6 h-6 mr-3 text-green-600" />
                    {option.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.desc}</p>
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

export default TradeFinance;