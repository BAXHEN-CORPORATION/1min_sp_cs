import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const checkoutLink = process.env.CHECKOUT_LINK ?? "#";
const contactEmail = process.env.CONTACT_EMAIL ?? "";

const BOOK_COVER_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDq4G9iFnRFk2IrOuws_ACOvrOMhIe-J30VKB4X1-L7pE3yP_XBpPi6edQwOr2BEzosdq56BBT5o9Jl-D4-uvN1zzPr6hU2xetWiB-BfhNr-lsFroI8sQREGbMTHLYaq-pZCQNuyeI4Q1u_LN48kl8Xp3rYI4oSG3v0IPXeYc9ivrWVgF8OMYfq6Pwl-tfxi0XI24CHBGB-hTY74gMlALeL694yuJVsaJNsjJVc7s0o-ow_EW3Lmir5u6VZ1vr53aYcgg";

const WORKSPACE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHV-KuNfuVix8sjbxxHvZCsLCHdBe15j3XyWbOBDU7X4LVnClVfGVWRBDs3XfTTd4i8E3Mjw_Ui5EEIUt6dASTB5AiAOxEStwP1JibLn6QsfrEgxVLnv__85GLbIxvq0tSqNYAVcmVB7Bsnq09Go9UIr8CRTegFSrPoPnGQSqZPRRp8UBd4vZytMO_sY4LARdMQQi-CTqAuPk6IpITRGGPSL69nbijMD6K6NYLLCuQuecFiBpkwRfpzEr_7n9o7cXgs2oXhwULOTTh";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Before you Study Computer Science",
  description:
    "The practical roadmap I wish I had before spending years learning the wrong things.",
  offers: {
    "@type": "Offer",
    price: "7",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

const curriculumItems = [
  "What computer science actually is (and what developers really do)",
  "Why problem-solving matters more than talent",
  "The myths that keep beginners stuck",
  "How to build strong foundations using CS50",
  "How to develop real-world skills through projects",
  "Why practical environments like 42 School accelerate learning",
  "The biggest mistakes beginners make and how to avoid them",
];

const trustBadges = [
  { icon: "security", label: "SECURE CHECKOUT" },
  { icon: "history", label: "100% MONEY BACK" },
  { icon: "devices", label: "ALL DEVICES" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* ── Navbar ── */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant"
      >
        <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
          <div className="font-display t-headline-md font-extrabold text-on-surface">
            Before CS
          </div>

          <div className="hidden md:flex gap-gutter items-center">
            {(
              [
                ["#curriculum", "Inside"],
                ["#pricing", "Pricing"],
              ] as const
            ).map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-body-md text-on-surface-variant font-medium hover:text-brand-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <Button
              render={
                <a
                  href={checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="px-6 h-10 text-sm"
            >
              Enroll Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden p-2 text-on-surface"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* ── Main content ── */}
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section
          className="hero-gradient relative overflow-hidden py-section-padding"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-stack-lg items-center">
            {/* Text column */}
            <div className="space-y-stack-md animate-fade-up">
              <Badge
                variant="outline"
                className="font-label-caps t-label-caps tracking-widest bg-brand-accent/10 text-brand-accent border-brand-accent/20 h-auto py-1.5 rounded-full"
              >
                NO FLUFF. NO UNREALISTIC PROMISES.
              </Badge>

              <h1
                id="hero-heading"
                className="font-display t-headline-lg-mobile md:t-display text-on-surface"
              >
                Before you Study Computer Science
              </h1>

              <p className="font-body-lg t-body-lg text-on-surface-variant max-w-lg">
                The practical roadmap I wish I had before spending years
                learning the wrong things.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  render={
                    <a
                      href={checkoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="px-8 py-4 h-auto text-base font-semibold"
                >
                  Get the PDF Now
                </Button>
                <Button
                  variant="outline"
                  render={<a href="#curriculum" />}
                  className="px-8 py-4 h-auto text-base font-semibold"
                >
                  View Roadmap
                </Button>
              </div>

              <div className="flex items-center gap-stack-sm text-on-surface-variant opacity-75">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  verified_user
                </span>
                <span className="text-sm font-medium">
                  The skills used by the top 12,000 engineers worldwide
                </span>
              </div>
            </div>

            {/* Book cover */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[1023/1537] rounded-xl overflow-hidden shadow-2xl transition-transform hover:-rotate-1 duration-500 bg-white">
                <Image
                  src={BOOK_COVER_URL}
                  alt="Before You Study Computer Science — PDF guide cover"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover"
                  preload
                />
              </div>
              <div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* ── Inside / Curriculum ── */}
        <section
          id="curriculum"
          className="bg-surface py-stack-lg"
          aria-labelledby="curriculum-heading"
        >
          <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-stack-lg items-center">
            {/* Workspace image */}
            <div className="order-2 md:order-1">
              <Image
                src={WORKSPACE_URL}
                alt="Developer workspace with a laptop displaying a code editor"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl border border-outline-variant w-full h-auto"
              />
            </div>

            {/* Checklist */}
            <div className="order-1 md:order-2 space-y-stack-md animate-fade-up animate-delay-100">
              <h2
                id="curriculum-heading"
                className="font-display t-headline-lg text-on-surface"
              >
                Inside You&apos;ll Learn
              </h2>
              <p className="font-body-lg t-body-lg text-on-surface-variant">
                A clear roadmap from confusion to action, distilled into
                essential technical and mental frameworks.
              </p>
              <ul
                className="space-y-4"
                aria-label="Topics covered in the guide"
              >
                {curriculumItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-on-tertiary-container mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section
          id="pricing"
          className="py-section-padding bg-surface"
          aria-labelledby="pricing-heading"
        >
          <div className="max-w-[800px] mx-auto px-margin-mobile text-center">
            <Card className="ring-0 border-2 border-brand-accent shadow-xl rounded-3xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 bg-brand-accent text-white font-label-caps t-label-caps py-2 px-6 rounded-bl-xl"
                aria-label="Best value offer"
              >
                BEST VALUE
              </div>

              <CardHeader className="pt-stack-lg px-stack-lg md:px-16 pb-0 gap-2">
                <h2
                  id="pricing-heading"
                  className="font-display t-headline-lg text-on-surface"
                >
                  Ready to start?
                </h2>
                <p className="t-body-lg text-on-surface-variant">
                  Gain the advantage today and join 12k+ other engineers.
                </p>
              </CardHeader>

              <CardContent className="px-stack-lg md:px-16 pb-stack-lg md:pb-16 space-y-stack-md">
                <div className="py-stack-md">
                  <span
                    className="t-headline-md text-on-surface-variant line-through opacity-50 mr-2"
                    aria-label="Original price: 19 euros"
                  >
                    €19
                  </span>
                  <span
                    className="text-5xl font-display font-extrabold text-on-surface"
                    aria-label="Sale price: 7 euros"
                  >
                    €7
                  </span>
                  <span className="text-on-surface-variant font-medium">
                    {" "}
                    EUR / one-time
                  </span>
                </div>

                <div className="space-y-3 max-w-sm mx-auto">
                  <Button
                    render={
                      <a
                        href={checkoutLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="w-full px-8 py-5 h-auto text-lg font-semibold"
                  >
                    Get the PDF Now
                  </Button>
                  <p className="text-sm text-on-surface-variant">
                    Instant delivery to your inbox. PDF format.
                  </p>
                </div>

                <Separator className="bg-outline-variant" />

                <dl className="flex flex-wrap justify-center gap-stack-md opacity-75">
                  {trustBadges.map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-on-tertiary-container"
                        style={{ fontSize: "18px" }}
                        aria-hidden="true"
                      >
                        {icon}
                      </span>
                      <dt className="sr-only">{label}</dt>
                      <dd className="t-label-caps font-label-caps">{label}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter py-stack-lg flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-display t-headline-md font-bold text-on-surface">
              Before CS
            </div>
            <p className="text-on-surface-variant font-body-md text-sm text-center md:text-left">
              © {new Date().getFullYear()} Before you Study Computer Science.
              Empowering future engineers.
            </p>
          </div>

          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              className="text-on-surface-variant font-body-md hover:text-brand-accent underline underline-offset-4 opacity-90 hover:opacity-100 transition-all text-sm"
            >
              Contact Support
            </a>
          )}
        </div>
      </footer>
    </>
  );
}
