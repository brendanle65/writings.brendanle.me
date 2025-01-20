// import libraries
import Link from "next/link";

// import other
import { Hoverable } from "@components/other";
import { WritingType } from "@typings/writing";

// import styled components
import * as Styled from "./Feed.styled";

interface FeedProps {
  // A list of writings to post links to.
  writings: WritingType[];

  // Function to run when post is hovered over, provides the id of the currently selected post
  onPostEnter: (post: WritingType) => void;
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

    const dateBlocks: Record<string, WritingType[]> = {};

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
            {grouped[date].map((post) => (
              <Hoverable key={post.id} onMouseEnter={() => onPostEnter(post)}>
                <Link href="/">
                  <Styled.Post $font={post.fonts.title}>
                    <Styled.Title>{post.title}</Styled.Title>
                    <Styled.Description>
                      It Was The Best of Times and The Worst of Times...sdsadsdsdds
                    </Styled.Description>
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
