import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-5.jpg"}
          alt="de-blanc"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">de-blanc</h3>
            <p className="leading-6 text-center text-white">
              Strategic Insights, Creative Solutions, Marketing Excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">More than 9 years of establishment</h3>
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
          Welcome to DE-BLANC, where passion meets creativity, crafting an impressive journey in the world of marketing.
          With a decade of experience, we are not just a company; we are a story of perseverance, dedication, and
          constant innovation.
        </p>
        <p>
          <b>The Creative Journey</b>: Our journey began with a dream to build groundbreaking strategies, delivering
          true value to our clients. From the very first steps, we shaped ourselves with an unwavering commitment to
          continuous improvement and the creation of effective strategies.
        </p>
        <p>
          <b>Expert Team</b>: We take pride in our team of talented and passionate experts, from strategic planners to
          creative content creators. With diversity and in-depth knowledge, we continuously train and develop ourselves
          to meet the ever-evolving challenges of the market.
        </p>
        <p>
          <b>We Bridge Connections</b>: We not only create strategies but also act as a bridge connecting brands and
          customers. With a focus on a profound understanding of the target audience, we ensure that every strategy
          communicates authentically and effectively.
        </p>
        <p>
          <b>Achievements and Commitments</b>: With over a decade in the industry, we have achieved significant
          milestones, from building brands to enhancing market visibility. Committed to continuous innovation, we are
          always ready to accompany you on your journey to success.
        </p>
        <p>
          <b>Promising Future</b>: With eyes set on the future, we are confident that the upcoming years will continue
          to be marked by new strides, innovative strategies, and new success stories. Join DE-BLANC, where innovation
          and success become a reality.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-6.jpg"}
            alt="de-blanc"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[700px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">Why Should You Choose Us?</h3>
            <p className="leading-6 text-center text-white">
              - Innovative Strategies <br />
              - Dedicated Team <br />
              - Proven Track Record <br />- Client-Centric Approach
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
