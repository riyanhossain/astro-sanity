import type { SanityDocument } from "@sanity/client";
import { urlFor } from "@/lib/sanity";

/**
 * Format a date from a Sanity document
 * @param date ISO date string or Date object
 * @param options Intl.DateTimeFormatOptions for formatting
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", options);
}

/**
 * Create a properly formatted image URL with responsive sizing
 * @param image Sanity image object
 * @param width Desired width
 * @param height Optional height
 * @returns Formatted image URL
 */
export function getImageUrl(
  image: any,
  width: number,
  height?: number
): string | null {
  if (!image || !image.asset) return null;

  const imageBuilder = urlFor(image).width(width);
  if (height) imageBuilder.height(height);

  return imageBuilder.url();
}

/**
 * Extract plain text from a Portable Text block
 * Useful for meta descriptions, excerpts, etc.
 * @param blocks Portable Text blocks
 * @param length Maximum length of the extracted text
 * @returns Plain text string
 */
export function extractTextFromBlocks(
  blocks: any[] = [],
  length = 160
): string {
  if (!blocks || !Array.isArray(blocks)) return "";

  // Extract text from all blocks
  const text = blocks
    .filter((block) => block._type === "block")
    .map((block) => {
      if (!block.children) return "";
      return block.children
        .filter((child: any) => child._type === "span")
        .map((span: any) => span.text)
        .join("");
    })
    .join(" ");

  // Truncate to desired length
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

/**
 * Generate SEO metadata for pages
 * @param document Sanity document with SEO fields
 * @returns Object with title, description and image for SEO
 */
export function getSeoData(document: SanityDocument): {
  title: string;
  description: string;
  image?: string;
} {
  return {
    title: document.seoTitle || document.title || "",
    description:
      document.seoDescription ||
      (document.excerpt
        ? typeof document.excerpt === "string"
          ? document.excerpt
          : extractTextFromBlocks(document.excerpt)
        : ""),
    // image: document.ogImage ? getImageUrl(document.ogImage, 1200, 630) : undefined,
  };
}

/**
 * Map Sanity section data to the format needed by components
 * @param section Sanity section data
 * @returns Formatted section data
 */
export function mapSectionData(section: any): any {
  if (!section) return null;

  switch (section._type) {
    case "heroSection":
      return {
        type: "hero",
        image: section.image ? getImageUrl(section.image, 1920) : null,
      };
    case "textSection":
      return {
        type: "text",
        title: section.title,
        subTitle: section.subTitle,
        content: section.content,
        button: section.button?.[0]
          ? {
              label: section.button[0].label,
              url: section.button[0].url,
              isExternal: section.button[0].isExternal,
            }
          : null,
      };
    default:
      return null;
  }
}
