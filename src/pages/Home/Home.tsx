// import types
import { WritingPiece } from "@typings/writing";

// import libraries
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

// import other
import { AppFavorites } from "@components/elements";
import { AppLayout } from "@components/layouts";
import { Image } from "./(Image)/Image";
import { Excerpt } from "./(Excerpt)/Excerpt";
import { Feed } from "./(Feed)/Feed";
import { LOCAL_WRITINGS, LOCAL_FAVORITES } from "@constants/local";

// import styled components
import * as Styled from "./Home.styled";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  const [activePost, setActivePost] = useState<WritingPiece>(null);

  return (
    <AppLayout>
      <div onMouseLeave={() => setActivePost(null)}>
        <Feed writings={LOCAL_WRITINGS} onPostEnter={(post) => setActivePost(post)} />

        <Styled.Fixed>
          <Styled.Aside>
            <AnimatePresence mode="wait">
              <Image src={activePost?.image.url} />
            </AnimatePresence>

            <AppFavorites size="small" favorites={LOCAL_FAVORITES} onLinkEnter={(post) => setActivePost(post)} />
          </Styled.Aside>

          <Styled.Aside>
            <AnimatePresence mode="wait">
              <Excerpt content={activePost?.excerpt} />
            </AnimatePresence>
          </Styled.Aside>
        </Styled.Fixed>
      </div>
    </AppLayout>
  );
}
