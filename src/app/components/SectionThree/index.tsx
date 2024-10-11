import React from "react";
import Image from "next/image";
import Section31 from "../../../public/images/home/section31.png";
import SingleProductCard from "../Common/SingleProductCard";
import { singleProductcardType } from "../types/singleProductcardType";
import single from "../../../public/images/home/singleCard1.png";
import Button from "../Common/Button";

function SectionThree() {
  const singleProdutData: singleProductcardType[] = [
    {
      id: 1,
      image: single,
      title: "Blue Sapphire White Gold earrings",
      price: "153,990",
    },
    {
      id: 2,
      image: single,
      title: "Blue Sapphire White Gold earrings ",
      price: "153,990",
    },
    {
      id: 3,
      image: single,
      title: "Blue Sapphire White Gold earrings",
      price: "153,990",
    },
    {
      id: 4,
      image: single,
      title: "Blue Sapphire White Gold earrings",
      price: "153,990",
    },
  ];
  const limitedProducts = singleProdutData.slice(0, 2);
  return (
    <>
      <div className="md:block hidden w-full mb-2">
        {" "}
        <div className="grid grid-cols-2">
          <Image
            className="w-full md:h-[400px] lg:h-[600px] xl:h-[690px] 2xl:h-[740px] 3xl:h-[810px] 4xl:h-[860px] md:px-3 lg:p-4 xl:p-5 2xl:p-6 3xl:p-7 4xl:p-8"
            src={Section31}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <div className="text-center">
            <h2 className="uppercase md:text-[18px] lg:text-[30px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[44px] 4xl:text-[52px] text-darkBlue font-mulish-semiBold">
              <span className="text-darkMint md:text-[18px] lg:text-[30px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[44px] 4xl:text-[52px] font-mulish-extraBold">
                Fine Jewelry
              </span>
              <span> for Life’s</span>
            </h2>
            <h2 className="uppercase md:text-[18px] lg:text-[30px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[44px] 4xl:text-[52px] text-darkBlue font-mulish-semiBold gap-4">
              Finest Moments
            </h2>
            <div className="flex justify-center flex-wrap gap-5 md:gap-7 lg:gap-7 xl:gap-10 2xl:gap-12 3xl:gap-16 4xl:gap-20 mt-2">
              {limitedProducts.map((product) => (
                <SingleProductCard
                  key={product.id}
                  singleProductcardType={product}
                />
              ))}
            </div>
            <p className="md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[17px] 4xl:text-[19px] text-blueGray text-justify md:mt-4 lg:mt-6 xl:mt-10 2xl:mt-11 3xl:mt-10 4xl:mt-16 font-mulish-lightItalic">
              Celebrate life’s most precious moments with our exquisite fine
              jewelry. Each piece is thoughtfully designed and meticulously
              crafted to honor the milestones that matter most. Whether it’s a
              timeless gift or a personal treasure, our fine jewelry captures
              the essence of elegance and grace, making every moment
              unforgettable. Embrace the luxury and beauty that define life’s
              finest moments.
            </p>
            <div className="md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-9 4xl:mt-10  mb-5 flex justify-center">
              <Button link="/about" title="FIND MORE FINE JEWELRY" />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Image
              className=" w-full h-[130px] xs:h-[147px] sm:h-[160px]"
              src={Section31}
              alt="ImageOne"
              width={500}
              height={300}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 text-left ml-2">
            <h2 className="uppercase text-[15px] xs:text-[17px] sm:text-[19px] text-darkBlue font-mulish-semiBold">
              <span className="text-darkMint text-[15px] xs:text-[17px] sm:text-[19px] font-mulish-extraBold ">
                Fine Jewelry
              </span>
              <span> for Life’s</span>
            </h2>
            <h2 className="uppercase text-[15px] xs:text-[17px] sm:text-[19px] text-darkBlue font-mulish-semiBold gap-4">
              Finest Moments
            </h2>
            <p className="text-[7px] xs:text-[8px] sm:text-[9px] text-blueGray mt-3 text-justify font-mulish-lightItalic">
              Celebrate life’s most precious moments with our exquisite fine
              jewelry. Each piece is thoughtfully designed and meticulously
              crafted to honor the milestones that matter most. Whether it’s a
              timeless gift or a personal treasure, our fine jewelry captures
              the essence of elegance and grace, making every moment
              unforgettable. Embrace the luxury and beauty that define life’s
              finest moments.
            </p>
          </div>
        </div>
        <div className=" flex justify-center flex-wrap mt-4 gap-9 xs:gap-10 sm:gap-12">
          {limitedProducts.map((product) => (
            <SingleProductCard
              key={product.id}
              singleProductcardType={product}
            />
          ))}
        </div>
        <div className="mt-3 xs:mt-5 sm:mt-7 mb-5 flex justify-center">
          <Button link="/about" title="FIND MORE FINE JEWELRY" />
        </div>
      </div>
    </>
  );
}

export default SectionThree;
