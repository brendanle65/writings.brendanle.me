// import other
import { WritingType } from "@typings/writing";

// Temporary: will write code to fetch data from backend at build time
export const DUMMY_ABOUT: WritingType = {
  id: "0",
  title: "About The Writer",
  fonts: {
    title: "eb_garamond",
    body: "eb_garamond",
  },
  image: {
    url: "https://images.unsplash.com/photo-1719338204243-1e5561635bf4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
    caption: "",
  },
  slug: "/",
  excerpt: `
    Why didn't you tell me? <br/>
    Before the mast broke.
  `,
  description: "It Was The Best of Times and The Worst of Times...sdsadsdsdds",
} as WritingType;

// Temporary: will write code to fetch data from backend at build time
export const DUMMY_WRITINGS: WritingType[] = [
  {
    id: "1",
    title: "Blacklance Paragon",
    date: "November 27, 2024",
    fonts: {
      title: "mazius",
      body: "mazius",
    },
    image: {
      url: "https://images.unsplash.com/photo-1719338204243-1e5561635bf4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
      caption: "",
    },
    slug: "/",
    excerpt: `
      Why didn't you tell me? <br/>
      Before the mast broke.
    `,
    description: "It Was The Best of Times and The Worst of Times...sdsadsdsdds",
  },
  {
    id: "2",
    title: "LO$T & F☺UND →",
    date: "November 27, 2024",
    fonts: {
      title: "absans",
      body: "absans",
    },
    image: {
      url: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
      caption: "",
    },
    slug: "/",
    excerpt: `
      Testing
    `,
    description: "It Was The Best of Times.",
  },
  {
    id: "3",
    title: "Dérieux",
    date: "October 14, 2024",
    fonts: {
      title: "coconat",
      body: "coconat",
    },
    image: {
      url: "https://images.unsplash.com/photo-1583502070936-d24abe7f1975?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
      caption: "",
    },
    slug: "/",
    excerpt: `
      Testing
    `,
    description: "It Was The Best of Times and The Worst of Times.",
  },
  {
    id: "4",
    title: "Error 7x895%$",
    date: "October 14, 2024",
    fonts: {
      title: "noto_sans_mono",
      body: "noto_sans_mono",
    },
    image: {
      url: "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
      caption: "",
    },
    slug: "/",
    excerpt: `
      Testing
    `,
    description: "It Was The Best of Times and The Worst of Times...sdsadsdsdds",
  },
] as WritingType[];

// Temporary: will write code to fetch data from backend at build time
export const DUMMY_FAVORITES: WritingType[] = DUMMY_WRITINGS.filter(({ id }) => ["1", "2", "3", "4"].includes(id));
