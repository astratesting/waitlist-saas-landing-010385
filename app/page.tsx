"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Social Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
];

const FEATURES = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    name: "Identity-First Enrollment",
    description:
      "Capture rich user profiles at signup — role, use case, team size. Segment and prioritize your queue based on who matters most to your business, not just who arrived first.",
    badge: "Core",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    name: "Viral Referral Engine",
    description:
      "Every signup becomes a recruiter. Shareable referral links with real-time position tracking push users to advocate for your product before they even log in for the first time.",
    badge: "Growth",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    name: "Queue Intelligence Dashboard",
    description:
      "Live cohort analysis, drop-off heatmaps, and conversion funnels. Know exactly where excitement fades — and act before signups go cold. Integrates with Segment, Mixpanel, and Amplitude.",
    badge: "Analytics",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    name: "Drip Nurture Sequences",
    description:
      "Keep waitlist members warm with automated email journeys tuned to their queue position. Send milestone updates, early-access previews, and community invites without touching a CRM.",
    badge: "Engagement",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    name: "Gated Access Control",
    description:
      "Roll out to segments in waves — beta cohorts, power users, enterprise deals. Set capacity limits, approval gates, and priority lanes per plan tier. Ship confidently, not chaotically.",
    badge: "Control",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    name: "Developer-First API",
    description:
      "RESTful API and webhook system lets your eng team embed queue logic anywhere — your product, mobile app, or internal tools. Full TypeScript SDK. Median integration time: 47 minutes.",
    badge: "Platform",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Design Your Queue in Minutes",
    description:
      "Use our no-code builder to create a branded signup page with custom fields, referral mechanics, and position display. No designer required. Live in under 10 minutes.",
    detail: "Drag-and-drop builder · Custom domain · GDPR-ready consent flows",
  },
  {
    number: "02",
    title: "Drive Signups and Let Referrals Compound",
    description:
      "Share your waitlist link. Queuely's referral engine automatically rewards advocates with queue position bumps — turning every signup into a distribution channel.",
    detail: "Shareable referral links · Real-time leaderboard · Social card generator",
  },
  {
    number: "03",
    title: "Segment, Prioritize, and Invite",
    description:
      "Use identity data and engagement signals to build priority cohorts. Invite the right users at the right time — and measure exactly how each cohort activates.",
    detail: "Priority scoring · Cohort builder · Activation analytics",
  },
  {
    number: "04",
    title: "Onboard With Context — Not Cold",
    description:
      "Hand off rich user context to your product at the moment of access. Pre-populated profiles, stated use cases, and referral paths ensure Day 1 feels personal.",
    detail: "Context handoff API · CRM sync · Welcome flow templates",
  },
];

const STATS = [
  { value: "3.1M+", label: "Waitlist signups managed" },
  { value: "68%", label: "Average referral conversion lift" },
  { value: "2.4×", label: "Faster launch-to-activation" },
  { value: "99.97%", label: "Uptime SLA" },
];

const TESTIMONIALS = [
  {
    quote:
      "We had 180,000 people on our waitlist before launch. Queuely's referral engine was responsible for 40% of them. That network effect was invaluable.",
    author: "Mihail Popescu",
    role: "Head of Growth",
    company: "Fintra",
    avatar: "MP",
    accentColor: "from-blue-500 to-blue-700",
  },
  {
    quote:
      "Identity-first enrollment changed everything. We could prioritize power users and design an onboarding track specifically for them before we even opened the doors.",
    author: "Anika Sharma",
    role: "CPO",
    company: "Lumos AI",
    avatar: "AS",
    accentColor: "from-violet-500 to-violet-700",
  },
  {
    quote:
      "Went from a spreadsheet waitlist with zero visibility to real-time cohort analytics in one afternoon. The Queue Intelligence dashboard alone is worth the price.",
    author: "James Thornton",
    role: "Founder",
    company: "Stackform",
    avatar: "JT",
    accentColor: "from-emerald-500 to-emerald-700",
  },
];

