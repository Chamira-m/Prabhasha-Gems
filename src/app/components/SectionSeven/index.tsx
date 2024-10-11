import Image from "next/image";
import React from "react";
import Fb from "../../../public/images/home/socialMedia/fb.png";
import insta from "../../../public/images/home/socialMedia/insta.png";
import x from "../../../public/images/home/socialMedia/x.png";
import tiktok from "../../../public/images/home/socialMedia/tiktok.png";
import ImageOne from "../../../public/images/home/sectionSeven/section71.png";
import ImageTwo from "../../../public/images/home/sectionSeven/section72.png";
import ImageThree from "../../../public/images/home/sectionSeven/section73.png";
import ImageFour from "../../../public/images/home/sectionSeven/section74.png";
import ImageFive from "../../../public/images/home/sectionSeven/section75.png";
import ImageSix from "../../../public/images/home/sectionSeven/section76.png";

import Link from "next/link";
import Button from "../Common/Button";

const SectionSeven = () => {
  // const socialData = [
  //   {
  //     id:1,
  //     image:imageOne
  //   },
  //   {
  //     id:2,
  //     image:imageOne
  //   },
  //   {
  //     id:3,
  //     image:imageOne
  //   },
  //   {
  //     id:4,
  //     image:imageOne
  //   },
  // ]
  return (
    <div className=" w-full mb-3">
      <div className="mt-10 md:grid md:grid-cols-2">
        <div className="md:px-2">
          <h1 className="uppercase md:text-left xs:text-center text-[15px] xs:text-[17px] sm:text-[19px] md:text-[24px] lg:text-[30px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[44px] 4xl:text-[48px] text-blueGray font-mulish-semiBold">
            Discover, Like, and{" "}
            <span className="text-darkMint font-mulish-extraBold">Share</span>{" "}
          </h1>
          <p className="text-[7px] xs:text-[8px] sm:text-[10px] md:text[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] 4xl:text-[24px] text-blueGray mt-2 font-mulish-lightItalic text-justify">
            For generations, our brand has been synonymous with unparalleled
            craftsmanship and timeless elegance. What began as a small family
            business has blossomed into a trusted name in the world of gems and
            jewelry, where tradition and innovation come together in every piece
            we create. Each gemstone is carefully selected, and every piece of
            jewelry is meticulously crafted, reflecting our commitment to
            quality and artistry. We take pride in sourcing ethically mined
            premium Ceylon sapphires, ensuring that each gem not only radiates
            beauty but also upholds the highest standards of responsibility and
            sustainability.
          </p>
          <h1 className="text-[7px] xs:text-[8px] sm:text-[10px] md:text[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] 4xl:text-[24px] font-mulish-medium text-darkMint mt-2 md:mt-4 text-center md:text-left">
            #PrabhashaGems
          </h1>
          <div className="flex flex-row mt-5 xs:mt-6 sm:mt-7 gap-2 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-8 justify-center md:justify-start">
            {/* {socialData.map((data)=>(
           
            ))} */}
            <Link href="https://www.facebook.com">
              <Image
                className="w-[18px] h-[17px] xs:w-[20px] xs:h-[19px] sm:w-[22px] sm:[21px] md:w-[30px] md:h-[29px] lg:w-[40px] lg:h-[39px] xl:w-[52px] xl:h-[50px] 2xl:w-[55px] 2xl:h-[53px] 3xl:w-[82px] 3xl:h-[80px] 4xl:w-[87px] 4xl:h-[85px] rounded-full"
                src={Fb}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
            </Link>
            <Link href="https://www.instagram.com">
              <Image
                className="w-[18px] h-[17px] xs:w-[20px] xs:h-[19px] sm:w-[22px] sm:[21px] md:w-[30px] md:h-[29px] lg:w-[40px] lg:h-[39px] xl:w-[52px] xl:h-[50px] 2xl:w-[55px] 2xl:h-[53px] 3xl:w-[82px] 3xl:h-[80px] 4xl:w-[87px] 4xl:h-[85px] rounded-full"
                src={insta}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
            </Link>{" "}
            <Link href="https://www.x.com">
              <Image
                className="w-[18px] h-[17px] xs:w-[20px] xs:h-[19px] sm:w-[22px] sm:[21px] md:w-[30px] md:h-[29px] lg:w-[40px] lg:h-[39px] xl:w-[52px] xl:h-[50px] 2xl:w-[55px] 2xl:h-[53px] 3xl:w-[82px] 3xl:h-[80px] 4xl:w-[87px] 4xl:h-[85px] rounded-full"
                src={x}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
            </Link>{" "}
            <Link href="https://www.tiktok.com">
              <Image
                className="w-[18px] h-[17px] xs:w-[20px] xs:h-[19px] sm:w-[22px] sm:[21px] md:w-[30px] md:h-[29px] lg:w-[40px] lg:h-[39px] xl:w-[52px] xl:h-[50px] 2xl:w-[55px] 2xl:h-[53px] 3xl:w-[82px] 3xl:h-[80px] 4xl:w-[87px] 4xl:h-[85px] rounded-full"
                src={tiktok}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-3">
          <div className="flex flex-row xs:justify-center md:justify-end mt-3 md:mt-0">
            <div className="grid grid-cols-3 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-4">
              <Image
                className="xs:w-[102px] xs:h-[102px] sm:w-[110px] sm:[110px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] 2xl:w-[175px] 2xl:h-[175px] 3xl:w-[200px] 3xl:h-[200px] 4xl:w-[220px] 4xl:h-[220px]"
                src={ImageOne}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
              <Image
                className="xs:w-[102px] xs:h-[102px] sm:w-[110px] sm:[110px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] 2xl:w-[175px] 2xl:h-[175px] 3xl:w-[200px] 3xl:h-[200px] 4xl:w-[220px] 4xl:h-[220px]"
                src={ImageTwo}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
              <Image
                className="xs:w-[102px] xs:h-[102px] sm:w-[110px] sm:[110px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] 2xl:w-[175px] 2xl:h-[175px] 3xl:w-[200px] 3xl:h-[200px] 4xl:w-[220px] 4xl:h-[220px]"
                src={ImageThree}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
              <Image
                className="xs:w-[102px] xs:h-[102px] sm:w-[110px] sm:[110px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] 2xl:w-[175px] 2xl:h-[175px] 3xl:w-[200px] 3xl:h-[200px] 4xl:w-[220px] 4xl:h-[220px]"
                src={ImageFour}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
              <Image
                className="xs:w-[102px] xs:h-[102px] sm:w-[110px] sm:[110px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] 2xl:w-[175px] 2xl:h-[175px] 3xl:w-[200px] 3xl:h-[200px] 4xl:w-[220px] 4xl:h-[220px]"
                src={ImageFive}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
              <Image
                className="xs:w-[102px] xs:h-[102px] sm:w-[110px] sm:[110px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] 2xl:w-[175px] 2xl:h-[175px] 3xl:w-[200px] 3xl:h-[200px] 4xl:w-[220px] 4xl:h-[220px]"
                src={ImageSix}
                alt="ImageOne"
                width={500}
                height={300}
                layout="fixed"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-3 xs:mt-5 sm:mt-7 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-9 4xl:mt-10 mb-5 flex justify-center">
            <Button link="/about" title="Visit instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
