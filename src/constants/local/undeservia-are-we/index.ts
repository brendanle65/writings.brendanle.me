// import types
import { WritingPiece, WritingTheme, WritingType } from "@typings/writing";

// import other
import { notes } from "./undeservia.notes";
import { body } from "./undeservia.body";

export const writing: WritingPiece = {
  title: "Undeservia, We",
  type: WritingType.DIDATIC,
  theme: WritingTheme.ROMANCE,
  author: "Brendan Le",
  readTime: 3,
  body: body,
  notes: notes,
  slug: "undeservia-are-we",
  date: "October 7, 2024",
  description: "A poem for those who feel unworthy of love.",
  image: {
    url: "https://images.unsplash.com/photo-1583502070936-d24abe7f1975?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Painting of a beautiful array of flowers.",
    caption:
      "Taken from page 71 of 'Love-Knots and Bridal-Bands: poems and rhymes of wooing and wedding, and valentine verses. (British Library / Unsplash)",
  },
  fonts: {
    title: {
      family: "eb_garamond",
      size: "1em",
      weight: 400,
      style: "normal",
      height: "1.3em",
    },
    body: {
      family: "eb_garamond",
      weight: 400,
      size: "1em",
      style: "normal",
      height: "1.3em",
    },
  },
  excerpt: "todo",
};
