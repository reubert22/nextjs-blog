import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";
import Greetings from "../components/Greetings/Greetings";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import SideMenu from "../components/SideMenu/SideMenu";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <div className={utilStyles["outer-wrapper"]}>
        <div className={utilStyles["wrapper"]}>
          <div className={utilStyles["slide-one"]}>
            Be yourself at our Academy of Yin Mindfulness & Sound Therapy, a
            place where you can encounter the body, mind and spirt balancing and
            merging them into oneness. Let yoga touch your life through our
            academy!
          </div>
          <div className={utilStyles["slide-two"]}>
            Be yourself at our Academy of Yin Mindfulness & Sound Therapy, a
            place where you can encounter the body, mind and spirt balancing and
            merging them into oneness. Let yoga touch your life through our
            academy!
          </div>
          <div className={utilStyles["slide-three"]}>
            Be yourself at our Academy of Yin Mindfulness & Sound Therapy, a
            place where you can encounter the body, mind and spirt balancing and
            merging them into oneness. Let yoga touch your life through our
            academy!
          </div>
          <div className={utilStyles["slide-four"]}>
            Be yourself at our Academy of Yin Mindfulness & Sound Therapy, a
            place where you can encounter the body, mind and spirt balancing and
            merging them into oneness. Let yoga touch your life through our
            academy!
          </div>
        </div>
      </div> */}
      <div className={utilStyles["outer-wrapper"]}>
        <div className={utilStyles["wrapper"]}>
          <div className={utilStyles["slide-one"]}></div>
        </div>
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
