import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar></Navbar> */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <Image
            src="/hero.png"
            className={styles.avatar}
            width={450}
            height={450}
          ></Image>
          <div className={styles.heroInfo}>
            <div className={styles.heroInfoText}>
              <h2>Hola! Yo soy</h2>
              <h1>
                Yessica <br /> Montoya
              </h1>
              <h3>Psicóloga | Gestora Cultural</h3>
            </div>
            <button className={styles.heroCTA}>Contactame</button>
          </div>
        </section>
        <section className={styles.news}>
          <h1 className={styles.title}>Lo ultimo</h1>
          <div className={styles.newsContainer}>
            <div className={styles.newsItem}>
              <img
                src="/fondoNews.png"
                alt="pattern"
                className={styles.newsBg}
              />
              <div className={styles.newsInfo}>
                <p>Category</p>
                <h2>titulo</h2>
              </div>
            </div>
            <div className={styles.newsItem}>
              <img
                src="/fondoNews.png"
                alt="pattern"
                className={styles.newsBg}
              />
              <div className={styles.newsInfo}>
                <p>Category</p>
                <h2>titulo</h2>
              </div>
            </div>
            <div className={styles.newsItem}>
              <img
                src="/fondoNews.png"
                alt="pattern"
                className={styles.newsBg}
              />
              <div className={styles.newsInfo}>
                <p>Category</p>
                <h2>titulo</h2>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.aboutMe}>
          <img src="/aboutBg.svg" alt="" className={styles.aboutBg} />
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
