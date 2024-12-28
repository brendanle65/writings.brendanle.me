// import libraries
import { GetStaticProps, GetStaticPaths } from "next";

// import page
import { Writing } from "@pages/index";

// import other
import { API } from "@constants/api";
import { WritingType } from "@typings/writing";

// Populate page with data at build-time
export const getStaticProps = (async (context) => {
  const slug = context.params.slug;
  const { data } = await API.get(`/writings?filters[slug][$eq]=${slug}&populate=*`);
  const match = data.data[0];

  const { title, body, readTime, type, theme, publishedAt, seoDescription, description, author, image, annotations } =
    match;

  const props: WritingType = {
    author: author,
    title: title,
    body: body,
    type: type,
    theme: theme,
    date: publishedAt,
    seoDescription: seoDescription,
    readTime: readTime,
    description: description,
    image: {
      url: image.formats.large.url,
      alt: image.alternativeText,
      caption: image.caption,
    },
    annotations: annotations.map(({ index, content }) => ({
      index,
      content,
    })),
  };

  return {
    props,
  };
}) satisfies GetStaticProps;

// Tells what pages to generate at build-time
export const getStaticPaths = (async () => {
  const { data } = await API.get("/writings");

  const paths = data.data.map((writings) => {
    return { params: { slug: writings.slug } };
  });

  return {
    paths: paths,
    fallback: false, // return 404 page if not matching one of the paths above
  };
}) satisfies GetStaticPaths;

export default Writing;
