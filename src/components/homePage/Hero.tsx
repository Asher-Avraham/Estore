import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import largeheroVector from "@/assets/svgs/largeheroVector.svg";
import smallheroVector from "@/assets/svgs/smallheroVector.svg";

import heroImage from "@/assets/images/homePage/heroImage.jpeg";

// TODO - fix the placenent of the vertical separator

const Hero = () => {
  return (
    <div className="bg-homeGray">
      <div className="p-4 pt-7">
        <h1 className="font-rubik text-4xl font-black">
          <span className="block">FIND CLOTHES</span>
          <span className="block">THAT MATCHES</span>{" "}
          <span className="block">YOUR STYLE</span>{" "}
        </h1>
        <p className="py-2 font-jakarta font-extralight">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button className="text-md my-4 w-full rounded-[62px] bg-black p-8">
          Shop Now
        </Button>
        <div className="flex">
          <div className="items-star w-1/2 flex-col justify-start pl-8">
            <div className="font-rubikn text-2xl font-bold text-black">
              200+
            </div>
            <div className="font-rubik text-xs font-normal leading-snug text-black text-opacity-60">
              International Brands
            </div>
          </div>
          <div>
            <Separator orientation="vertical" className="mx-4" />
          </div>
          <div className="inline-flex h-12 w-[117px] flex-col items-start justify-start">
            <div className="font-rubik text-2xl font-bold text-black">
              2,000+
            </div>
            <div className="font-rubik text-xs font-normal leading-snug text-black text-opacity-60">
              High-Quality Products
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="mx-auto p-4">
              <div className="font-rubik text-2xl font-bold text-black">
                30,000+
              </div>
              <div className="font-rubik text-xs font-normal leading-snug text-black text-opacity-60">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          className="absolute right-7 top-10 z-10"
          src={largeheroVector}
          alt="decorative diamond"
        />
        <Image
          className="absolute left-7 top-40 z-10"
          src={smallheroVector}
          alt="decorative diamond"
        />
        {/* TODO - fix the image size   */}
        <Image
          // className="h-[437px] -translate-x-2 scale-[1.16] object-cover object-top"
          src={heroImage}
          alt="two models wearing the shops clothing"
        />
      </div>
    </div>
  );
};

export default Hero;
