"use client";

import Link from "next/link";
import { Button } from "@/docs/design/components/button";
import { ArrowRight, Coffee } from "lucide-react";

interface HeroProps {
  onReserve: () => void;
}

export function Hero({ onReserve }: HeroProps) {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.webp')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/20 backdrop-blur-sm">
            <Coffee size={22} className="text-amber" />
          </div>
        </div>
        <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          Brew and Go
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-stone-200 md:text-xl">
          Specialty coffee, fresh pastries, and light lunches in the heart of London.
          Your neighbourhood caf&eacute;, from sunrise to sunset.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/menu">
            <Button
              variant="solid"
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              View Menu
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={onReserve}
            className="border-white/40 text-white hover:border-white hover:bg-white/10"
          >
            Reserve a Table
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent dark:from-black" />
    </section>
  );
}
