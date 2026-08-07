import { Navigate, useParams } from "react-router-dom";
import { legacyUniversityCourseRedirect } from "@/data/seo/university-urls";

/**
 * Redirects a legacy university-course URL (/university/{slug}/{courseId} or
 * /university/manipal/courses/{courseId}) to its canonical twin
 * (/universities/{slug}-online/courses/{courseId}).
 */
const LegacyCourseRedirect = ({ uni }: { uni?: string }) => {
  const { slug, courseId } = useParams();
  const key = uni ?? slug ?? "";
  return <Navigate to={legacyUniversityCourseRedirect(key, courseId)} replace />;
};

export default LegacyCourseRedirect;
