import Image, { type ImageProps } from "next/image";

const FULL_WIDTH_SIZES = "(max-width: 760px) 100vw, 760px";

type ProjectImageProps = Omit<ImageProps, "className"> & {
  className?: string;
};

/** Bordered case-study image, sized for the article column by default. */
export default function ProjectImage({ className, sizes = FULL_WIDTH_SIZES, alt, ...props }: ProjectImageProps) {
  return <Image {...props} alt={alt} sizes={sizes} className={`chapter-image ${className ?? ""}`.trim()} />;
}
