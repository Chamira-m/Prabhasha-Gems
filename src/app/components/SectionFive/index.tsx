import Link from "next/link";
import React from "react";
import Image from "next/image";
import ImageOne from "../../../public/images/home/sectionFive/section51.png";
import ImageTwo from "../../../public/images/home/sectionFive/section52.png";
import ImageThree from "../../../public/images/home/sectionFive/section53.png";

const SectionFive = () => {
  return (
    <>
      <div className="md:block hidden mt-5 mb-5">
        <h1 className="uppercase md:text-[28px] lg:text-[36px] xl:text-[40px] text-blueGray text-center font-mulish-semiBold">
          A Legacy of{" "}
          <span className="text-darkMint font-mulish-extraBold">
            Craftsmanship,
          </span>{" "}
          A Tradition of
          <span className="text-darkMint font-mulish-extraBold">
            {" "}
            Excellence.
          </span>{" "}
        </h1>
        <p className="md:text[12px] lg:text-[16px] xl:text-base text-blueGray text-center mt-2 mb-4 font-mulish-lightItalic">
          For generations, our brand has been synonymous with unparalleled
          craftsmanship and timeless elegance. What began as a small family
          business has blossomed into a trusted name in the world of gems and
          jewelry, where tradition and innovation come together in every piece
          we create. Each gemstone is carefully selected, and every piece of
          jewelry is meticulously crafted, reflecting our commitment to quality
          and artistry. We take pride in sourcing ethically mined premium Ceylon
          sapphires, ensuring that each gem not only radiates beauty but also
          upholds the highest standards of responsibility and sustainability.
        </p>
        <p className="md:text[12px] lg:text-[16px] xl:text-base text-blueGray text-center mt-6 mb-4 font-mulish-lightItalic">
          Discover our rich history, the passion that drives us, and the values
          that continue to guide us by exploring our story
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            className="uppercase inline-block px-4 py-2 text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
                       md:text-[10px] md:px-4 md:py-2
            lg:text-[12px] lg:px-5 lg:py-2.5
            xl:text-[15px] xl:px-6 xl:py-3"
          >
            {" "}
            About Us
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-5 justify-center">
          <Image
            className="md:w-[233px] md:h-[233px] lg:w-[300px] lg:h-[300px] xl:w-[433px] xl:h-[433px] rounded-[20px]"
            src={ImageOne}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="md:w-[233px] md:h-[233px] lg:w-[300px] lg:h-[300px] xl:w-[433px] xl:h-[433px] rounded-[20px]"
            src={ImageTwo}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="md:w-[233px] md:h-[233px] lg:w-[300px] lg:h-[300px] xl:w-[433px] xl:h-[433px] rounded-[20px]"
            src={ImageThree}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="block md:hidden mt-2 mb-2">
        <h1 className="uppercase xs:text-[17px] sm:text-[19px] text-blueGray text-left font-mulish-semiBold">
          A Legacy of{" "}
          <span className="text-darkMint font-mulish-extraBold">
            Craftsmanship,
          </span>{" "}
        </h1>
        <h1 className="uppercase xs:text-[17px] sm:text-[19px] text-blueGray text-left font-mulish-semiBold">
          A Tradition of
          <span className="text-darkMint font-mulish-extraBold">
            {" "}
            Excellence.
          </span>
        </h1>
        <div className="flex flex-row gap-2 mt-4 justify-center">
          <Image
            className="xs:w-[121px] xs:h-[121px] rounded-[10px]"
            src={ImageOne}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="xs:w-[121px] xs:h-[121px] rounded-[10px]"
            src={ImageTwo}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="xs:w-[121px] xs:h-[121px] rounded-[10px]"
            src={ImageThree}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <p className=" xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 mb-4 font-mulish-lightItalic">
          For generations, our brand has been synonymous with unparalleled
          craftsmanship and timeless elegance. What began as a small family
          business has blossomed into a trusted name in the world of gems and
          jewelry, where tradition and innovation come together in every piece
          we create. Each gemstone is carefully selected, and every piece of
          jewelry is meticulously crafted, reflecting our commitment to quality
          and artistry. We take pride in sourcing ethically mined premium Ceylon
          sapphires, ensuring that each gem not only radiates beauty but also
          upholds the highest standards of responsibility and sustainability.
          offer.
        </p>
        <p className="xs:text-[8px] sm:text-[10px] text-blueGray text-center mt-4 font-mulish-lightItalic">
          Discover our rich history, the passion that drives us, and the values
          that continue to guide us by exploring our story
        </p>
        <div className="mt-3 flex justify-center">
          <Link
            href="/about"
            className="uppercase inline-block px-4 py-2 text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
            xs:text-[7px] xs:px-2 xs:py-1
            sm:text-[8px] sm:px-3 sm:py-1.5"
          >
            About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
