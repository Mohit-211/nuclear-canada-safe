import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Monitor, Shield, CheckCircle, FileText } from "lucide-react";

const Training = () => {
  const trainingOptions = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Onsite Training",
      description: "Hands-on instruction at your facility using your procedures and equipment—tailored to your operations for immediate compliance impact.",
      features: [
        "Practical demos, site-specific scenarios, documentation for your safety files",
        "Ideal for group certification and refresher sessions",
        "Available nationwide (EN/FR)"
      ],
      buttonText: "Request Onsite Training Quote",
      buttonVariant: "default" as const,
      link: "#contact"
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "Online Training",
      description: "Flexible, self-paced learning with instructor support. Mobile-friendly modules keep your team current with the latest CNSC requirements.",
      features: [
        "Interactive modules, knowledge checks, scenario-based learning",
        "Instant digital certificates and records",
        "Multi-site friendly; perfect for new hires"
      ],
      buttonText: "Start Online Training",
      buttonVariant: "default" as const,
      link: "https://hazardu.com"
    }
  ];

  const valueProps = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Built by former CNSC inspectors"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "CNSC-aligned & audit-ready"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      text: "Documentation included"
    }
  ];

  const comparisonData = [
    {
      feature: "Delivery",
      onsite: "In-person at your facility",
      online: "Self-paced e-learning"
    },
    {
      feature: "Best for",
      onsite: "Teams/groups, hands-on practice",
      online: "Individuals, multi-site teams"
    },
    {
      feature: "Equipment familiarity",
      onsite: "Uses your procedures & gear",
      online: "Standardized scenarios & demos"
    },
    {
      feature: "Certificates",
      onsite: "Issued on completion",
      online: "Instant digital certificate"
    },
    {
      feature: "Languages",
      onsite: "EN/FR available",
      online: "EN/FR available"
    }
  ];

  return (
    <section id="training" className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Training Services
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Expert radiation safety training designed and delivered by former CNSC inspectors—available{" "}
            <span className="font-semibold text-foreground">onsite at your facility</span> or through our{" "}
            <span className="font-semibold text-foreground">online learning platform</span>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">CNSC Alignment:</span>{" "}
            Training is designed to align with Canadian Nuclear Safety Commission (CNSC) regulatory requirements.
            Organizations remain responsible for ensuring training meets their specific licence conditions and internal procedures.
          </p>
        </div>

        {/* Training Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {trainingOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {option.icon}
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={option.buttonVariant} 
                  className="w-full mt-auto" 
                  asChild
                >
                  <a 
                    href={option.link}
                    target={option.link.startsWith('http') ? "_blank" : undefined}
                    rel={option.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {option.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {valueProps.map((prop, index) => (
            <div key={index} className="flex items-center gap-2 text-foreground">
              <div className="text-primary">{prop.icon}</div>
              <span className="text-sm">{prop.text}</span>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">Onsite</th>
                <th className="px-4 py-3 font-semibold">Online</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-muted-foreground">{row.feature}</td>
                  <td className="px-4 py-3 text-foreground">{row.onsite}</td>
                  <td className="px-4 py-3 text-foreground">{row.online}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Training;
