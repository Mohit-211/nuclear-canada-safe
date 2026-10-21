import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuclearsafety.ca"),
  title: {
    default: "Nuclear Safety Canada | Radiation Safety & Nuclear Regulatory Services",
    template: "%s | Nuclear Safety Canada",
  },
  description:
    "Trusted Canadian experts in radiation safety and nuclear regulatory compliance. Professional consulting services for research labs, hospitals, and nuclear facilities.",
  authors: [{ name: "Nuclear Safety Canada" }],
  openGraph: {
    title: "Nuclear Safety Canada | Radiation Safety & Nuclear Regulatory Specialists",
    description:
      "Canadian experts in radiation safety and nuclear regulatory compliance for research labs, hospitals, and nuclear facilities.",
    type: "website",
    url: "/",
    images: ["/favicon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuclear Safety Canada",
    description: "Radiation Safety & Nuclear Regulatory Services for Canada.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
