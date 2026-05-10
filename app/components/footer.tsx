import Link from "next/link";
import { Navigation } from "@/docs/design/components/navigation";
import { Coffee } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="relative bg-espresso text-cream">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-cream transition-colors hover:text-amber"
            >
              <Coffee size={22} className="text-amber" />
              Brew and Go
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">
              Specialty coffee, fresh pastries, and light lunches in the heart
              of London.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold tracking-wide text-cream">
              Navigate
            </h3>
            <Navigation
              items={navItems}
              variant="footer"
              className="text-stone-400"
            />
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold tracking-wide text-cream">
              Visit Us
            </h3>
            <address className="not-italic text-sm leading-relaxed text-stone-400">
              <p>47 Broadway Market</p>
              <p>London, E8 4PH</p>
              <p className="mt-3 space-y-0.5">
                <span className="text-stone-500">Mon–Fri</span>{" "}
                <span className="text-stone-300">7am – 6pm</span>
                <br />
                <span className="text-stone-500">Sat–Sun</span>{" "}
                <span className="text-stone-300">8am – 7pm</span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-stone-700/60 pt-8 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Brew and Go. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
