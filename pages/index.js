import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Top from "../components/Top";
import Chart from "../components/Chart";

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

      <header>
        <p>title</p>
      </header>

      <main className={styles.main}>
        <Top />
        {/* <Chart /> */}
      </main>

      {/* <footer className={styles.footer}> */}
      {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      {/* </footer> */}
    </div>
  );
}
