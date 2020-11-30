import styles from "../styles/Home.module.css";
import NavBar from "./components/nav-bar/nav-bar";
import HomeMain from "./components/home/home";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
}
