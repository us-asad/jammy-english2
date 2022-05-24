import Head from "next/head";

const url = process.env.URL || "http://localhost:3000";

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={`${url}/logo.svg`}/>
      <meta property="og:image:alt" content="Logo of Jammy English Club"/>
      <meta property="og:image:width" content="96"/>
      <meta property="og:image:height" content="20"/>
      <meta name="theme-color" content="hsl(235deg, 70%, 60%)"/>
    </Head>
  );
}
