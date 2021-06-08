import Head from "next/head";

export const siteTitle = "Reubert Barbosa";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Reubert Barbosa life portfolio's" />
        <meta
          property="og:url"
          content="https://barbosa-reubert-blog.vercel.app/"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
