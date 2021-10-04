import React from "react";
import { landingImage1, landingImage2 } from "../../assets";
import { Header } from "../../components";

import styles from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <section className={styles.intro}>
          <div className="container mx-auto text-center pt-16 md:pt-24">
            <div className={styles["text-content"]}>
              <h1 className="text-2xl md:text-3xl  mb-4">
                Time to combact and eradicate <br className="hidden lg:block" />
                <span className={styles["green-bg"]}>
                  conterfeit drugs
                </span>{" "}
                using blockchain
              </h1>
              <p>
                Since washing powder contains caustic soda & some minerals which
                is harmful for clothes, <br className="hidden lg:block" />{" "}
                Jainson Daily wash takes care of clothes & making
              </p>
            </div>
            <div className={styles["intro-image-div"]}>
              <div className="">
                <img src={landingImage1} alt="" />
              </div>
              <div className="">
                <img src={landingImage2} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
