// import types
import { WritingPiece } from "@typings/writing";

// import libraries
import Link from "next/link";

// import other
import { Hoverable } from "@components/other";

// import styled components
import * as Styled from "./Feed.styled";

interface FeedProps {
  // A list of writings to post links to.
  writings: WritingPiece[];

  // Function to run when post is hovered over, provides the id of the currently selected post
  onPostEnter: (post: WritingPiece) => void;
}

/**
 * Renders the main feed, a list of latest articles.
 *
 * @private
 * @component
 */
export const Feed = ({ writings, onPostEnter }: FeedProps) => {
  // Articles' metadata grouped by their date (formatted as "MMM. YYYY") from latest to oldest.
  const grouped = (() => {
    // Sort by date
    const sorted = writings.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const dateBlocks: Record<string, WritingPiece[]> = {};

    // Group them
    sorted.forEach((datum) => {
      const year = new Date(datum.date).getFullYear();
      const monthName = new Date(datum.date).toLocaleString("default", { month: "long" });
      const dateString = `${monthName}, ${year}`;

      if (!dateBlocks[dateString]) {
        dateBlocks[dateString] = [];
      }
      dateBlocks[dateString].push(datum);
    });

    return dateBlocks;
  })();

  return (
    <Styled.GroupList>
      {Object.keys(grouped).map((date, idx) => (
        <li key={idx}>
          <Styled.Date>{date}:</Styled.Date>

          <Styled.PostList>
            {grouped[date].map((post, idx) => (
              <Hoverable key={idx} onMouseEnter={() => onPostEnter(post)}>
                <Link href={`/writings/${post.slug}`}>
                  <Styled.Post>
                    <Styled.TitleWrapper>
                      <Styled.Title $font={post.fonts.title}>{post.title}</Styled.Title>
                    </Styled.TitleWrapper>
                    <Styled.DescriptionWrapper>
                      <Styled.Description $font={post.fonts.body}>{post.description}</Styled.Description>
                    </Styled.DescriptionWrapper>
                  </Styled.Post>
                </Link>
              </Hoverable>
            ))}
          </Styled.PostList>
        </li>
      ))}
    </Styled.GroupList>
  );
};
