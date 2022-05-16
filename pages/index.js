import Head from "next/head";
import Link from "next/link";
import data from "data/main.json";
import { Main, About, TopCourses, Contact } from "components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Working Well</title> 
      </Head>
      <Main />
      <About />
      <TopCourses />
      <Contact />
      <div className="h-screen bg-[#ddd]" />
    </div>
  );
}