import Image from "next/image";
import styles from "./page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('session home', session)
  return (
    <main className={styles.main}>
      <h2>Welcome Home</h2>
    </main>
  );
}
