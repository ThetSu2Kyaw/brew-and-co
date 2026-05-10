import { Card } from "@/docs/design/components/card";
import type { MenuItem } from "@/app/data/menu-items";

interface MenuCategoryProps {
  category: string;
  items: MenuItem[];
}

const categoryEmoji: Record<string, string> = {
  "Hot Drinks": "☕",
  "Cold Drinks": "🧊",
  Pastries: "🥐",
  Sandwiches: "🥪",
};

export function MenuCategory({ category, items }: MenuCategoryProps) {
  return (
    <section className="mb-24 last:mb-0">
      <div className="mb-10 flex items-center gap-4">
        <span className="text-2xl">{categoryEmoji[category] || "✦"}</span>
        <div className="flex-1">
          <h2 className="font-display text-3xl font-bold text-espresso dark:text-cream md:text-4xl">
            {category}
          </h2>
          <div className="mt-2 h-px w-24 bg-amber/30" />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <Card
            key={item.name}
            variant="interactive"
            image={item.image}
            imageAlt={item.name}
            label={item.badge}
            asArticle
            className="flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold tracking-tight text-espresso dark:text-[#F5EDE0]">
                {item.name}
              </h3>
              <span className="shrink-0 whitespace-nowrap font-sans font-bold text-amber">
                &pound;{item.price.toFixed(2)}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
