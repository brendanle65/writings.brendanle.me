// import other
import { WritingType } from "@typings/writing";

// import styled components
import * as Styled from "./Writing.styled";

/**
 * A writing page, renders (a blog post).
 *
 * @returns {React.ReactElement} A writing page.
 * @page
 */
export function Writing({ title }: WritingType) {
  // console.log(rest);

  return <Styled.Title>{title}</Styled.Title>;
}
