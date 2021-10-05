import React from "react";
import {
  drugPark,
  globeStats,
  greenArc1,
  HowItWorksIconA,
  HowItWorksIconB,
  HowItWorksIconC,
  HowItWorksIconD,
  landingImage1,
  landingImage2,
  landingPageBg1,
  mainframe,
  rightArc,
} from "../../assets";
import { Header, HowItWorksCard } from "../../components";

import styles from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <section className={styles.intro}>
          <div className="container mx-auto text-center py-16 md:py-20">
            <div className={styles["headers"]}>
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
            <div className={styles["headers"]}>
              <h2 className="text-2xl md:text-3xl mb-10 ">
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
        <section
          className={`${styles["how-it-works"]}`}
          style={{
            backgroundImage: `url(${landingPageBg1})`,
          }}
        >
          <div className="container mx-auto text-center py-16 md:py-20">
            <div className={styles["headers"]}>
              <h2 className="text-2xl md:text-3xl mb-10 ">How it Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              <div className="my-3">
                <HowItWorksCard
                  Icon={HowItWorksIconA}
                  text={"Inscribe and ID a product with unique hash values."}
                />
              </div>
              <div className="my-3">
                <HowItWorksCard
                  Icon={HowItWorksIconB}
                  text={"Store hash values in blockchain."}
                />
              </div>
              <div className="my-3">
                <HowItWorksCard
                  Icon={HowItWorksIconC}
                  text={"Generate barcode with hash values."}
                />
              </div>
              <div className="my-3">
                <HowItWorksCard
                  Icon={HowItWorksIconD}
                  text={"Now you can verify product anywhere."}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["drugs-could-be-there"]}`}>
          <div className="container mx-auto py-12">
            <div className="grid grid-flow-row grid-cols-1 gap-10 lg:grid-cols-2 content-center relative">
              <div
                className={`${styles["landing-image-2-container"]} order-last lg:order-first`}
              >
                <img src={drugPark} alt="" />
              </div>
              <div className="order-first lg:order-last flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-10 text-center lg:text-left">
                  <span className="">Your drugs could be </span>
                  <br />
                  <span className={`${styles["green-underscore"]}`}>there</span>
                  <span> too</span>
                </h2>
                <p className="">
                  Since washing powder contains caustic soda & some minerals
                  which is harmful for clothes, Jainson Daily wash takes care of
                  clothes & making.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["how-we-protect"]}`}>
          <div className="container mx-auto  py-16 md:py-20">
            <div className={styles["headers"]}>
              <h2 className="text-2xl md:text-3xl mb-12 text-center">
                How we protect your product
              </h2>
            </div>
            <div className="grid grid:col-1 md:grid-cols-5">
              <div className="col-span-1 md:col-span-3 lg:col-span-2">
                <p className={`${styles["paragraph"]} mb-12`}>
                  Since washing powder contains caustic soda & some minerals
                  which is harmful for clothes, Jainson Daily wash takes care of
                  clothes & making
                </p>
                <ul className={styles["special-bullet-list"]}>
                  <li>
                    <span>Since washing powder.</span>
                  </li>
                  <li>
                    <span>Since washing powder.</span>
                  </li>
                  <li>
                    <span>Since washing powder.</span>
                  </li>
                  <li>
                    <span>Since washing powder.</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center">
                <img className="md:ml-auto" src={mainframe} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
