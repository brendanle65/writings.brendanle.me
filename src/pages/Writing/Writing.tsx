// import other
import { WritingType } from "@typings/writing";
import { AppLayout } from "@components/layouts";
import { HomeLink } from "./(HomeLink)/HomeLink";
import { NotesButton } from "./(NotesButton)/NotesButton";
import { Hoverable } from "@components/other";

// import styled components
import * as Styled from "./Writing.styled";

/**
 * A writing page, renders (a blog post).
 *
 * @returns {React.ReactElement} A writing page.
 * @page
 */
export function Writing(props: WritingType) {
  return (
    <>
      <AppLayout>
        <Styled.Article>
          <Styled.HomeLinkAside>
            <HomeLink />
          </Styled.HomeLinkAside>
          <Styled.Tags>
            <Hoverable as={Styled.Type} href="/">
              Didactic
            </Hoverable>
            <Hoverable as={Styled.Theme} href="/">
              Mortality
            </Hoverable>
          </Styled.Tags>
          <Styled.Title>Blacklance Paragon</Styled.Title>
          <Styled.Description>About overcoming grief and how, despite it all, life goes on.</Styled.Description>

          <Styled.Metadata>
            <Styled.Author>By Brendan Le</Styled.Author>
            <Styled.Time dateTime={new Date("October 31, 2024").toISOString()}>October 31st, 2024</Styled.Time>
            <Styled.Dot />
            <Styled.Read>7 min read</Styled.Read>
          </Styled.Metadata>

          <Styled.Figure>
            <Styled.Image
              src="https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="todo"
            />
            <Styled.Caption>
              Springtime, 1904. By Philip Wilson Steer. (Birmingham Museums Trust / Unsplash)
            </Styled.Caption>
          </Styled.Figure>

          <Styled.NotesButtonAside>
            <NotesButton />
          </Styled.NotesButtonAside>

          <Styled.Body>
            {/* <>notes</>  */}
            <>
              <p>
                What if <br />
                you wish upon a star <br />
                and it twinkles?
              </p>

              <p>
                What if <br />
                you ask for more, <br />
                for extra sprinkles?
              </p>

              <p>
                What if <br />
                you take a break <br />
                and taste some wine?
              </p>

              <p>
                What if <br />
                you go wild <br />
                and cross the line?
              </p>

              <p>
                What if <br />
                you say no <br />
                much more often?
              </p>

              <p>
                What if <br />
                you move away <br />
                to bloody Boston?
              </p>

              <p>
                What if <br />
                you care less <br />
                about rumors?
              </p>

              <p>
                What if <br />
                you just ignore <br />
                all those old boomers?
              </p>

              <p>
                What if <br />
                you ask the barista <br />
                for more than coffee?
              </p>

              <p>
                What if <br />
                you stop masking, <br />
                and be a real softy?
              </p>

              <p>
                What if <br />
                you stay after closing <br />
                earn another twenty?
              </p>

              <p>
                What if <br />
                you give more <br />
                before you have plenty?
              </p>

              <p>
                What if? <br />
                What if you finally tire of all <br />
                the what ifs?
              </p>

              <p>
                Of everything having to rhyme <br />
                and follow a certain structure.
              </p>

              <p>
                Instead, break the law: <br />
                drive against traffic.
              </p>

              <p>
                It may not work. But that's okay. <br />
                You would have lived a life that's full, <br />
                full of answers.
              </p>

              <p>
                Not one spent staring out windows, <br />
                watching the cars and taxis go by, <br />
                trotting over stone and puddles, <br />
                hearing:
              </p>

              <p>
                <i>
                  What if? <br />
                  What if? <br />
                  What if?
                </i>
              </p>
            </>
          </Styled.Body>
        </Styled.Article>
      </AppLayout>
    </>
  );
}
