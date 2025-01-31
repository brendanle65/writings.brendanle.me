// import others
import { Notetag } from "@components/elements";

export const body = () => {
  return (
    <>
      <p>
        Brendan Le is a web developer and designer by day and blogger by night. When he's not doing either of those
        things, you can find him trying not to embarrass himself while bouldering or laughing at his own jokes he says
        in his head.
        <Notetag id={1} /> He's also an amazing chef: he can make pasta, and that's about it.
      </p>

      <div data-type="line"> </div>

      <p>
        He loves watching Valorant esports and performing magic tricks for strangers. His Vietnamese zodiac sign is a
        dragon, and his Greek zodiac, well, he does not like to talk about it.
        <Notetag id={2} /> Brendan Le is strong both physically and emotionally, as he is currently battling an
        addiction to sparkling water and diet soda.
        <Notetag id={3} />
      </p>

      <div data-type="line"> </div>

      <p>
        In all seriousness, this is my personal blogging website. I write for myself, mainly poetry; I only share it in
        case anybody else might find value in it.
      </p>

      <div data-type="line"> </div>

      <p>
        If you're interested in my web development and design work, you can find it them at bytes.brendanle.me and
        work.brendanle.me.
      </p>
    </>
  );
};
