import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  DollarSign, 
  Clock, 
  Network, 
  CheckCircle, 
  Award 
} from "lucide-react";

const About = () => {
  const advantages = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Health Physics and Radiation Safety Professionals",
      description: "Our expert staff consists of former CNSC inspectors, health physicists and licensing specialists. We know the regulatory requirements."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "CNSC Liaison", 
      description: "We maintain constant contact with the Canadian Nuclear Safety Commission. We kept abreast of all regulatory changes."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Reduction of Compliance Expense",
      description: "The CNSC plans to charge licensees for the time expended by inspectors and staff on licences that are not in compliance. We can ensure that your program is compliant."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Saving",
      description: "Radiation Safety is our business; we save you time so you can focus on your core business."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Industry Networks",
      description: "Through our associated contractors we supply all your Radiation Safety and Regulatory needs. You do not have to access multiple vendors."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Guaranteed Work",
      description: "We provide custom solutions that are right for your company. We do not template your needs into pre-cast solutions that don't work for you."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "We Do It Right For You",
      description: "We provide custom solutions that are right for your company. We do not template your needs into pre-cast solutions that don't work for you."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose Canadian Nuclear Safety Services?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            With former CNSC inspectors, health physicists, and licensing specialists on our team, 
            we deliver the expertise and practical solutions you need for complete regulatory compliance.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Founded in 1998 • 25+ Years of Excellence</span>
          </div>
        </div>

        {/* Technical Expertise Showcase */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Deep Technical & Regulatory Expertise
                </h3>
                <p className="text-muted-foreground">
                  Our team understands both the technical science and regulatory framework that governs nuclear safety in Canada.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/1f6522c1-74da-4a37-aae5-5e642255c16e.png" 
                  alt="CNSC Regulatory Framework and Radioactive Decay Formulas" 
                  className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  From fundamental health physics calculations to navigating CNSC's comprehensive regulatory framework, 
                  our expertise spans the complete spectrum of nuclear safety requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary flex-shrink-0 mt-1">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-primary text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">These Advantages Save You Money!</h3>
                <p className="text-primary-foreground/90">
                  Our comprehensive approach reduces compliance costs and minimizes regulatory risks.
                </p>
              </div>
              <Badge variant="secondary" className="text-lg px-6 py-2 font-semibold">
                Proven ROI
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;