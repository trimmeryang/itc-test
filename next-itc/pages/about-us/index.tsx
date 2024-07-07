// import axios from 'axios';
// import TextSection from '../components/TextSection';
// import PillarsSection from '../components/PillarsSection';
// import HighlightSection from '../components/HighlightSection';
import CarouselSection from "./components/carousel-section";
import { drupal } from "lib/drupal";
import { DrupalNode } from "next-drupal";
import { describe } from "node:test";
import Layout from "./layout";
import styles from "./styles.module.css";
import Image from "next/image";
import { absoluteUrl, absoluteImageUrl } from "lib/utils";

const Page = ({ data }) => (
  <Layout meta={data.meta}>
    <div className={styles["about-us_wrapper"]}>
      <section
        className={styles["about-us-head"]}
        style={{ backgroundColor: data.backgroundColor }}
      >
        <h1>{data.title}</h1>
        <div
          className={styles["about-us_head__description"]}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </section>

      <section className={styles["about-us_intro"]}>
        <p className={styles["about-us_intro__subtitle"]}>{data.intro}</p>
      </section>

      <section className={styles["about-us_pillars"]}>
        <h1>{data.pillars?.title}</h1>
        <div
          className={styles["about-us_head__description"]}
          dangerouslySetInnerHTML={{ __html: data.pillars?.description }}
        />
        <div className={styles["about-us_pillars__list"]}>
          {data.pillars?.items.map((item) => (
            <div className={styles["about-us_pillar"]} key="item.title">
              <div className={styles["about-us_pillar__logo"]}>
                <Image
                  src={absoluteImageUrl(item.imageUrl)}
                  alt={item.imageAlt}
                  width={200} // Optional: Set width
                  height={150} // Optional: Set height
                  priority
                />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className={styles["about-us_pillars__cta"]}>
          <a
            className={styles["buttons_darkButton"]}
            href={data.pillars?.button?.uri}
          >
            {data.pillars?.button?.title}
          </a>
        </div>
      </section>

      <section className={styles["about-us_achievement__section"]}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.achievements?.map((item) => (
            <div
              key="item.title"
              className={`${styles["about-us_achievement__item"]} flex flex-col items-center 
              py-12 px-12 md:py-18 md:px-20 2xl:py-20 2xl:px-24`}
            >
              <div
                className="relative w-[260px] md:w-[280px] 
              lg:w-[300px] h-[240px] md:h-[280px] lg:h-[300px]"
              >
                <span>
                  <Image
                    src={absoluteUrl(item.imageUrl)}
                    alt={item.imageAlt}
                    width={300} // Optional: Set width
                    height={300} // Optional: Set height
                    priority
                  />
                </span>
              </div>
              <h3 className="text-center mt-7">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["about-us_core-values"]}>
        <h1 className={styles["about-us_core-values__headtitle"]}>
          {data.coreValues?.title}
        </h1>
        <p
          className="text-center whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: data.coreValues?.description }}
        ></p>
        <div className={styles["about-us_core-values__values"]}>
          {data.coreValues?.items.map((item) => (
            <div className={styles["about-us_core-value"]} key="item.title">
              <span className={styles["about-us_core-value__logo"]}>
                <span>
                  <Image
                    src={absoluteUrl(item.imageUrl)}
                    alt={item.imageAlt}
                    width={200} // Optional: Set width
                    height={200} // Optional: Set height
                    priority
                  />
                </span>
              </span>
              <div>
                <h3 className={styles["about-us_core-value__title"]}>
                  {item.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CarouselSection slides={data.leadership}></CarouselSection>
    </div>
  </Layout>
);

export function formatData(res: any): object {
  const { data, included } = res;
  const currentData = data?.[0] || {};

  const pillarsItems = currentData.relationships.field_pillars_items.data.map(
    (i) => {
      const realItem = included.find((item) => item.id === i.id);
      const fileId = realItem.relationships.field_animation.data.id;
      const realFile = included.find((item) => item.id === fileId);

      return {
        title: realItem.attributes.title,
        imageUrl: realFile.attributes.uri.url,
        imageAlt: realItem.relationships.field_animation.data.meta.alt,
      };
    }
  );

  const achievements = currentData.relationships.field_achievements.data.map(
    (i) => {
      const realItem = included.find((item) => item.id === i.id);
      const fileId = realItem.relationships.field_award_image.data.id;
      const realFile = included.find((item) => item.id === fileId);

      return {
        title: realItem.attributes.title,
        description: realItem.attributes.body,
        subTitle: realItem.attributes.field_subtitle,
        imagePosition: realItem.attributes.field_image_position,
        imageUrl: realFile.attributes.uri.url,
        imageAlt: realItem.relationships.field_award_image.data.meta.alt,
      };
    }
  );

  const coreValuesItems =
    currentData.relationships.field_core_values_items.data.map((i) => {
      const realItem = included.find((item) => item.id === i.id);
      const fileId = realItem.relationships.field_logo.data.id;
      const realFile = included.find((item) => item.id === fileId);

      return {
        title: realItem.attributes.title,
        description: realItem.attributes.body.value,
        imageUrl: realFile.attributes.uri.url,
      };
    });

  const leadership = currentData.relationships.field_leadership.data.map(
    (i) => {
      const realItem = included.find((item) => item.id === i.id);
      const fileId = realItem.relationships.field_picture.data.id;
      const realFile = included.find((item) => item.id === fileId);

      return {
        title: realItem.attributes.title,
        description: realItem.attributes.body.value,
        job: realItem.attributes.field_job,
        imageUrl: realFile.attributes.uri.url,
        imageAlt: realItem.relationships.field_picture.data.meta.alt,
      };
    }
  );

  const metatag = currentData.attributes.metatag;

  return {
    meta: {
      title: metatag.find((item) => item.attributes.name === "title").attributes
        .content,
      description: metatag.find(
        (item) => item.attributes.name === "description"
      ).attributes.content,
    },
    title: currentData.attributes.title,
    intro: currentData.attributes.field_intro,
    description: currentData.attributes.body.value,
    backgroundColor: currentData.attributes.field_background_color,
    pillars: {
      title: currentData.attributes.field_pillars_title,
      description: currentData.attributes.field_pillars_description,
      button: currentData.attributes.field_pillars_button_link,
      items: pillarsItems,
    },
    achievements,
    coreValues: {
      title: currentData.attributes.field_core_values_title,
      description: currentData.attributes.field_core_values_description,
      items: coreValuesItems,
    },
    leadership,
  };
}

export async function getStaticProps() {
  const url =
    "/jsonapi/node/about_us?include=field_achievements.field_award_image,field_core_values_items.field_logo,field_leadership.field_picture,field_pillars_items.field_animation&fields[file--file]=uri";

  try {
    const res = await fetch(absoluteUrl(url));
    const data = await res.json();

    return { props: { data: formatData(data) } };
  } catch (error) {}

  return { props: { data: {} } };
}

export default Page;
