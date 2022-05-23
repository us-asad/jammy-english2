import { getTopCourses, getAllCourses } from "services";
import data from "data/main.json";
import Head from "next/head";
import Link from "next/link";
import { Main, About, TopCourses, Contact, Footer } from "containers";

export default function Home({ topCourses, allCourses }) {
  return (
    <div className="">
      <Head>
        <title>Working Well</title> 
      </Head>
      <Main allCourses={allCourses} />
      <About />
      <TopCourses topCourses={topCourses} />
      <Contact />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const topCourses = await getTopCourses();
  const allCourses = await getAllCourses();

  return {
    props: {
      topCourses,
      allCourses
    }
  }
}