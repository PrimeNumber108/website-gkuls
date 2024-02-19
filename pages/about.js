import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-5.jpeg"}
          alt="gkuls"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">gkuls</h3>
            <p className="leading-6 text-center text-white">
              Our company was found by a group of experient and professional who are always keep going to find the
              better solution to your problems.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">MORE THAN 7 YEARS OF ESTABLISHMENT</h3>
        <div>
          <svg height="100" viewBox="0 0 8 100" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m1 100c0-3.845 6-3.845 6-7.69s-6-3.845-6-7.691c0-3.845 6-3.845 6-7.69 0-3.847-6-3.847-6-7.693 0-3.843 6-3.843 6-7.687 0-3.845-6-3.845-6-7.691 0-3.845 6-3.845 6-7.69 0-3.846-6-3.846-6-7.69 0-3.847 6-3.847 6-7.694s-6-3.847-6-7.695c0-3.846 6-3.846 6-7.693 0-3.849-6-3.849-6-7.698s6-3.849 6-7.698"
              fill="none"
              stroke="#daa855"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>
          GKULS was established in 2017. After 7 years of operation, our company now has more than 120 experienced
          employees in the field of online marketing and advertising.
        </p>
        <p>
          We have approached and cooperated with more than 17,000 individual and business customers in Asia, and some
          countries in Europe.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-6.jpg"}
            alt="gkuls"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[700px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">WHY SHOULD YOU CHOOSE US?</h3>
            <p className="leading-6 text-center text-white">
              - Proven Experts: Rely on our experienced team with a successful track record in diverse industries.
              <br />
              - Innovative Solutions: Stay ahead with cutting-edge strategies for a standout brand.
              <br />
              - Client-Focused: Experience personalized attention and flexible strategies.
              <br />
              - Measurable Results: Achieve tangible success with our data-driven approach.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
