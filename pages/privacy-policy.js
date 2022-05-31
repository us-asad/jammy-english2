import parser from "html-react-parser";
import { getPrivacyPolicy, getAllCourses } from "services";
import { Header, Footer } from "containers";
import { SEO } from "subcomponents";

export default function PrivacyPolicy({allCourses, metaData}) {
  return (
    <div>
      <SEO title={`Privacy Policy - ${metaData?.mainName}`} description={`Privacy Policy - ${metaData?.mainName}`} />
      <div className="h-[85px] bg-dark">
        <Header metaData={metaData} allCourses={allCourses} bgBlack />
      </div>
      <div className="!container mx-auto prose prose-p:font-rubik my-7 min-h-screen">
        {parser(metaData?.privacyPolicy?.html)}
      </div>
      <Footer metaData={metaData} />
    </div>
  );
}

export async function getServerSideProps() {
  const allCourses = await getAllCourses();
  const metaData = await getPrivacyPolicy();

  return {
    props: {
      allCourses,
      metaData
    }
  }
}
