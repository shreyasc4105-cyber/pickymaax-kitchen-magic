import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/pickymaax-logo.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PickyMaax" },
      {
        name: "description",
        content: "How PickyMaax collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — PickyMaax" },
      { property: "og:description", content: "How PickyMaax collects, uses, and protects your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const sections: Array<{ title: string; body: string[] }> = [
  {
    title: "1. What we collect",
    body: [
      "Order details: your name, email, shipping address, and what you bought — so we can fulfill and track your order.",
      "Payment: handled entirely by Stripe. We never see or store your card number, expiry, or CVC — only Stripe’s reference IDs and the payment status.",
      "Account: if you sign in with Google, we receive your name and email address from Google to show your orders.",
      "Email list: if you join “the pack”, we store your email address to send restock updates.",
    ],
  },
  {
    title: "2. How we use it",
    body: [
      "To process and deliver orders, send order confirmations, provide customer support, and show you your order history.",
      "To email you about restocks and news — only if you asked, and you can unsubscribe at any time.",
      "We do not sell your personal information, and we do not share it with advertisers.",
    ],
  },
  {
    title: "3. Who processes your data",
    body: [
      "Stripe processes payments. Lovable Cloud hosts the website, sign-in, and order database. Each service handles data under its own privacy policy and security standards.",
    ],
  },
  {
    title: "4. Cookies",
    body: [
      "We use only what’s needed to keep you signed in and keep the site working. We don’t use advertising or tracking cookies.",
    ],
  },
  {
    title: "5. How long we keep it",
    body: [
      "Order records are kept as long as needed for accounting, tax, and support purposes. Email-list addresses are kept until you unsubscribe or ask us to delete them.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      "You can ask to see, correct, or delete your personal information at any time by emailing hello@pickymaax.com. Depending on where you live, you may have additional rights under laws like GDPR or CCPA — we honor them.",
    ],
  },
  {
    title: "7. Children",
    body: [
      "This site is intended for adults making purchases. (The founder may be 15, but the checkout is for grown-ups.) We don’t knowingly collect personal information from children.",
    ],
  },
  {
    title: "8. Changes",
    body: [
      "If this policy changes, the updated version will be posted on this page with a new “last updated” date.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "Questions about your privacy? Email hello@pickymaax.com.",
    ],
  },
];

function PrivacyPage() {
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
        <p className="eyebrow">Your data, respected</p>
        <h1 className="mt-4 font-display text-5xl">Privacy Policy</h1>
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
