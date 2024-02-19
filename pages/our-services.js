import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.webp"}
          alt="gkuls"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">gkuls</h3>
            <p className="leading-6 text-center text-white">
              At the heart of every product person, there’s a desire to make someone’s life easier or simpler. If we
              listen to the customer and give them what they need, they’ll reciprocate with love and loyalty to your
              brand.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-4.png"
          content="We have provided Marketing support to more than 17,000 businesses in many different industries to significantly increase their revenue over the years."
        />
        <ProductAds
          image="/image/services/service-5.jpg"
          content="In 2024, we added 2,000 new customers and helped them achieve profits beyond their target with more various products area."
        />
      </div>
    </>
  );
};

export default Services;
