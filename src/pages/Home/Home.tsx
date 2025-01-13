// import libraries
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// import other
import { AppFavorites } from "@components/elements";
import { AppLayout } from "@components/layouts";
import { Image } from "./(Image)/Image";
import { Excerpt } from "./(Excerpt)/Excerpt";
import { Feed } from "./(Feed)/Feed";
import { DUMMY_FAVORITES, DUMMY_WRITINGS } from "@constants/dummy";
import { WritingType } from "@typings/writing";

// import styled components
import * as Styled from "./Home.styled";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  const [isAsidesOpen, setIsAsidesOpen] = useState(false);
  const [activePost, setActivePost] = useState<WritingType>(null);

  const open = () => setIsAsidesOpen(true);
  const close = () => setIsAsidesOpen(false);

  return (
    <>
      <AppLayout>
        <Feed
          writings={DUMMY_WRITINGS}
          onPostEnter={(post) => {
            open();
            setActivePost(post);
            // open aside if hovering over post
          }}
          onPostLeave={close}
          // close aside if not hovering over post
        />
      </AppLayout>

      <Styled.Fixed
        onMouseEnter={open}
        onMouseLeave={close}
        // keep asides open if hovering over image or featured excerpt (overrides onPostLeave)
      >
        <Styled.Aside>
          <AnimatePresence mode="wait">{isAsidesOpen && <Image src={activePost.image.url} />}</AnimatePresence>

          <div
            onMouseEnter={close}
            // close aside if hovering over favorites
          >
            <AppFavorites size="small" favorites={DUMMY_FAVORITES} />
          </div>
        </Styled.Aside>

        <Styled.Aside>
          <AnimatePresence mode="wait">{isAsidesOpen && <Excerpt content={activePost.excerpt} />}</AnimatePresence>
        </Styled.Aside>
      </Styled.Fixed>
    </>
  );
}
