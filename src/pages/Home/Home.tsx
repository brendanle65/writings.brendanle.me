// import other
import { AppHeader } from "@components/elements";

// import other
import { DUMMY_FAVORITES } from "@constants/dummy";

// import styled components
import * as Styled from "./Home.styled";

/**
 * The home page.
 *
 * @returns {React.ReactElement} A index page.
 * @page
 */
export function Home() {
  return (
    <>
      <AppHeader />

      {/** got ahead of myself - ignore this chicken scratch */}

      <Styled.Container>
        <div>
          <Styled.Latest>Latest:</Styled.Latest>

          {DUMMY_FAVORITES.map(({ text, font }, idx) => (
            <Styled.Post $font={font} key={idx}>
              <Styled.Title>{text}</Styled.Title>
              <Styled.Blurb>It Was The Best of Times and The Wo...</Styled.Blurb>
            </Styled.Post>
          ))}
        </div>

        <Styled.Legal>
          <div>© 2024 Brendan's Writings</div>
          <div>Designed in Figma and coded in VS Code, and by yours truly.</div>
        </Styled.Legal>
      </Styled.Container>

      <Styled.Favorites size="small" favorites={DUMMY_FAVORITES} />

      <Styled.Socials size="small" />
    </>
  );
}
