import React from "react";
import { singleProductcardType } from "../types/singleProductcardType";
import Im1 from "../../../public/images/home/sectionTwo/section21.png";
import Im2 from "../../../public/images/home/sectionTwo/section22.png";
import Im3 from "../../../public/images/home/sectionTwo/section23.png";
import Im4 from "../../../public/images/home/sectionTwo/section24.png";
import Im5 from "../../../public/images/home/sectionTwo/section25.png";
import Im6 from "../../../public/images/home/sectionTwo/section26.png";
import Im7 from "../../../public/images/home/sectionTwo/section27.png";
import Im8 from "../../../public/images/home/sectionTwo/section28.png";
import SingleProductCard from "../Common/SingleProductCard";
import Button from "../Common/Button";

function SectionTwo() {
  const singleProdutData: singleProductcardType[] = [
    {
      id: 1,
      image: Im1,
      title: "Ceylon Royal Blue Sapphire 3ct Pear Shaped Natural",
      price: "153,990",
    },
    {
      id: 2,
      image: Im2,
      title: "Ceylon Cornflower Blue Sapphire Cushion Shaped 4.35ct Heated",
      price: "153,990",
    },
    {
      id: 3,
      image: Im3,
      title: "Mozambique Ruby 2.34ct Oval Shaped Natural ",
      price: "153,990",
    },
    {
      id: 4,
      image: Im4,
      title: "Yellow Sapphire 6.23cts Emerald Shape Heated",
      price: "153,990",
    },
    {
      id: 5,
      image: Im5,
      title: "Pink Sapphire 4.45ct Cushion Shaped Natural",
      price: "153,990",
    },
    {
      id: 6,
      image: Im6,
      title: "Yellow Sapphire 2ct Round Shape Heated",
      price: "153,990",
    },
    {
      id: 7,
      image: Im7,
      title: "Ceylon Royal Blue Sapphire 1ct pair | Round Shape Heated ",
      price: "153,990",
    },
    {
      id: 8,
      image: Im8,
      title: "Hot Pink Sapphire 2ct Round Shape Heated",
      price: "153,990",
    },
  ];
  const limitedProducts = singleProdutData.slice(0, 8);
  const limitedProductsMobile = singleProdutData.slice(0, 4);

  return (
    <>
      <div className="md:block hidden mt-5">
        <h1 className="uppercase md:text-[26px] lg:text-[30px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[42px] 4xl:text-[46px] text-blueGray text-center font-mulish-semiBold">
          The Art of{" "}
          <span className="text-darkMint font-mulish-extraBold">
            Gemstones,
          </span>
          The Majesty of
          <span className="text-darkMint font-mulish-extraBold">
            {" "}
            Sapphires.
          </span>{" "}
        </h1>
        <p className="md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[17px] 4xl:text-[19px] text-blueGray text-center mt-2 mb-4 font-mulish-lightItalic">
          Discover the true artistry of gemstones and the unmatched majesty of
          Ceylons finest sapphires. Each piece in our collection is a
          celebration of nature’s brilliance, expertly crafted to reveal the
          vibrant colors and clarity that define exceptional quality. From the
          rich soils of Ceylon to your collection, our sapphires and gemstones
          are treasures that captivate the eye and elevate your style. Embrace
          the elegance and timeless beauty that only the finest gemstones can
          offer.
        </p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-4 md:gap-x-12 md:gap-y-6 lg:gap-x-14 lg:gap-y-8 xl:gap-x-16 xl:gap-y-10 2xl:gap-x-[68px] 2xl:gap-y-10 3xl:gap-x-36 3xl:gap-y-12 4xl:gap-x-[76px] 4xl:gap-y-14">
            {limitedProducts.map((product) => (
              <SingleProductCard
                key={product.id}
                singleProductcardType={product}
              />
            ))}
          </div>
        </div>
        <div className="md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-9 4xl:mt-10 mb-5 flex justify-center">
          <Button link="/about" title="FIND MORE SAPPHIRES" />
        </div>
      </div>
      <div className="block md:hidden mt-2">
        <h1 className="uppercase text-[15px] xs:text-[17px] sm:text-[19px] text-blueGray text-left font-mulish-semiBold">
          The Art of{" "}
          <span className="text-darkMint font-mulish-extraBold">
            Gemstones,
          </span>{" "}
        </h1>
        <h1 className="uppercase text-[15px] xs:text-[17px] sm:text-[19px] text-blueGray text-left font-mulish-semiBold">
          The Majesty of
          <span className="text-darkMint font-mulish-extraBold">
            {" "}
            Sapphires.
          </span>
        </h1>
        <p className="text-[7px] xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 mb-4 font-mulish-lightItalic">
          Discover the true artistry of gemstones and the unmatched majesty of
          Ceylons finest sapphires. Each piece in our collection is a
          celebration of nature’s brilliance, expertly crafted to reveal the
          vibrant colors and clarity that define exceptional quality. From the
          rich soils of Ceylon to your collection, our sapphires and gemstones
          are treasures that captivate the eye and elevate your style. Embrace
          the elegance and timeless beauty that only the finest gemstones can
          offer.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-x-7 gap-y-3 xs:gap-x-8 xs:gap-y-4 sm:gap-x-9 sm:gap-y-5 mt-2">
            {limitedProductsMobile.map((product) => (
              <SingleProductCard
                key={product.id}
                singleProductcardType={product}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 xs:mt-5 sm:mt-7 mb-5 flex justify-center">
          <Button link="/about" title="FIND MORE SAPPHIRES" />
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
