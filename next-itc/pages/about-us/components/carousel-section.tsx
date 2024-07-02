"use client";

import React, { useState } from "react";
import Image from "next/image";
import { absoluteUrl } from "lib/utils";
import styles from "./styles.module.css";

const CarouselSection = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  if (slides?.length === 0) {
    return <></>;
  }

  return (
    <section className={styles["about-us_profile"]}>
      <h1 className={styles["about-us_profile__headtitle"]}>Leadership</h1>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={absoluteUrl(slides[currentIndex].imageUrl)}
              alt={slides[currentIndex].imageAlt}
              width={500}
              height={500}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.name}>{slides[currentIndex].title}</h2>
            <p className={styles.title}>{slides[currentIndex].job}</p>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: slides[currentIndex].description,
              }}
            ></div>
          </div>
        </div>
        <button className={styles.navButton + " " + styles.prev}>
          <Image
            src="https://assets.it-consultis.com/_next/static/media/Arrow-Left-Black.52c9d4a0.svg"
            alt=""
            width={200} // Optional: Set width
            height={150} // Optional: Set height
            onClick={prevSlide}
            priority
          />
        </button>
        <button className={styles.navButton + " " + styles.next}>
          <Image
            src="https://assets.it-consultis.com/_next/static/media/Arrow-Right-Black.9093743d.svg"
            alt=""
            width={200} // Optional: Set width
            height={150} // Optional: Set height
            onClick={nextSlide}
            priority
          />
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
