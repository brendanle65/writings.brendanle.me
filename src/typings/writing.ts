// import types
import { ComponentType, ReactNode } from "react";

// import libraries
import { DefaultTheme } from "styled-components";

export enum WritingType {
  DIDATIC = "Didactic",
  SENTIMENTAL = "Sentimental",
  COMMENTARIAL = "Commentarial",
  NARRATIVE = "Narrative",
  OTHER = "Other",
}

export enum WritingTheme {
  INFORMATIONAL = "Informational",
  ROMANCE = "Romance",
  MORTALITY = "Mortality",
  SOLITUDE = "Solitude",
}

export interface WritingNote {
  // The index of the notetag this corresponds to.
  id: number;

  // The content of the note.
  children: ReactNode | string;
}

export type WritingPiece = {
  // Url slug to the writings
  slug: string;

  // Title of the piece of writing
  title: string;

  // Estimated read time in minutes (integer)
  readTime: number;

  // Type of the writing (e.g., didactic, sentimental)
  type: WritingType;

  // Theme or category of the writing (e.g., romance, lifestyle)
  theme: WritingTheme;

  // Author's name
  author: string;

  // A brief description or summary of the writing
  description: string;

  // Body of the writing, represented as markdown content
  body: ComponentType<any>;

  // Date when the writing was published
  date: string;

  // Featured excerpt of the writing to preview
  excerpt: string;

  image: {
    // URL of the image relative to API
    url: string;

    // Caption of the image
    caption: string;

    // Alt text for the image (for accessibility)
    alt: string;
  };

  notes?: WritingNote[];

  // Font styles
  fonts: {
    // To use to display title
    title: FontStyle;

    // To use to display body
    body: FontStyle;
  };
};

export interface FontStyle {
  // name of font-family
  family: keyof DefaultTheme["fonts"];

  // font-size: relative size of font to container
  size: `${string}em`;

  // font-weight
  weight: number;

  // font-style
  style: "normal" | "italic";

  // line-height: relative size of line height to container
  height: `${string}em`;
}
