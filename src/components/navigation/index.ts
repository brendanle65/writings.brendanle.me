// import libraries
import _Link from "next/link";

// importo other
import { withHover } from "./withHover/withHover";

// exports
export { withHover };
export { Cursor } from "./Cursor/Cursor";

export const Link = withHover(_Link);