const LOGOS = [
  "Fintra",
  "Lumos AI",
  "Stackform",
  "Orbit Labs",
  "Vanta",
  "Meridian",
];

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For indie founders and early-stage products proving demand.",
    features: [
      "Up to 5,000 waitlist members",
      "Referral engine (unlimited)",
      "Custom signup page",
      "Basic email nurture (3 sequences)",
      "CSV export",
      "Community support",
    ],
    cta: "Start for Free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    description: "For funded teams running a launch and building momentum.",
    features: [
      "Up to 50,000 waitlist members",
      "Identity-first enrollment fields",
      "Priority scoring & cohort builder",
      "Drip nurture sequences (unlimited)",
      "Queue Intelligence Dashboard",
      "Segment + Mixpanel integration",
      "Webhook API",
      "Email support (4h SLA)",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "$499",
    period: "/mo",
    description: "For growth teams shipping to millions of users.",
    features: [
      "Unlimited waitlist members",
      "Gated access control + wave invites",
      "Full REST API + TypeScript SDK",
      "Multi-product queue management",
      "Custom domain + white-label",
      "SSO & SAML",
      "SLA 99.97% uptime",
      "Dedicated CSM",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (
    e: React.FormEvent,
    emailVal: string,
    setter: (v: boolean) => void
  ) => {
    e.preventDefault();
    if (emailVal) setter(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-text-primary tracking-tight">
                Queuely
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden sm:block text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Sign in
              </a>
              <a
                href="#cta"
                className="text-sm font-medium bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(69,103,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(69,103,183,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8 text-sm text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            Trusted by 800+ product teams across 42 countries
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            <span className="text-text-primary">Your Waitlist Is </span>
            <span className="text-gradient">Your First Product.</span>
            <br />
            <span className="text-text-primary">Build It Like One.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
            Queuely replaces spreadsheets and Mailchimp hacks with a full
            waitlist operating system — identity-first enrollment, viral
            referral loops, and the analytics to know exactly which signups will
            become your best customers.
          </p>

          {/* Email capture */}
          <form
            onSubmit={(e) => handleSubmit(e, heroEmail, setHeroSubmitted)}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5"
          >
            {heroSubmitted ? (
              <div className="flex-1 flex items-center justify-center gap-2 bg-surface border border-accent/30 rounded-xl px-5 py-3.5 text-accent font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                You&apos;re on the list!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 bg-surface border border-border focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-xl px-5 py-3.5 text-text-primary placeholder-muted text-sm transition-all"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 whitespace-nowrap text-sm"
                >
                  Get Early Access →
                </button>
              </>
            )}
          </form>

          <p className="text-sm text-muted">
            No credit card required · 14-day free trial · Cancel anytime
          </p>

          {/* Social proof mini */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D", "E"].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-xs font-bold text-white"
                  style={{ zIndex: 5 - i }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              <span className="text-text-primary font-semibold">800+</span>{" "}
              teams already building with Queuely
            </span>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="py-12 border-y border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted uppercase tracking-widest mb-8">
            Powering launches at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-muted font-semibold text-sm tracking-wide hover:text-text-secondary transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="proof" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-gradient-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4 text-sm text-accent font-medium">
              Everything you need
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
              A Waitlist Platform Built for{" "}
              <span className="text-gradient">Serious Product Teams</span>
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg">
              Stop duct-taping together Typeform, Mailchimp, and a spreadsheet.
              Queuely gives you every tool to turn pre-launch interest into
              activated, loyal users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-surface border border-border rounded-2xl p-6 card-hover cursor-default overflow-hidden"
              >
                {/* Card inner glow */}
                <div className="absolute inset-0 bg-card-glow pointer-events-none rounded-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {feature.icon}
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-24 bg-surface/30 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4 text-sm text-accent font-medium">
              How it works
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
              From Signup Page to{" "}
              <span className="text-gradient">Activated User</span>
              <br />
              in Four Steps
            </h2>
            <p className="max-w-xl mx-auto text-text-secondary text-lg">
              Queuely turns the pre-launch dead zone into your most powerful
              growth engine.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

            <div className="space-y-8">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center relative z-10">
                      <span className="font-mono font-bold text-accent text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface border border-border rounded-2xl p-6 lg:p-8 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.detail.split(" · ").map((d) => (
                            <span
                              key={d}
                              className="text-xs text-muted bg-background border border-border rounded-full px-3 py-1"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <span className="font-bold text-sm">{i + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4 text-sm text-accent font-medium">
              Customer stories
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
              Teams That Shipped With{" "}
              <span className="text-gradient">Confidence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-surface border border-border rounded-2xl p-6 card-hover flex flex-col gap-5"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.accentColor} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      {t.author}
                    </div>
                    <div className="text-xs text-muted">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-24 bg-surface/30 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4 text-sm text-accent font-medium">
              Simple pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
              Transparent Plans.{" "}
              <span className="text-gradient">No Surprises.</span>
            </h2>
            <p className="max-w-xl mx-auto text-text-secondary text-lg">
              Start free. Upgrade when you need it. Every plan includes our
              referral engine and core analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-200 ${
                  plan.highlight
                    ? "bg-accent/5 border-2 border-accent/40 glow-accent"
                    : "bg-surface border border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlight
                      ? "bg-accent hover:bg-accent-light text-white hover:shadow-lg hover:shadow-accent/20"
                      : "bg-background hover:bg-surface-2 text-text-primary border border-border"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8 text-sm text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
            Accepting new teams this month
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-text-primary tracking-tight leading-tight mb-6">
            Your Next Launch Starts{" "}
            <span className="text-gradient">With the Right Queue</span>
          </h2>

          <p className="text-xl text-text-secondary leading-relaxed mb-10">
            Join 800+ product teams who stopped guessing and started building
            waitlists that actually convert. Your first 14 days are on us.
          </p>

          <form
            onSubmit={(e) => handleSubmit(e, email, setSubmitted)}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
          >
            {submitted ? (
              <div className="flex-1 flex items-center justify-center gap-2 bg-surface border border-accent/30 rounded-xl px-5 py-4 text-accent font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Welcome to Queuely. Check your inbox.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="work@company.com"
                  required
                  className="flex-1 bg-surface border border-border focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-xl px-5 py-4 text-text-primary placeholder-muted text-sm transition-all"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-light text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 whitespace-nowrap"
                >
                  Start Free →
                </button>
              </>
            )}
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Setup in 10 minutes
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-text-primary">Queuely</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                The waitlist management platform for product teams who take
                launches seriously.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm text-muted">
                {[
                  "Features",
                  "Pricing",
                  "Changelog",
                  "API Docs",
                  "Integrations",
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-text-secondary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm text-muted">
                {["About", "Blog", "Careers", "Press", "Contact"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-text-secondary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-sm text-muted">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map(
                  (l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-text-secondary transition-colors">
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © 2026 Queuely, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {["Twitter", "GitHub", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm text-muted hover:text-text-secondary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
