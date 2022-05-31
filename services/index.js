import { request, gql } from "graphql-request";

const graphcmsAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API;

export const getAllCourses = async () => {
  const query = gql`
    query MyQuery {
      courses {
        name
        slug
        isReady
      }
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result.courses;
}

export const getTopCourses = async () => {
  const query = gql`
    query MyQuery {
      courses(where: {isTopCourse: true}) {
        id
        name
        slug
        thumbnail {
          url
        }
        isReady
        youtubeVideoId
        lessons {
          id
        }
      }
      metaDatas(first: 1) {
        email
        facebookLink
        firstButtonLink
        firstButtonName
        founderText
        developerName
        aboutText
        developerLink
        instagramLink
        mainName
        mainSmallTitle
        phoneNumber
        secondButtonLink
        secondButtonName
        subtitle
        telegramLink
        title
        youtubeLink
        video {
          url
        }
      }
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result;
}

export const getCourse = async slug => {
  const query = gql`
    query getCourse($slug: String!) {
      course(where: {slug: $slug}) {
        name
        slug
        isReady
        thumbnail {
          url
        }
        youtubeVideoId
        lessons {
          slug
          name
          thumbnail {
            url
          }
          timeOfVideo
        }
      }
      metaDatas(first: 1) {
        facebookLink
        developerName
        developerLink
        instagramLink
        mainName
        telegramLink
        youtubeLink
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { slug });

  return result;
}

export const getLessonAndCourse = async (courseSlug, lessonSlug) => {
  const query = `
    query getLessonAndCourse($courseSlug: String!, $lessonSlug: String!) {
      course(where: {slug: $courseSlug}) {
        name
        slug
        lessons {
          name
          slug
        }
      }
      lesson(where: {slug: $lessonSlug}) {
        name
        slug
        timeOfVideo
        youtubeVideoId
        pdfForTeachers {
          url
        }
        pdfForStudents {
          url
        }
        description {
          html
        }
      }
      metaDatas(first: 1) {
        downloadForStudentsText
        downloadForTeachersText
        facebookLink
        developerName
        developerLink
        instagramLink
        mainName
        telegramLink
        youtubeLink
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { courseSlug, lessonSlug });

  return result;
}

export const getPrivacyPolicy = async () => {
  const query = `
    query MyQuery() {
      metaDatas(first: 1) {
        facebookLink
        developerName
        developerLink
        instagramLink
        mainName
        telegramLink
        youtubeLink
        privacyPolicy {
          html
        }
      }
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result.metaDatas[0];
}

export const getTermsOfConditions = async () => {
  const query = `
    query MyQuery() {
      metaDatas(first: 1) {
        facebookLink
        developerName
        developerLink
        instagramLink
        mainName
        telegramLink
        youtubeLink
        termsOfConditions {
          html
        }
      }
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result.metaDatas[0];
}
