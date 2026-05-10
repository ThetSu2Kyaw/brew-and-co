"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/docs/design/components/header";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export function NavHeader() {
  const pathname = usePathname();

  const items = navItems.map((item) => ({
    ...item,
    active: pathname === item.href,
  }));

  return <Header title="Brew and Go" navItems={items} />;
}
