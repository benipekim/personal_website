"use client";

import { Home, Share2, Heart, Trophy } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const tabs = [
  { title: "Home", icon: Home },
  { type: "separator" as const },
  { title: "Career", icon: Trophy },
  { title: "Hobbies", icon: Heart },
  { title: "Connect & Beyond", icon: Share2 },
];

const SECTION_BY_INDEX: Record<number, string> = {
  2: "career",
  3: "hobbies",
  4: "social-media",
};

export function SiteNav() {
  const handleChange = (index: number | null) => {
    if (index === null) return;
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sectionId = SECTION_BY_INDEX[index];
    if (sectionId) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-6 z-50 flex items-center justify-center px-6">
      <ExpandableTabs tabs={tabs} onChange={handleChange} />
    </nav>
  );
}
