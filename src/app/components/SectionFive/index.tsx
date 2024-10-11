import React from "react";
import Image from "next/image";
import ImageOne from "../../../public/images/home/sectionFive/section51.png";
import ImageTwo from "../../../public/images/home/sectionFive/section52.png";
import ImageThree from "../../../public/images/home/sectionFive/section53.png";
import Button from "../Common/Button";

const SectionFive = () => {
  return (
    <>
      <div className="md:block hidden mt-5 mb-5">
        <h1 className="uppercase md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[44px] 4xl:text-[48px] text-blueGray text-center font-mulish-semiBold">
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
        <p className="md:text[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[22px] 4xl:text-[26px]text-blueGray text-center mt-2 mb-4 font-mulish-lightItalic">
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
        <p className="md:text[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[22px] 4xl:text-[26px] text-blueGray text-center mt-6 mb-4 font-mulish-lightItalic">
          Discover our rich history, the passion that drives us, and the values
          that continue to guide us by exploring our story
        </p>
        <div className="md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-9 4xl:mt-10  mb-5 flex justify-center">
          <Button link="/about" title="About Us" />
        </div>

        <div className="flex flex-row md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 4xl:gap-7 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-7 3xl:mt-8 4xl:mt-9 justify-center">
          <Image
            className="md:w-[233px] md:h-[233px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[420px] 2xl:h-[420px] 3xl:w-[500px] 3xl:h-[500px] 4xl:w-[550px] 4xl:h-[550px] rounded-[20px]"
            src={ImageOne}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="md:w-[233px] md:h-[233px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[420px] 2xl:h-[420px] 3xl:w-[500px] 3xl:h-[500px] 4xl:w-[550px] 4xl:h-[550px] rounded-[20px]"
            src={ImageTwo}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="md:w-[233px] md:h-[233px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[420px] 2xl:h-[420px] 3xl:w-[500px] 3xl:h-[500px] 4xl:w-[550px] 4xl:h-[550px] rounded-[20px]"
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
            className="w-[100px] h-[100px] xs:w-[121px] xs:h-[121px] sm:w-[130px] sm:h-[130px] rounded-[10px]"
            src={ImageOne}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="w-[100px] h-[100px] xs:w-[121px] xs:h-[121px] sm:w-[130px] sm:h-[130px] rounded-[10px]"
            src={ImageTwo}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <Image
            className="w-[100px] h-[100px] xs:w-[121px] xs:h-[121px] sm:w-[130px] sm:h-[130px] rounded-[10px]"
            src={ImageThree}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <p className="text-[7px] xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 mb-4 font-mulish-lightItalic">
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
        <p className="text-[7px] xs:text-[8px] sm:text-[10px] text-blueGray text-center mt-4 font-mulish-lightItalic">
          Discover our rich history, the passion that drives us, and the values
          that continue to guide us by exploring our story
        </p>
        <div className="mt-3 xs:mt-5 sm:mt-7 mb-5 flex justify-center">
          <Button link="/about" title="About Us" />
        </div>
      </div>
    </>
  );
};

export default SectionFive;
