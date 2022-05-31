import parser from "html-react-parser";
import { getTermsOfConditions, getAllCourses } from "services";
import { Header, Footer } from "containers";
import { SEO } from "subcomponents";

export default function TermsOfConditions({allCourses, metaData}) {
  return (
    <div>
      <SEO title={`Terms of Conditions - ${metaData?.mainName}`} description={`Terms of Conditions - ${metaData?.mainName}`} />
      <div className="h-[85px] bg-dark">
        <Header metaData={metaData} allCourses={allCourses} bgBlack />
      </div>
      <div className="!container mx-auto prose prose-p:font-rubik my-7 min-h-screen">
        {parser(metaData?.termsOfConditions?.html)}
      </div>
      <Footer metaData={metaData} />
    </div>
  );
}

export async function getServerSideProps() {
  const allCourses = await getAllCourses();
  const metaData = await getTermsOfConditions();

  return {
    props: {
      allCourses,
      metaData
    }
  }
}
