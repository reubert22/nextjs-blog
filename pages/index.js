import Head from "next/head";

import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Greetings from "../components/Greetings/Greetings";
import Header from "../components/Header/Header";
import Layout, { siteTitle } from "../components/Layout/layout";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import styles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles["container-home"]}>
        <Header />
        <Greetings />
        <About />
        <Skills />
        {/* Add Projects in the future */}
        {/* <Projects /> */}
        <Footer />
      </div>
    </Layout>
  );
}
