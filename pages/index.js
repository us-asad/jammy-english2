import { getTopCourses, getAllCourses } from "services";
import data from "data/main.json";
import Head from "next/head";
import Link from "next/link";
import { Main, About, TopCourses, Contact, Footer } from "containers";
import { SEO } from "subcomponents";

export default function Home({ topCourses, allCourses }) {
  return (
    <div className="">
      <SEO title="Jammy English Club - Learn English with $0" description="Jammy English Club for English Learners. It's fully free for everybody. Start courses now and change your life!" />
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