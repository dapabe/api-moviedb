import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
}
Meta.defaultProps = {
  title: "TakeALook",
  keywords: "Movie app, free movies, popular movies",
  description: "Take a look at the latest popular movies in the industry.",
};
