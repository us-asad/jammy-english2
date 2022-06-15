import { getTopCourses, getAllCourses } from "services";
import { Main, About, TopCourses, Contact, Footer } from "containers";
import { SEO } from "subcomponents";

export default function Home({ topCourses, allCourses, metaData }) {
  return (
    <div className="">
      <SEO title={`${metaData?.mainName} - Learn English Online For Free`} description={`${metaData?.mainName} | Free English Lessons and Teaching Resources`} />
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
