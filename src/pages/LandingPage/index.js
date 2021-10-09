import React, { useState } from "react";
import {
  drug2,
  drugPark,
  dude,
  globeStats,
  greenArc1,
  HowItWorksIconA,
  HowItWorksIconB,
  HowItWorksIconC,
  HowItWorksIconD,
  landingImage1,
  landingImage2,
  mainframe,
  rightArc,
} from "../../assets";
import { Header, HowItWorksCard, Footer, NormalButton, Modal } from "../../components";
import ConnectWalletModal from "../../components/ConnectWalletModal";
import { InputWithButton } from "../../components/InputWithButton";

import styles from "./landingPage.module.css";

const LandingPage = () => {
  const [display, setdisplay] = useState(false);
  return (
    <>
    {/* <ConnectWalletModal setDisplayModal={setdisplay} displayModal={display} /> */}
      <Header setDisplay={setdisplay}  />
      <main className={`${styles.main}`}>
        <section className={styles["intro"]}>
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
        <section className={`${styles["how-it-works"]}`}>
          <div className="container mx-auto text-center py-16 md:py-20">
            <div className={styles["headers"]}>
              <h2 className="text-2xl md:text-3xl mb-10 ">How it Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              <div className={`${styles["card"]} my-3`}>
                <HowItWorksCard
                  Icon={HowItWorksIconA}
                  text={"Inscribe and ID a product with unique hash values."}
                />
              </div>
              <div className={`${styles["card"]} my-3`}>
                <HowItWorksCard
                  Icon={HowItWorksIconB}
                  text={"Store hash values in blockchain."}
                />
              </div>
              <div className={`${styles["card"]} my-3`}>
                <HowItWorksCard
                  Icon={HowItWorksIconC}
                  text={"Generate barcode with hash values."}
                />
              </div>
              <div className={`${styles["card"]} my-3`}>
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
        <section className={`${styles["what-to-gain"]}`}>
          <div className="lg:container mx-auto text-center pb-16 md:pb-20">
            <div className={styles["headers"]}>
              <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 ">
                What you stand to gain
              </h2>
            </div>
            <div className="flex justify-center align-middle">
              <ul
                className={`${styles["left-drug-content"]} hidden md:flex flex-col justify-between max-h-56 my-auto`}
              >
                <li className="my-8">
                  <span>Since washing powder</span>
                  <hr />
                </li>
                <li className="my-8">
                  <span>Since washing powder</span>
                  <hr />
                </li>
                <li className="my-8">
                  <span>Since washing powder</span>
                  <hr />
                </li>
              </ul>
              <div className={`${styles["img-container"]}`}>
                <img className="" src={drug2} alt="" />
              </div>
              <ul
                className={`${styles["right-drug-content"]} hidden md:flex flex-col justify-between max-h-56 my-auto`}
              >
                <li className="my-8">
                  <hr />
                  <span>Since washing powder</span>
                </li>
                <li className="my-8">
                  <hr />
                  <span>Since washing powder</span>
                </li>
                <li className="my-8">
                  <hr />
                  <span>Since washing powder</span>
                </li>
              </ul>
              <ul
                className={`${styles["right-drug-content-2"]} md:hidden flex flex-col justify-between lg:max-h-56 my-auto col-start-2 col-end-3`}
              >
                <li className="my-3">
                  <span>Since washing powder</span>
                </li>
                <li className="my-3">
                  <span>Since washing powder</span>
                </li>
                <li className="my-3">
                  <span>Since washing powder</span>
                </li>
                <li className="my-3">
                  <span>Since washing powder</span>
                </li>
                <li className="my-3">
                  <span>Since washing powder</span>
                </li>
                <li className="my-3">
                  <span>Since washing powder</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={`${styles["subscribe"]}`}>
          <div className="container mx-auto text-center mb-16 md:mb-20 ">
            <div className={`${styles["primary-blue-bg"]} py-16 md:py-20`}>
              <div className="md:grid md:grid-cols-7 lg:grid-cols-5">
                <div className="px-8 md:px-16 md:col-span-5 lg:col-span-3 relative z-10">
                  <div className={`${styles["headers"]} text-left `}>
                    <h2 className="text-2xl md:text-3xl mb-10">
                      <span className={styles["green-bg"]}>Subscribe</span>
                      <span> to our Newsletters</span>
                    </h2>
                  </div>
                  <form action="" onSubmit={() => false}>
                    <div className="mb-10 md:mb-0">
                      <InputWithButton placeHolder="Enter your email address" />
                    </div>
                    <NormalButton
                      buttonText="Subscribe"
                      className={`${styles["subscribe-button"]} md:hidden`}
                    />
                  </form>
                </div>
                <div
                  className={`${styles["img-container"]} hidden md:block col-span-2`}
                >
                  <img src={dude} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export { LandingPage };
