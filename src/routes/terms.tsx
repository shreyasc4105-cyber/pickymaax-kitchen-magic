import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/pickymaax-logo.png.asset.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — PickyMaax" },
      {
        name: "description",
        content: "The terms that govern orders and use of the PickyMaax website.",
      },
      { property: "og:title", content: "Terms of Service — PickyMaax" },
      { property: "og:description", content: "The terms that govern orders and use of the PickyMaax website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

const sections: Array<{ title: string; body: string[] }> = [
  {
    title: "1. Who we are",
    body: [
      "PickyMaax (“we”, “us”) sells a savory, life enhancing kibble topper for dogs through this website. By using the site or placing an order, you agree to these terms.",
    ],
  },
  {
    title: "2. Orders and payment",
    body: [
      "When you place an order, you make an offer to buy the product at the price shown. Payment is processed securely by Stripe; we never see or store your card details.",
      "We may cancel or refuse an order (for example, if a product is unavailable or a price was shown in error). If we do, any payment taken is refunded in full.",
    ],
  },
  {
    title: "3. Product use",
    body: [
      "PickyMaax is a food topper, not a complete meal and not a medicine. Always follow the feeding instructions on the label, provide fresh water, and check with your veterinarian before changing the diet of puppies, seniors, or dogs with health conditions or allergies.",
      "Every dog is different. You are responsible for supervising your dog when introducing any new food.",
    ],
  },
  {
    title: "4. Shipping and delivery",
    body: [
      "Delivery estimates shown at checkout are estimates, not guarantees. Risk of loss passes to you when the carrier marks the order delivered to the address you provided.",
    ],
  },
  {
    title: "5. Returns and refunds",
    body: [
      "If something is wrong with your order, contact us at hello@pickymaax.com and we will make it right — replacement or refund, at our discretion. Our full refund policy applies as posted at checkout.",
    ],
  },
  {
    title: "6. Your account",
    body: [
      "If you sign in (for example with Google) to view your orders, keep your account secure. You can stop using the account at any time by signing out or contacting us to remove your data.",
    ],
  },
  {
    title: "7. Intellectual property",
    body: [
      "The PickyMaax name, logo, packaging design, photos, and site content belong to us. Please don’t copy or reuse them without permission.",
    ],
  },
  {
    title: "8. Liability",
    body: [
      "To the fullest extent permitted by law, we are not liable for indirect or consequential losses. Our total liability for any claim relating to an order is limited to the amount you paid for that order. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    title: "9. Changes",
    body: [
      "We may update these terms from time to time. The version posted on this page applies to orders placed after it is published.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "Questions about these terms? Email hello@pickymaax.com.",
    ],
  },
];

function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="PickyMaax home">
            <img src={logoAsset.url} alt="" width={44} height={44} className="size-11 rounded-full object-contain" />
            <span className="font-display text-lg tracking-[0.22em]">PICKYMAAX</span>
          </Link>
          <Link to="/" className="nav-link">Back to shop</Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="eyebrow">The fine print</p>
        <h1 className="mt-4 font-display text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 2026</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          PickyMaax · Made with love (and a lot of failed batches) by a 15-year-old and Max.
        </p>
      </article>
    </main>
  );
}
