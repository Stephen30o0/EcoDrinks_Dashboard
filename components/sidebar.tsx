"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Leaf, BarChart3, MapPin, Users, Droplets, Brain, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const routes = [
  {
    label: "Overview",
    icon: Leaf,
    href: "/",
  },
  {
    label: "Market Research",
    icon: BarChart3,
    href: "/market-research",
  },
  {
    label: "Consumer Behavior",
    icon: Users,
    href: "/consumer-behavior",
  },
  {
    label: "Advertising",
    icon: Brain,
    href: "/advertising",
  },
  {
    label: "Regional Metrics",
    icon: MapPin,
    href: "/regional-metrics",
  },
  {
    label: "Sustainability",
    icon: Droplets,
    href: "/sustainability",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-4 py-4 flex flex-col h-full">
          <div className="px-6 py-2">
            <h2 className="text-2xl font-bold text-primary">EcoDrinks</h2>
          </div>
          <ScrollArea className="flex-1 px-3">
            <div className="space-y-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === route.href && "bg-primary/10"
                  )}
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}