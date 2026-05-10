import { MenuCategory } from "@/app/components/menu-category";
import { menuItems, categories } from "@/app/data/menu-items";

export default function Menu() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-espresso py-28 md:py-36">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber/5 blur-3xl" />

        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber">
            Our Offerings
          </span>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            Menu
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-amber/40" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-300">
            Every drink and bite is made from scratch with carefully sourced
            ingredients. This is comfort food and exceptional coffee, your way.
          </p>
        </div>
      </section>

      {/* Menu items by category */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
        {categories.map((category) => (
          <MenuCategory
            key={category}
            category={category}
            items={menuItems.filter((item) => item.category === category)}
          />
        ))}
      </div>
    </>
  );
}
