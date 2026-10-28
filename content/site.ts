export const SITE = {
  name: "Su Min Kim",
  title: "Su Min Kim | Frontend Engineer",
  description:
    "Portfolio for Su Min Kim, a frontend engineer blending design systems thinking with polished product craft.",
  email: "kims622@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/su-min-kim/",
  location: "Seattle, WA",
  timeZone: "America/Los_Angeles",
} as const;

export const NAV_ITEMS = [
  { id: "work", label: "Work", href: "/" },
  { id: "about", label: "About", href: "/about" },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];

// Pages with their own sidebar (back link + table of contents) hide the site navigation
const SELF_NAVIGATED_PREFIXES = ["/work/", "/design-system"];

export const hasOwnSidebar = (pathname: string) =>
  SELF_NAVIGATED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
