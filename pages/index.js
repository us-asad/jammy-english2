import { getTopCourses, getAllCourses } from "services";
import data from "data/main.json";
import Head from "next/head";
import Link from "next/link";
import { Main, About, TopCourses, Contact, Footer } from "containers";
import { SEO } from "subcomponents";

export default function Home({ topCourses, allCourses, metaData }) {
  return (
    <div className="">
      <SEO title={`${metaData?.mainName} - Learn English with $0`} description={`${metaData?.mainName} for English Learners. It's fully free for everybody. Start courses now and change your life!`} />
      <Main metaData={metaData} allCourses={allCourses} />
      <About metaData={metaData} />
      <TopCourses topCourses={topCourses} />
      <Contact metaData={metaData} />
      <Footer metaData={metaData} />
    </div>
  );
}

export async function getServerSideProps() {
  const result = await getTopCourses();
  const allCourses = await getAllCourses();

  return {
    props: {
      allCourses,
      topCourses: result.courses,
      metaData: result.metaDatas[0]
    }
  }
}