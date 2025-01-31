// import types
import { WritingPiece, WritingTheme, WritingType } from "@typings/writing";

// import other
import { notes } from "./bluey.notes";
import { body } from "./bluey.body";

export const writing: WritingPiece = {
  title: "Bluey",
  type: WritingType.SENTIMENTAL,
  theme: WritingTheme.SOLITUDE,
  author: "Brendan Le",
  readTime: 4,
  body: body,
  notes: notes,
  slug: "bluey",
  date: "October 7, 2024",
  description: "A poem about how the smallest things in life can make us feel a little less alone.",
  image: {
    url: "https://images.unsplash.com/photo-1694727329839-5cc66ced669d?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Painting of a little girl playing with a pony toy.",
    caption: "Childhood, 1850-1900. By Hermann Sondermann. (Birmingham Museums Trust / Unsplash)",
  },
  fonts: {
    title: {
      family: "lora",
      weight: 400,
      style: "italic",
      size: "1em",
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
  excerpt: "todo",
};
