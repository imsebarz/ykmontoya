import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <Link href="/">
          <Image src={"/yk.svg"} width={60} height={60}></Image>
        </Link>
      </span>
      <ul className={styles.navigation}>
        <li className={router.pathname === "/citas" ? styles.focus : ""}>
          <Link href="/citas">
            <a href="">Citas</a>
          </Link>
        </li>
        <li className={router.pathname === "/terapia" ? styles.focus : ""}>
          <Link href="/terapia">
            <a href="">En terapia</a>
          </Link>
        </li>
        <li className={router.pathname === "/ykmontoya" ? styles.focus : ""}>
          <Link href="/ykmontoya">
            <a href="">Sobre mi</a>
          </Link>
        </li>
        <li className={router.pathname === "/contacto" ? styles.focus : ""}>
          <Link href="/contacto">
            <a href="">Contacto</a>
          </Link>
        </li>
        <li className={router.pathname === "/recomendarte" ? styles.focus : ""}>
          <Link href="/recomendarte">
            <a href="">RecomendArte</a>
          </Link>
        </li>
      </ul>
      <div className={styles.socials}>
        <Image src={"/wpp.svg"} width={40} height={40}></Image>
        <Image src={"/ig.svg"} width={35} height={35}></Image>
      </div>
    </nav>
  );
};

export default Navbar;
