import { Heart, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe coffee brings people together. From our regulars who've become family to the newcomers we meet every day, Brew and Go is a place where everyone belongs.",
  },
  {
    icon: Leaf,
    title: "Sustainable Craft",
    description:
      "We source our beans directly from ethical producers, compost our coffee grounds, and use compostable packaging. Great coffee shouldn't cost the earth.",
  },
  {
    icon: Award,
    title: "Relentless Quality",
    description:
      "Every drink is crafted with precision and care. Our team trains weekly on technique, tasting, and service — because you deserve nothing less than exceptional.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-hero.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber">
            Our Story
          </span>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            About Brew and Go
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-amber/20" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber">
            Since 2018
          </span>
          <div className="h-px flex-1 bg-amber/20" />
        </div>

        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-espresso dark:text-cream md:text-4xl">
          A Love Letter to London&apos;s <br />
          Coffee Scene
        </h2>

        <div className="mt-10 space-y-6 text-base leading-[1.8] text-stone-600 dark:text-stone-300">
          <p>
            Brew and Go started as a dream shared over a pour-over at a tiny
            farmers&apos; market stall in 2016. <strong>Emma and James Holloway</strong>{" "}
            met behind a coffee machine — she was a pastry chef with a gift for
            making anything taste better with butter; he was a barista who could
            talk for hours about extraction ratios and still make you feel
            welcome.
          </p>
          <p>
            After years of saving, recipe-testing, and tasting more flat whites
            than either cares to admit, they found a narrow storefront on
            Broadway Market in Hackney. In the spring of 2018, with a
            second-hand espresso machine and more hope than business plan, Brew
            and Go opened its doors.
          </p>
          <p>
            The name came from a napkin sketch James made during a late-night
            conversation with Emma. &ldquo;Brew and Go&rdquo; captured everything they
            wanted: the ritual of a great brew and the energy of a city that
            never stops moving.
          </p>
          <p>
            Seven years on, the storefront has grown, the team has grown, but
            the philosophy hasn&apos;t changed. Every cup is made with intention.
            Every pastry is baked fresh each morning. And every guest is
            welcomed like a neighbour.
          </p>
        </div>

        {/* Quote */}
        <blockquote className="my-16 border-l-[3px] border-amber pl-8">
          <p className="font-display text-2xl italic leading-snug text-espresso dark:text-cream md:text-3xl">
            &ldquo;We didn&apos;t set out to build a coffee chain. We set out to build
            the coffee shop we always wished we had.&rdquo;
          </p>
          <footer className="mt-4 font-sans text-sm text-stone-500">
            &mdash; Emma &amp; James Holloway, Founders
          </footer>
        </blockquote>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-cream-dark/60 px-6 py-24 dark:bg-espresso-light/10 md:px-10 md:py-32">
        <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-amber/5 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber">
              What Drives Us
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-espresso dark:text-cream md:text-5xl">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber/10 text-amber">
                  <value.icon size={28} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-espresso dark:text-cream">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/team.webp"
            alt="Our team at Brew and Go"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-5 text-center text-sm text-stone-400">
          The Brew and Go family — making every cup count since 2018.
        </p>
      </section>
    </>
  );
}
