// import types
import { WritingPiece, WritingTheme, WritingType } from "@typings/writing";

// import other
import { notes } from "./about-the-writer.notes";
import { body } from "./about-the-writer.body";

export const writing: WritingPiece = {
  title: "About The Writer",
  type: WritingType.OTHER,
  theme: WritingTheme.INFORMATIONAL,
  author: "Brendan Le",
  readTime: 4,
  body: body,
  notes: notes,
  slug: "about-the-writer",
  date: "January 28, 2024",
  description: "Get to know the author.",
  image: {
    url: "https://images.unsplash.com/photo-1733259295637-c8d6e4a9777e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Painting of a little girl playing with a pony toy.",
    caption: "Boy In Boat, 1880–1881. By Winslow Homer. (Art Institute of Chicago / Unsplash)",
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
