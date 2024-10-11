import React from "react";
import { singleProductcardType } from "../types/singleProductcardType";
import single from "../../../public/images/home/singleCard1.png";
import SingleProductCard from "../Common/SingleProductCard";
import Image from "next/image";
import ImageOne from "../../../public/images/home/section11.png";
import ImageTwo from "../../../public/images/home/section12.png";
import Button from "../Common/Button";

const SectionOne = () => {
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
  const limitedProducts = singleProdutData.slice(0, 4);
  const limitedProductsMobile = singleProdutData.slice(0, 2);

  return (
    <>
      <div className="md:block hidden w-full md:mt-3 lg:mt-4 xl:mt-4 2xl:mt-4 3xl:mt-5 4xl:mt-6">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 md:gap-5 lg:gap-6 xl:gap-x-12 2xl:gap-x-14 3xl:gap-x-36 3xl:gap-y-16 4xl:gap-x-56 4xl:gap-y-20">
              {limitedProducts.map((product) => (
                <SingleProductCard
                  key={product.id}
                  singleProductcardType={product}
                />
              ))}
            </div>
            <div className="md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-7 3xl:mt-8 flex justify-center">
              <Button link="/about" title="Explore More" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="md:text-[20px] lg:text-[32px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[40px] 4xl:text-[44px] font-bold text-blueGray text-right font-mulish-black">
              SHINE WITH CONFIDENCE
            </h2>
            <h2 className="md:text-[20px] lg:text-[32px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[40px] 4xl:text-[44px] text-darkMint text-right font-mulish-semiBold">
              SPARKLE WITH QUALITY
            </h2>
            <p className="md:text-[10px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] 4xl:text-[24px] text-blueGray text-justify mt-2 font-mulish-lightItalic">
              we believe that jewellery is more than just an accessory; its a
              reflection of your inner confidence and unique style. Each piece
              in our collection is carefully crafted from the finest gemstones
              and materials, ensuring that every detail meets the highest
              standards of quality. When you wear our jewellery, you don’t just
              wear a beautiful adornment — you carry a legacy of craftsmanship,
              integrity, and timeless elegance. Discover the brilliance that
              complements your confidence, and let every piece you wear tell a
              story of unparalleled quality.
            </p>
            <Image
              className=" w-full md:h-[136px] lg:h-[175px] xl:h-[260px] 2xl:h-[281px] md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-11 3xl:mt-12 4xl:mt-14"
              src={ImageOne}
              alt="ImageOne"
              width={500}
              height={300}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
            <Image
              className=" w-full md:h-[136px] lg:h-[175px] xl:h-[260px] 2xl:h-[281px] md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-4 3xl:mt-5 4xl:mt-6"
              src={ImageTwo}
              alt="ImageTwo"
              width={500}
              height={300}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <h2 className="text-[17x] font-mulish-black text-blueGray text-center">
          SHINE WITH CONFIDENCE
        </h2>
        <h2 className="text-[17px] text-darkMint text-center font-mulish-semiBold">
          SPARKLE WITH QUALITY
        </h2>
        <p className="text-[8px] text-blueGray text-justify mt-2 font-mulish-lightItalic">
          we believe that jewellery is more than just an accessory; its a
          reflection of your inner confidence and unique style. Each piece in
          our collection is carefully crafted from the finest gemstones and
          materials, ensuring that every detail meets the highest standards of
          quality. When you wear our jewellery, you don’t just wear a beautiful
          adornment — you carry a legacy of craftsmanship, integrity, and
          timeless elegance. Discover the brilliance that complements your
          confidence, and let every piece you wear tell a story of unparalleled
          quality.
        </p>
        <div className="flex justify-center flex-wrap gap-5 xs:gap-7 sm:gap-7 mt-2">
          {limitedProductsMobile.map((product) => (
            <SingleProductCard
              key={product.id}
              singleProductcardType={product}
            />
          ))}
        </div>
        <div className="mt-3 xs:mt-5 sm:mt-7 flex justify-center">
          <Button link="/about" title="Explore More" />
        </div>
        <Image
          className="w-full h-[110px] xs:h-[127px] sm:h-[140px] mt-5"
          src={ImageOne}
          alt="ImageOne"
          width={500}
          height={300}
          layout="fixed"
          objectFit="cover"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SectionOne;
