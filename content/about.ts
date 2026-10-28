import type { StaticImageData } from "next/image";
import clayBowl from "@/app/images/about/clay-bowl.jpg";
import clayCups from "@/app/images/about/clay-cups.jpg";
import knittingBeanie from "@/app/images/about/knitting-beanie.jpg";
import knittingSweater from "@/app/images/about/knitting-sweater.jpg";
import me from "@/app/images/about/me.jpg";
import paintingMoonrise from "@/app/images/about/painting-moonrise.jpg";
import paintingMountains from "@/app/images/about/painting-mountains.jpg";
import paintingSunsetMeadow from "@/app/images/about/painting-sunset-meadow.jpg";

export type Experience = {
  /** "Now" for current roles, otherwise a year or year range */
  period: string;
  organization: string;
  role: string;
};

export const EXPERIENCE: Experience[] = [
  {
    period: "Now",
    organization: "Microsoft | Azure Portal",
    role: "Software Engineer II",
  },
  {
    period: "Now",
    organization: "University of Washington",
    role: "MS, Human Centered Design & Engineering",
  },
  {
    period: "2023 - 2025",
    organization: "Microsoft | Azure Portal",
    role: "Software Engineer I",
  },
  {
    period: "2022",
    organization: "Microsoft | Azure Storage Client",
    role: "Software Engineer Intern",
  },
  {
    period: "2021",
    organization: "Palantir Technologies",
    role: "Software Engineer Intern",
  },
];

export type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
  /** Crop applied in the gallery grid */
  aspect: "portrait" | "landscape" | "square";
};

export type GalleryGroup = {
  label: string;
  photos: GalleryPhoto[];
};

export const ABOUT_GALLERY: GalleryGroup[] = [
  {
    label: "Me",
    photos: [{ src: me, alt: "Su Min Kim smiling by the water at dusk", aspect: "portrait" }],
  },
  {
    label: "Painting",
    photos: [
      { src: paintingMoonrise, alt: "Acrylic painting of a moon rising over still water", aspect: "square" },
      { src: paintingSunsetMeadow, alt: "Acrylic painting of a sunset over a wildflower meadow", aspect: "square" },
      { src: paintingMountains, alt: "Acrylic painting of snowy mountains above a green valley", aspect: "square" },
    ],
  },
  {
    label: "Knitting",
    photos: [
      { src: knittingSweater, alt: "Hand-knit sage green sweater", aspect: "landscape" },
      { src: knittingBeanie, alt: "Hand-knit charcoal beanie", aspect: "portrait" },
    ],
  },
  {
    label: "Clay",
    photos: [
      { src: clayCups, alt: "Three glazed ceramic cups", aspect: "landscape" },
      { src: clayBowl, alt: "Speckled glazed ceramic bowl", aspect: "portrait" },
    ],
  },
];
