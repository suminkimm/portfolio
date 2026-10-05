import type { StaticImageData } from "next/image";

import badSigns from "./app/images/badSigns.png";
import designRequirements from "./app/images/designRequirements.png";
import final_parkingsigns from "./app/images/final_parkingsigns.png";
import storyboardsketches from "./app/images/storyboardsketches.png";
import userpersona1 from "./app/images/userpersona1.png";
import userpersona2 from "./app/images/userpersona2.png";

type ImageEntry = string | StaticImageData;

type ChapterBlock =
  | { type: "image"; src: ImageEntry; alt: string }
  | { type: "text"; text: string };

type Project = {
  slug: string;
  name: string;
  type: string;
  year: string;
  accent: "pink" | "blue" | "gold" | "mint";
  summary: string;
  overview: string;
  videoUrl?: string;
  chapters: Array<{
    id: string;
    label: string;
    title: string;
    body: string[];
    images?: ImageEntry[];
    bullets?: string[];
    blocks?: ChapterBlock[];
  }>;
};

export const PROJECTS: Project[] = [
  {
    slug: "park-smart",
    name: "Park Smart",
    type: "University of Washington",
    year: "September 2025",
    accent: "blue",
    summary:
      "A user-centered parking experience that reduces confusion and speeds up compliance in Seattle’s busiest curbside zones.",
    overview:
      "Simplifying complex street parking signage for downtown Seattle drivers.",
    videoUrl: "https://www.youtube.com/watch?v=MmSieQJzxGI",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        title: "Making curbside rules legible at a glance",
        body: [
          "Park Smart was a project for a Graduate course in User Centered Design at the University of Washington, completed over 8 weeks with a team of four designers.",
          "The challenge was to make Seattle’s confusing street parking signs easier to interpret, reducing stress and preventing parking mistakes in dense downtown areas.",
        ],
      },
      {
        id: "problem",
        label: "Problem",
        title: "Drivers are overloaded by ambiguous sign systems",
        body: [
          "Downtown Seattle parking signage is crowded with stacked rules, arrows, exceptions, and time restrictions that are difficult to parse quickly.",
          "Drivers often need to read multiple layers of text before deciding whether a spot is valid, which increases cognitive load and creates hesitation in high-pressure moments.",
          "The result is more ticketing, more uncertainty, and a less reliable parking experience for residents and visitors alike.",
        ],
        images: [badSigns],
      },
      {
        id: "research",
        label: "User Research",
        title: "Complex signage created real behavioral friction",
        body: [
          "Using <strong>semi-structured interviews, direct observation, and indirect observation</strong>, we identified several recurring pain points that showed how drivers were forced to parse complex sign systems in real time.",
          "The patterns pointed to a single, repeated problem: unclear signage created delay, uncertainty, and avoidable risk at the curb.",
        ],
        bullets: [
          "<strong>Seattle’s parking signage is overly complex</strong>, forcing drivers to interpret multiple stacked rules at once, leading to high cognitive load and decision-making delays.",
          "<strong>Exception text and dense wording are frequently overlooked</strong>, causing misunderstanding of time-based and special-case restrictions.",
          "<strong>Signage confusion leads to real consequences</strong>, such as ticketing, towing, and risky or hesitant parking behavior.",
          "<strong>Lack of clear curb markings and boundaries adds confusion</strong>, making drivers unsure where parking begins or ends.",
        ],
      },
      {
        id: "personas",
        label: "Design Process",
        title: "Designing for time pressure and uncertainty",
        body: [
          "The design process focused on two very different parking contexts: a commuter who wanted quick clarity and a contractor who needed reliable, real-time information while operating in the field.",
        ],
        blocks: [
          {
            type: "text",
            text: "Across both personas, the underlying need was the same: drivers wanted fast clarity, low cognitive load, and confidence that parking decisions were correct without reading dense legal language or interpreting multiple stacked rules in real time.",
          },
          { type: "image", src: userpersona1, alt: "User persona 1" },
          { type: "image", src: userpersona2, alt: "User persona 2" },
          {
            type: "text",
            text: "These insights shaped the design direction: drivers need a parking system that reduces ambiguity, helps them understand curb rules instantly, and supports both simple daily trips and complex work-related parking situations.",
          },
          {
            type: "text",
            text: "The design requirements centered on reducing cognitive load, preserving consistency across physical and digital touchpoints, and making the valid parking state obvious at a glance without sacrificing compliance details.",
          },
          { type: "image", src: designRequirements, alt: "Design requirements" },
          {
            type: "text",
            text: "These requirements informed the storyboard sketches, which translated the parking pain points into a clearer flow: identify the valid status, understand the rule at a glance, and act with confidence before leaving the car.",
          },
          { type: "image", src: storyboardsketches, alt: "Storyboard sketches" },
        ],
      },
      {
        id: "prototype",
        label: "Solution",
        title: "Rapid iteration toward a calmer parking experience",
        body: [
          "Our final prototype explored a clearer interaction model: show the active rule status at a glance, surface changes over time, and guide the driver to the correct curb decisions with minimal reading.",
          "The final concept simplified the experience into visual, time-aware clarity rather than dense text-heavy signage.",
          "The digital parking sign dynamically displays the icon that represents the current parking regulation in effect.",
        ],
        images: [final_parkingsigns],
      },
      {
        id: "learnings",
        label: "Learnings",
        title: "Small design changes can reshape confidence at the curb",
        body: [
          "The strongest lesson was that drivers do not need more instruction; they need less ambiguity.",
          "By reducing the number of decisions a driver has to make at a glance, the system created a calmer, safer, and more compliant parking experience.",
        ],
      },
    ],
  },
  {
    slug: "northstar-os",
    name: "Northstar OS",
    type: "B2B SaaS",
    year: "2025",
    accent: "pink",
    summary:
      "A commerce operating system for design-led teams shipping faster across product, marketing, and ops.",
    overview:
      "A product operating layer built to unify strategy, execution, and reporting for commercial teams.",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        title: "Reframing the operating layer",
        body: [
          "Northstar OS was designed to replace fragmented planning tools with a single, calmer workspace for cross-functional teams.",
          "The goal was to make decision-making feel visible and actionable without overwhelming the people using it every day.",
        ],
      },
      {
        id: "system",
        label: "System",
        title: "A clear system for high-velocity teams",
        body: [
          "I built a modular set of patterns that supported reporting, planning, and analysis while keeping the product legible at a glance.",
          "The system introduced calmer hierarchy, stronger status cues, and repeatable interactions that helped surface what mattered most.",
        ],
      },
      {
        id: "impact",
        label: "Impact",
        title: "Faster alignment across teams",
        body: [
          "The team shaved hours from weekly planning rituals and reduced ambiguity in campaign and launch handoff reviews.",
          "What changed most was confidence: leaders could read the operating picture quickly, and contributors could move faster without losing context.",
        ],
      },
    ],
  },
  {
    slug: "signal-house",
    name: "Signal House",
    type: "Media platform",
    year: "2024",
    accent: "blue",
    summary:
      "A storytelling product that turned research into a living editorial system with stronger team velocity.",
    overview:
      "A narrative engine for publishing teams who needed research to become an observable editorial practice.",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        title: "Turning insight into an editorial rhythm",
        body: [
          "Signal House helped teams organize research and storytelling in one place so ideas could move from discovery into publishing more quickly.",
          "The experience focused on flow: less friction between collection, synthesis, and publishing.",
        ],
      },
      {
        id: "system",
        label: "System",
        title: "Flexible structure without visual chaos",
        body: [
          "I introduced a clear content model and a lighter editorial interface that allowed authors and editors to work at the same pace.",
          "The design balanced flexibility with structure, which helped teams maintain their voice without creating operational drift.",
        ],
      },
      {
        id: "impact",
        label: "Impact",
        title: "A more reliable publishing cadence",
        body: [
          "The platform improved editorial velocity and gave cross-functional teams a better shared view of what was in motion.",
          "It became easier to identify gaps, reuse stories, and make insight feel actionable instead of archival.",
        ],
      },
    ],
  },
  {
    slug: "arc-studio",
    name: "Arc Studio",
    type: "Portfolio system",
    year: "2023",
    accent: "gold",
    summary:
      "A modular case study engine for creative studios that wanted more narrative depth without design debt.",
    overview:
      "A portfolio system designed to keep case studies expressive without slowing down the studio team.",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        title: "Designing for narrative consistency",
        body: [
          "Arc Studio was built to give creative teams a repeatable story structure without reducing each project to a template.",
          "The system made it easier to present process, decisions, and outcomes in a way that still felt editorial and human.",
        ],
      },
      {
        id: "system",
        label: "System",
        title: "Reusable templates, tailored stories",
        body: [
          "We created modular building blocks that could flex across a wide range of project types while keeping the presentation cohesive.",
          "This made case studies easier to produce while preserving the craft of each individual engagement.",
        ],
      },
      {
        id: "impact",
        label: "Impact",
        title: "More consistency, less effort",
        body: [
          "Studio teams could publish faster and keep their portfolio feeling current without reinventing the system for each project.",
          "The result was a stronger narrative identity and a lower operational burden for the team.",
        ],
      },
    ],
  },
  {
    slug: "bloom-ledger",
    name: "Bloom Ledger",
    type: "Fintech dashboard",
    year: "2025",
    accent: "mint",
    summary:
      "A clear financial workspace designed to help teams track strategy, risk, and runway in one glance.",
    overview:
      "A strategy and finance dashboard built to make uncertainty feel readable without reducing confidence.",
    chapters: [
      {
        id: "overview",
        label: "Overview",
        title: "Clarifying financial reality",
        body: [
          "Bloom Ledger was designed to help teams understand burn, runway, and strategic trade-offs without digging through fragmented reports.",
          "The key challenge was to make the interface feel calm, not clinical, while still preserving trust in the numbers.",
        ],
      },
      {
        id: "system",
        label: "System",
        title: "Signals that guide faster decisions",
        body: [
          "I distilled the product into a few strong patterns: decisive metrics, layered context, and intentional trend signals.",
          "This helped teams identify risk early and move with more clarity when the business environment shifted.",
        ],
      },
      {
        id: "impact",
        label: "Impact",
        title: "A sharper operating picture",
        body: [
          "The dashboard reduced the time it took leadership to find the health of the business and made trade-offs easier to explain.",
          "It brought strategy and financial reality into a shared frame, which improved confidence across the company.",
        ],
      },
    ],
  },
];

export const TOOLS = [
  "React",
  "TypeScript",
  "Accessibility",
  "Figma",
  "Prototyping",
  "User Research",
] as const;

export const LIQUID_BACKDROP = [
  {
    id: "blob-1",
    color: "rgba(255, 126, 82, 0.75)",
    x: "16%",
    y: "22%",
    size: "38vw",
    duration: "18s",
    delay: "0s",
  },
  {
    id: "blob-2",
    color: "rgba(124, 204, 255, 0.72)",
    x: "48%",
    y: "30%",
    size: "36vw",
    duration: "22s",
    delay: "-7s",
  },
  {
    id: "blob-3",
    color: "rgba(255, 108, 160, 0.58)",
    x: "70%",
    y: "52%",
    size: "28vw",
    duration: "20s",
    delay: "-3s",
  },
  {
    id: "blob-4",
    color: "rgba(118, 233, 202, 0.52)",
    x: "34%",
    y: "72%",
    size: "32vw",
    duration: "24s",
    delay: "-10s",
  },
] as const;
