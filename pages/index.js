import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.container_home}>
        <div className={utilStyles.home_header}>
          <span className={utilStyles.header_name_text}>Reubert Barbosa</span>
          <div className={utilStyles.container_social_media}>
            <Image
              className={utilStyles.social_media_img}
              src="/images/instagram.svg"
              height={35}
              width={35}
              alt="instagram social media"
            />
            <Image
              className={utilStyles.social_media_img}
              src="/images/twitter.svg"
              height={35}
              width={35}
              alt="twitter social media"
            />
            <Image
              className={utilStyles.social_media_img}
              src="/images/github.svg"
              height={35}
              width={35}
              alt="github social media"
            />
          </div>
        </div>
        <div className={utilStyles.home_presentation}>
          <div className={utilStyles.container_image}>
            <div className={utilStyles.container_background_image}>
              <Image
                src="/images/background-profile.svg"
                height={300}
                width={300}
                alt="blob background"
              />
            </div>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="profile"
            />
          </div>
          <p className={utilStyles.home_greetings_text}>
            Hello there, welcome to my world!
          </p>
          <div className={utilStyles.down_indicator}>
            <div className={utilStyles.arrow_down} />
          </div>
        </div>
        <div></div>
        <section className={utilStyles.headingMd}>
          <p>...</p>
        </section>
        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
