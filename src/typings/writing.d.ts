import { DefaultTheme } from "styled-components";

// Define a type alias for plain strings representing rich text in markdown format
type RichTextMarkdown = string;

export type WritingType = {
  // Unique identifier
  id: string;

  // Name of font-families
  fonts: {
    // To use to display title
    title: keyof DefaultTheme["fonts"];

    // To use to display body
    body: keyof DefaultTheme["fonts"];
  };

  // Title of the piece of writing
  title: string;

  // Estimated read time in minutes (integer)
  readTime: number;

  // Type of the writing (e.g., poetry)
  type: string;

  // Theme or category of the writing (e.g., romance, lifestyle)
  theme: string;

  // Author's name
  author: string;

  // SEO description, used for search engine optimization
  seoDescription: string;

  // A brief description or summary of the writing
  description: string;

  // Body of the writing, represented as markdown content
  body: RichTextMarkdown;

  // Date when the writing was published
  date: string;

  // Url slug to the writings
  slug: string;

  image: {
    // URL of the image relative to API
    url: string;

    // Caption of the image
    caption: string;

    // Alt text for the image (for accessibility)
    alt: string;
  };

  // Featured excerpt of the writing to preview
  excerpt: string;

  annotations: {
    // The number this annotation belongs to
    index: number;

    // Content of the annotation, represented as markdown text
    content: RichTextMarkdown;
  }[];
};
