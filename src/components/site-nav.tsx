"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Share2, Heart, Trophy } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const tabs = [
  { title: "Home", icon: Home },
  { type: "separator" as const },
  { title: "Career", icon: Trophy },
  { title: "Hobbies", icon: Heart },
  { title: "Social Media", icon: Share2 },
];

const SECTION_BY_INDEX: Record<number, string> = {
  2: "social-media",
  3: "hobbies",
  4: "success",
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
    <nav className="fixed inset-x-0 top-6 z-50 flex items-center px-6">
      <Link
        href="/"
        className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-background"
      >
        <Image
          src="/profile.png"
          alt="İpek Ateş"
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </Link>
      <div className="flex flex-1 justify-center">
        <ExpandableTabs tabs={tabs} onChange={handleChange} />
      </div>
      <div className="w-10 shrink-0" />
    </nav>
  );
}
