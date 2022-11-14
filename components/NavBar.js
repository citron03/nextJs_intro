import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        About
      </Link> */}
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <style jsx global>{`
        nav {
          background-color: tomato;
        }
        // CSS 적용 X, global 옵션 넣으면 적용 됨
        a {
          text-decoration: none;
        }
        .active {
          color: white;
        }
      `}</style>
    </nav>
  );
}
