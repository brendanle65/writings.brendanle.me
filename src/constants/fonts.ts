// import libraries
import localFont from "next/font/local";
import { EB_Garamond, Cormorant_Garamond, Lora, IM_Fell_English, IM_Fell_English_SC } from "next/font/google"; // Import Fonts (Optimized By NextJS)

// Fonts must be called in a const module scope
export const mazius_display = localFont({
  // Font files can be colocated inside of `pages`
  src: "../../public/fonts/mazius/MaziusDisplay-Extraitalic.woff2",
  variable: "--font-mazius-display",
});

export const im_fell_english_sc = IM_Fell_English_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-im-fell-english-sc",
  weight: ["400"],
});

export const im_fell_english = IM_Fell_English({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-im-fell-english",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});
