import React from "react";
import {
  globeStats,
  landingImage1,
  landingImage2,
  rightArc,
} from "../../assets";
import { Header } from "../../components";

import styles from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <section className={styles.intro}>
          <div className="container mx-auto text-center py-16 md:py-20">
            <div className={styles["text-content"]}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">
                Time to combat and eradicate <br className="hidden lg:block" />
                <span className={styles["green-bg"]}>conterfeit drugs</span>
                using blockchain
              </h1>
              <p>
                Since washing powder contains caustic soda & some minerals which
                is harmful for clothes, <br className="hidden lg:block" />{" "}
                Jainson Daily wash takes care of clothes & making
              </p>
            </div>
            <div className={styles["intro-image-div"]}>
              <img src={landingImage1} alt="" />
            </div>
          </div>
        </section>
        <section className={`${styles["cases"]}`}>
          <div className="container mx-auto text-center py-16 md:py-20">
            <div className={styles["text-content"]}>
              <h2 className="text-2xl md:text-3xl mb-4 ">
                Global drug counterfeit index
              </h2>
            </div>
            <div className={styles["globe-img-container"]}>
              <img className="" src={globeStats} alt="" />
            </div>
          </div>
        </section>
        <section className={`${styles["why-ndu"]}`}>
          <div className="">
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 content-center relative">
              <div
                className={`${styles["landing-image-2-container"]} order-last lg:order-first pt-16`}
              >
                <img src={landingImage2} alt="" />
              </div>
              <div className="container mx-auto pt-16 lg:pt-0 order-first lg:order-last flex flex-col justify-center">
                <h2 className="text-white text-2xl md:text-3xl  mb-10">
                  Why <span className="italic font-bold">ndu</span>
                </h2>
                <p className="text-white">
                  Since washing powder contains caustic soda & some minerals
                  which is harmful for clothes, Jainson Daily wash takes care of
                  clothes & making Since washing powder contains caustic soda &
                  some minerals which is harmful for clothes, Jainson Daily wash
                  takes care of clothes & making.
                </p>
                <div className={styles["landing-image-3-container"]}>
                  <img src={rightArc} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["cases"]}`}>
          <div className="container mx-auto text-center py-16 md:py-20">
            <div className={styles["text-content"]}>
              <h2 className="text-2xl md:text-3xl mb-4 ">
                Global drug counterfeit index
              </h2>
            </div>
            <div className={styles["globe-img-container"]}>
              <img className="" src={globeStats} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
