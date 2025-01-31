// import types
import { WritingPiece, WritingTheme, WritingType } from "@typings/writing";

// import other
import { notes } from "./grief.notes";
import { body } from "./grief.body";

export const writing: WritingPiece = {
  title: "Grief",
  type: WritingType.SENTIMENTAL,
  theme: WritingTheme.MORTALITY,
  author: "Brendan Le",
  readTime: 8,
  body: body,
  notes: notes,
  slug: "grief",
  date: "October 31, 2024",
  description: "A poem about overcoming grief and how, despite it all, life goes on.",
  image: {
    url: "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Painting of an angel in a blue dress carrying babies.",
    caption: "Night with her Train of Stars, 1912. By Edward Robert Hughes. (Birmingham Museums Trust / Unsplash)",
  },
  fonts: {
    title: {
      family: "lora", // todo: create a mapping
      weight: 400,
      size: "1em",
      style: "normal",
      height: "1.5em",
    },
    body: {
      family: "lora",
      weight: 400,
      style: "normal",
      size: "0.86em",
      height: "1.5em",
    },
  },
  excerpt: `
      Why didn't you tell me?
      Before the mast broke.
      Before the water rushed in.
      Before you capsized.
      
      I could have towed you along.
      Don't worry about the load.
      Big cargo ships
      need tugboats all the time.

      But with you gone,
      now, you tug at me.
    `,
};
