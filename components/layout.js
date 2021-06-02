import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "Reubert Barbosa";

export default function Layout({ children, home }) {
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
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
