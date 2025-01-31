// import other
import { AppLayout } from "@components/layouts";
import { Hoverable } from "@components/other";
import { Notes } from "@components/elements";
import { HomeLink } from "./(HomeLink)/HomeLink";
import { NotesButton } from "./(NotesButton)/NotesButton";
import { LOCAL_WRITINGS } from "@constants/local";
import { toDateString } from "@utils/toDateString";

// import styled components
import * as Styled from "./Writing.styled";

interface WritingProps {
  slug: string;
}

/**
 * A writing page, renders (a blog post).
 *
 * @returns {React.ReactElement} A writing page.
 * @page
 */
export function Writing(props: WritingProps) {
  const { body: Body, ...data } = LOCAL_WRITINGS.find((writing) => writing.slug === props.slug);

  return (
    <>
      <AppLayout>
        <Styled.Article>
          <Styled.HomeLinkAside>
            <HomeLink />
          </Styled.HomeLinkAside>
          <Styled.Tags>
            <Hoverable as={Styled.Type} href="/">
              {data.type}
            </Hoverable>
            <Hoverable as={Styled.Theme} href="/">
              {data.theme}
            </Hoverable>
          </Styled.Tags>
          <Styled.TitleWrapper>
            <Styled.Title $font={data.fonts.title}>{data.title}</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.DescriptionWrapper>
            <Styled.Description $font={data.fonts.body}>{data.description}</Styled.Description>
          </Styled.DescriptionWrapper>

          <Styled.Metadata>
            <Styled.Author>By {data.author}</Styled.Author>
            <Styled.Time dateTime={new Date(data.date).toISOString()}>{toDateString(new Date(data.date))}</Styled.Time>
            <Styled.Dot />
            <Styled.Read>{data.readTime} min read</Styled.Read>
          </Styled.Metadata>

          <Styled.Figure>
            <Styled.Image src={data.image.url} alt={data.image.alt} />
            <Styled.Caption>{data.image.caption}</Styled.Caption>
          </Styled.Figure>

          {data.notes && (
            <Styled.NotesButtonAside>
              <NotesButton />
            </Styled.NotesButtonAside>
          )}

          <Styled.Body $font={data.fonts.body}>
            <Body />

            {data.notes && (
              <Styled.NotesContainer>
                <Notes notes={data.notes} />
              </Styled.NotesContainer>
            )}
          </Styled.Body>
        </Styled.Article>
      </AppLayout>
    </>
  );
}
