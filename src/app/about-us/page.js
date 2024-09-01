import React from "react";
import AlmondAboutUs from "@/components/pages/AboutUs";

export const metadata = {
  title: "About Almond",
  description:
    "AboutUsWelcome to Almond,a dynamic fintech startup from Nigeria dedicated to transforming the financial landscape.Our mission is to leverage cutting-edge technology to provide innovative financial solutions that empower individuals and businesses across Nigeria and beyond.As pioneers in the fintech sector,Almondis at the forefront of digital finance,offering a range of services including decentralized finance (DeFi),secure payment solutions,and comprehensive financial management tools. Our team comprises experienced professionals passionate about advancing financial inclusion and driving economic growth.Through our user-friendly platform,we strive to make banking more accessible,efficient,and transparent. At Almond,we are committed to delivering exceptional value and continuously evolving to meet the needs of our clients.Join us on our journey to revolutionize finance with innovative solutions that shape the future of money.**Keywords:**Almondfintech,AlmondNigeria,financialtechnology,startup,DeFisolutions,digitalfinancialservices.",
};
const page = () => {
  return (
    <div>
      <AlmondAboutUs />
    </div>
  );
};

export default page;
