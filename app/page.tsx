"use client";

import { useState } from "react";
import { Hero } from "@/app/components/hero";
import { EventCard } from "@/app/components/event-card";
import { ReservationModal } from "@/app/components/reservation-modal";
import { Card } from "@/docs/design/components/card";
import { Button } from "@/docs/design/components/button";
import { popularItems } from "@/app/data/menu-items";
import { events } from "@/app/data/events";
import { ArrowRight, Coffee } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [reserving, setReserving] = useState(false);

  return (
    <>
      <Hero onReserve={() => setReserving(true)} />

      {/* Popular Items */}
      <section className="relative overflow-hidden px-6 py-28 md:px-10">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-amber/5 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber">
              Customer Favourites
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-espresso dark:text-cream md:text-5xl">
              Popular Picks
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-500 dark:text-stone-400">
              The drinks and bites our guests come back for again and again.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularItems.map((item) => (
              <Card
                key={item.name}
                variant="interactive"
                image={item.image}
                imageAlt={item.name}
                label={item.badge}
                asArticle
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-bold tracking-tight text-espresso dark:text-[#F5EDE0]">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-sans font-bold text-amber">
                    &pound;{item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button variant="outline" iconRight={<ArrowRight size={16} />}>
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="relative overflow-hidden bg-cream-dark/60 px-6 py-28 dark:bg-espresso-light/10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber">
              Come Together
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-espresso dark:text-cream md:text-5xl">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-500 dark:text-stone-400">
              From open mic nights to tasting sessions — there&apos;s always
              something brewing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              variant="solid"
              size="lg"
              onClick={() => setReserving(true)}
              iconLeft={<Coffee size={18} />}
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <ReservationModal
        open={reserving}
        onClose={() => setReserving(false)}
      />
    </>
  );
}
