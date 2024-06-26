import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Greetings from "../components/Greetings/Greetings";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/layout";
import Skills from "../components/Skills/Skills";
import styles from "../styles/utils.module.css";
import Experience from "../components/Experience/Experience";

export default function Home() {
  return (
    <Layout home>
      <div className={styles["container-home"]}>
        <Header />
        <Greetings />
        <About />
        <Skills />
        <Experience />
        {/* Add Projects in the future */}
        {/* <Projects /> */}
        <Footer />
      </div>
    </Layout>
  );
}
