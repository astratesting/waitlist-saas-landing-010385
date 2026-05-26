import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Queuely — Turn Your Waitlist Into Your Strongest Growth Channel",
  description:
    "Queuely gives product teams the tools to build identity-first waitlists that convert signups into champions. Smart queue management, viral referral loops, and deep onboarding analytics — all in one platform.",
  keywords: [
    "waitlist management",
    "waitlist software",
    "product launch waitlist",
    "referral waitlist",
    "pre-launch marketing",
    "signup management",
  ],
  authors: [{ name: "Queuely" }],
  openGraph: {
    title: "Queuely — Turn Your Waitlist Into Your Strongest Growth Channel",
    description:
      "Smart waitlist management with viral referral loops, identity-first onboarding, and real-time queue analytics.",
    type: "website",
    siteName: "Queuely",
  },
  twitter: {
    card: "summary_large_image",
    title: "Queuely — Turn Your Waitlist Into Your Strongest Growth Channel",
    description:
      "Smart waitlist management with viral referral loops, identity-first onboarding, and real-time queue analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
