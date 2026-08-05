"use client";

import { Mail, type LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.5V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const links: {
  title: string;
  icon: LucideIcon | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element);
  href: string;
}[] = [
  {
    title: "Gmail",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=iipekatessku@gmail.com",
  },
  { title: "GitHub", icon: GithubIcon, href: "https://github.com/benipekim" },
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/ipek-ateş-335535285/",
  },
  {
    title: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/iipekatess?igsh=MXR6cTR1dnowZW9tOQ%3D%3D&utm_source=qr",
  },
];

export function SiteDock() {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm">
      {links.map(({ title, icon: Icon, href }) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          className="flex items-center justify-center rounded-xl p-2 text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
