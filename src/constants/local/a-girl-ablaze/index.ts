// import types
import { WritingPiece, WritingTheme, WritingType } from "@typings/writing";

// import other
import { body } from "./a-girl-ablaze.body";

export const writing: WritingPiece = {
  title: "A Girl, Ablaze",
  type: WritingType.SENTIMENTAL,
  theme: WritingTheme.ROMANCE,
  author: "Brendan Le",
  readTime: 10,
  body: body,
  slug: "a-girl-ablaze",
  date: "January 27, 2025",
  description: "A poem of setting a lady on fire.",
  image: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/RokebyVenus.jpg/1280px-RokebyVenus.jpg",
    alt: "The famous Rockby Venus painting.",
    caption: "Rockby Venus, 1647-1651. By Diego Velázquez. (Google Art Project / Wikimedia)",
  },
  fonts: {
    title: {
      family: "im_fell_english_sc",
      weight: 400,
      style: "normal",
      size: "1.05em",
      height: "1.5em",
    },
    body: {
      family: "im_fell_english",
      weight: 400,
      style: "normal",
      size: "0.95em",
      height: "1.5em",
    },
  },
  excerpt: "todo",
};
