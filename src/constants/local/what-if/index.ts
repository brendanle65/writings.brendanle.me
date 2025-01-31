// import types
import { WritingPiece, WritingTheme, WritingType } from "@typings/writing";

// import other
import { notes } from "./what-if.notes";
import { body } from "./what-if.body";

export const writing: WritingPiece = {
  title: "What If?",
  type: WritingType.SENTIMENTAL,
  theme: WritingTheme.MORTALITY,
  author: "Brendan Le",
  readTime: 3,
  body: body,
  notes: notes,
  slug: "what-if",
  date: "October 31, 2024",
  description: "A poem about taking the road not taken.",
  image: {
    url: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Painting of two girls and a dog in a forest.",
    caption: "Springtime, 1904. By Philip Wilson Steer. (Birmingham Museums Trust / Unsplash)",
  },
  fonts: {
    title: {
      family: "eb_garamond",
      weight: 400,
      style: "normal",
      size: "1em",
      height: "1.3em",
    },
    body: {
      family: "eb_garamond",
      weight: 400,
      style: "normal",
      size: "1em",
      height: "1.3em",
    },
  },
  excerpt: "todo",
};
