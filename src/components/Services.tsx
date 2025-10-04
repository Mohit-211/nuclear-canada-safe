import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, 
  AlertTriangle, 
  FileText, 
  GraduationCap,
  Shield,
  Zap,
  Users,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      title: "Auditing & Inspection Services",
      description: "Comprehensive compliance audits and program reviews by former CNSC inspectors and licensing specialists.",
      features: [
        "Corporate and staff compliance assessments",
        "Fully documented reports with strengths and deficiencies",
        "Economical methods for correcting shortfalls",
        "Site surveys for radiological exposures (ALARA)"
      ],
      badge: "Most Popular"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Emergency Response & Waste Disposal",
      description: "24/7 incident response and comprehensive waste management solutions.",
      features: [
        "First response to spills and incidents",
        "Legal disposal coordination and follow-up",
        "Facility emergency planning",
        "Decommissioning and decontamination services",
        "Nuclear substance and device disposal at AECL Chalk River"
      ],
      badge: "24/7 Available"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Radiation Safety Programs",
      description: "Custom program development and compliance documentation for CNSC requirements.",
      features: [
        "License applications and renewals",
        "Annual compliance reports",
        "Radiation procedures and safety manuals",
        "Government, CNSC and Transport Canada regulatory compliance",
        "Staff training to meet program commitments"
      ],
      badge: "Custom Solutions"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Professional Training",
      description: "Comprehensive training programs delivered by industry experts online and onsite.",
      features: [
        "Fixed and Portable Gauge Worker Training",
        "Radiographer Training", 
        "Radiation Safety Officer Training",
        "Medical & Academic Laboratory Training",
        "Emergency First Responder Training",
        "Transport of Dangerous Goods (TDG) Class 7"
      ],
      badge: "Online and Onsite Training"
    }
  ];

  const industries = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Industrial",
      description: "Construction, energy, mining, radiography"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Medical",
      description: "Hospitals, labs, nuclear medicine"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Academic",
      description: "Universities, research institutions"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Government",
      description: "Regulatory compliance and oversight"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Radiation Safety Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From compliance audits to emergency response, our expert team delivers practical solutions 
            that save time and reduce costs while ensuring regulatory compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="relative">
              {service.badge && (
                <Badge className="absolute -top-2 left-4 z-10">{service.badge}</Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.title === "Professional Training" && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://hazardu.com" target="_blank" rel="noopener noreferrer">
                      Visit HazardU.com →
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries Served */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {industry.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{industry.title}</h4>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;