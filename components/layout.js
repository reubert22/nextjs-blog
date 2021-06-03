import Head from "next/head";
import styles from "./layout.module.css";

const name = "Hello! I'm Reubert Barbosa";
export const siteTitle = "Reubert Barbosa";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
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
