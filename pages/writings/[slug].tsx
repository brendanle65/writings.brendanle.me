// import page
import { Writing } from "@pages/index";

// import other
import { LOCAL_WRITINGS } from "@constants/local";

// Tells what projects to inject at build-time
export const getStaticProps = (context) => {
  const slug = context.params.slug;

  return { props: { slug } };
};

// Tells what pages to generate at build-time
export const getStaticPaths = async () => {
  const paths = LOCAL_WRITINGS.map((writing) => ({ params: { slug: writing.slug } }));

  return {
    paths: paths,
    fallback: false, // return 404 page if not matching one of the paths above
  };
};

export default Writing;
