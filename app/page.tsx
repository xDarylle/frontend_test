import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./gallery";
import { getUserData } from "./UserAPI";

export default async function Home() {
  const { users } = await getUserData();

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
