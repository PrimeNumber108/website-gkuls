/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "Khalid Abdullah",
    comment:
      "Effective and flexible. This marketing company is always adaptable to market innovations, maintaining high performance with advertising strategies.",
    image: "/image/users/user-1.jpg",
    rating: 5,
  },
  {
    name: "Jinni Hwang",
    comment:
      "I run a small company without a strong in-house marketing team, but thanks to this company, all our projects have been successful. Their expertise and dedication have played a crucial role in our achievements.",
    image: "/image/users/user-2.jpg",
    rating: 5,
  },
  {
    name: "Antonio Dela Cruz",
    comment:
      "All the projects I have worked with them have been extremely effective. They are experienced and very knowledgeable about the tiktok market.",
    image: "/image/users/user-3.jpg",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    comment:
      "Good measurement and reporting capabilities. They not only implement strategies but also provide detailed reporting and clear performance evaluations.",
    image: "/image/users/user-4.jpg",
    rating: 5,
  },
  {
    name: "Amber Liu",
    comment:
      "Profound strategic thinking. This company has the ability to assess the market and a clear understanding of competitors, helping us seize opportunities in a timely manner.",
    image: "/image/users/user-5.jpg",
    rating: 4,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img src="/image/banners/banner-1.jpg" alt="de-blanc" className="w-full h-full brightness-[0.9]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">de-blanc</h3>
            <p className="leading-6 text-center text-white">
              Strategic Insights, Creative Solutions, Marketing Excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-2.jpg"
            alt="de-blanc"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Empowering Success: Your Premier Destination for Specialized Marketing Applications. Unleash Your
                  Brand&apos;s Potential with Our Tailored Solutions.
                </p>
                <Link href="/our-services" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">OUR SERVICES</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-3.jpg"
            alt="de-blanc"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Decade-Long Journey: Pioneering Marketing Solutions Since 2014. Our Commitment, Your Success – A
                  Decade of Expertise in Marketing Innovation.
                </p>
                <Link href="/about" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">ABOUT US</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[21px] lg:py-16 lg:px-14 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 border border-solid border-[#5d92ff] rounded-lg gap-2.5"
            >
              <img src={user.image} alt="" className="w-[130px] h-[130px] rounded-[50%] object-cover object-top" />
              <p className="text-lg">{user.name}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={classnames("w-5 h-5", index + 1 <= user.rating ? "text-yellow-300" : "text-gray-300")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <p className="leading-6 text-center break-words">{user.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
