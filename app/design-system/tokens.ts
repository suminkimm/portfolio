/**
 * Documentation for the design system page. Values are not duplicated here: every specimen is rendered
 * with the real utility class or CSS variable from app/globals.css, and colors are read back from the DOM.
 */

export type ColorToken = {
  name: string;
  /** Utility class that paints the swatch */
  className: string;
  usage: string;
};

export type ColorGroup = {
  title: string;
  colors: ColorToken[];
};

export const COLOR_GROUPS: ColorGroup[] = [
  {
    title: "Surfaces",
    colors: [
      { name: "cream", className: "bg-cream", usage: "Page background" },
      { name: "white", className: "bg-white", usage: "Project tags, image mats" },
      { name: "fill", className: "bg-fill", usage: "Placeholders behind loading images" },
    ],
  },
  {
    title: "Ink",
    colors: [
      { name: "ink", className: "bg-ink", usage: "Headings and body text" },
      { name: "ink-muted", className: "bg-ink-muted", usage: "Captions, labels, inactive navigation" },
      { name: "ink-faint", className: "bg-ink-faint", usage: "Footer credit, social icons, separators" },
      { name: "line", className: "bg-line", usage: "Dividers and borders" },
    ],
  },
  {
    title: "Accent",
    colors: [
      { name: "accent", className: "bg-accent", usage: "Hover, active navigation, focus ring, cursor" },
    ],
  },
];

export type TypeToken = {
  name: string;
  /** Classes applied to the specimen */
  className: string;
  sample: string;
  usage: string;
  spec: string;
};

export const TYPE_SCALE: TypeToken[] = [
  {
    name: "text-display",
    className: "text-display font-medium",
    sample: "Su Min Kim",
    usage: "Hero name, case study titles",
    spec: "36–52px · 1.15 · −0.02em",
  },
  {
    name: "text-heading",
    className: "text-heading",
    sample: "Surface the right signals",
    usage: "Chapter titles, footer name, sidebar title",
    spec: "24–28px · 1.25 · −0.015em",
  },
  {
    name: "text-lede",
    className: "text-lede",
    sample: "Simplifying complex street parking signage.",
    usage: "Hero subtitle, case study summary",
    spec: "17–20px · 1.5",
  },
  {
    name: "text-body",
    className: "text-body",
    sample: "Drivers are expected to read stacked signage and decide quickly.",
    usage: "Paragraphs, navigation, captions, tags",
    spec: "16px · 1.6",
  },
  {
    name: "text-small",
    className: "text-small text-ink-muted",
    sample: "Coded in React · Design system",
    usage: "Table of contents, figure captions, footer credit",
    spec: "14px · 1.5",
  },
  {
    name: "eyebrow",
    className: "eyebrow text-ink-muted",
    sample: "Engineering complexity",
    usage: "Chapter labels, kickers, fact labels",
    spec: "12px · uppercase · 0.12em",
  },
];

export const FONT_WEIGHTS = [
  { weight: 400, className: "font-normal", usage: "Everything by default" },
  { weight: 500, className: "font-medium", usage: "Names, titles, tags, active states" },
];

export type ScaleToken = {
  name: string;
  value: string;
  /** Preview bar width as a fraction of the row */
  fraction: number;
  usage: string;
};

export const SPACING: ScaleToken[] = [
  { name: "1", value: "4px", fraction: 4 / 64, usage: "Label to value" },
  { name: "2", value: "8px", fraction: 8 / 64, usage: "Related lines" },
  { name: "3", value: "12px", fraction: 12 / 64, usage: "Card image to caption" },
  { name: "4", value: "16px", fraction: 16 / 64, usage: "Paragraphs, list items" },
  { name: "6", value: "24px", fraction: 24 / 64, usage: "Grid columns, chapter padding" },
  { name: "8", value: "32px", fraction: 32 / 64, usage: "Footer columns, image groups" },
  { name: "12", value: "48px", fraction: 48 / 64, usage: "Page top margin, two-up columns" },
  { name: "16", value: "64px", fraction: 1, usage: "Sidebar to article" },
];

export const WIDTHS: ScaleToken[] = [
  { name: "max-w-column", value: "26rem", fraction: 26 / 75, usage: "About bio and experience" },
  { name: "max-w-content", value: "48rem", fraction: 48 / 75, usage: "Hero, case study article, gallery" },
  { name: "max-w-page", value: "75rem", fraction: 1, usage: "Case study page and footer" },
];

export const RADII = [
  { name: "rounded-card", value: "26px", className: "rounded-card", usage: "Project cards" },
  { name: "rounded-full", value: "pill", className: "rounded-full", usage: "Project tag, nav dot" },
  { name: "rounded-none", value: "0", className: "rounded-none", usage: "Photos, case study images" },
];

export const SHADOWS = [
  { name: "shadow-media", className: "shadow-media", usage: "Case study images and video" },
  { name: "shadow-glow", className: "shadow-glow", usage: "Custom cursor" },
];

export const DURATIONS: ScaleToken[] = [
  { name: "--duration-fast", value: "150ms", fraction: 150 / 700, usage: "Hover color, cursor" },
  { name: "--duration-base", value: "300ms", fraction: 300 / 700, usage: "Card hover, page enter, clock" },
  { name: "--duration-slow", value: "700ms", fraction: 1, usage: "Hero intro, scroll reveal" },
];
