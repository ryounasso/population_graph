import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Top from "../components/Top";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Population Graph</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="Population Graph"
          content="都道府県別の人口をグラフで表します。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <p>都道府県別人口推移グラフ</p>
      </header>

      <main className={styles.main}>
        <Top className="a" />
      </main>
    </div>
  );
}
