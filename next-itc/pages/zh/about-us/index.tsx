import { absoluteUrl } from "lib/utils";
import AboutUs, { formatData } from "../../about-us";

const Page = ({ data }) => {
  return <AboutUs data={data}></AboutUs>;
};

export async function getStaticProps() {
  const url =
    "/zh-hans/jsonapi/node/about_us?include=field_achievements.field_award_image,field_core_values_items.field_logo,field_leadership.field_picture,field_pillars_items.field_animation&fields[file--file]=uri";

  try {
    const res = await fetch(absoluteUrl(url));
    const data = await res.json();

    return { props: { data: formatData(data) } };
  } catch (error) {}

  return { props: { data: {} } };
}

export default Page;
