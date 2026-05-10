import { Card } from "@/docs/design/components/card";
import type { Event } from "@/app/data/events";
import { Calendar, Clock } from "lucide-react";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card
      variant="interactive"
      image={event.image}
      imageAlt={event.title}
      asArticle
      className="flex flex-col"
    >
      <h3 className="font-display text-xl font-semibold text-espresso dark:text-cream">
        {event.title}
      </h3>
      <div className="flex flex-col gap-1.5 text-sm text-stone-500 dark:text-stone-400">
        <span className="flex items-center gap-2">
          <Calendar size={14} className="text-amber" />
          {event.date}
        </span>
        <span className="flex items-center gap-2">
          <Clock size={14} className="text-amber" />
          {event.time}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
        {event.description}
      </p>
    </Card>
  );
}
