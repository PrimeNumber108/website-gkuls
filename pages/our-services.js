import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="de-blanc"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">de-blanc</h3>
            <p className="leading-6 text-center text-white">
              From Facebook to TikTok, we craft tailored strategies to elevate your online presence. Maximize
              engagement, reach your target audience, and amplify your brand&apos;s story across platforms. Let us
              navigate the ever-evolving digital landscape for you!
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Over the past years, we have assisted more than 24,000 businesses from diverse industries in substantially increasing their revenue."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2023, we gained an additional 3,500 new clients and supported them in achieving remarkable results. profitability."
        />
      </div>
    </>
  );
};

export default Services;
