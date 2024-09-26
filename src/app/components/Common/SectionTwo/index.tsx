import React from "react";
import { singleProductcardType } from "../../types/singleProductcardType";
import Im1 from "../../../../public/images/home/sectionTwo/section21.png";
import Im2 from "../../../../public/images/home/sectionTwo/section22.png";
import Im3 from "../../../../public/images/home/sectionTwo/section23.png";
import Im4 from "../../../../public/images/home/sectionTwo/section24.png";
import Im5 from "../../../../public/images/home/sectionTwo/section25.png";
import Im6 from "../../../../public/images/home/sectionTwo/section26.png";
import Im7 from "../../../../public/images/home/sectionTwo/section27.png";
import Im8 from "../../../../public/images/home/sectionTwo/section28.png";
import SingleProductCard from "../SingleProductCard";
import Link from "next/link";

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
        <h1 className="text-[40px] text-blueGray text-center">
          The Art of <span className="text-darkMint">Gemstones,</span> The
          Majesty of
          <span className="text-darkMint"> Sapphires.</span>{" "}
        </h1>
        <p className="text-base text-blueGray text-center mt-2 mb-4">
          Discover the true artistry of gemstones and the unmatched majesty of
          Ceylons finest sapphires. Each piece in our collection is a
          celebration of nature’s brilliance, expertly crafted to reveal the
          vibrant colors and clarity that define exceptional quality. From the
          rich soils of Ceylon to your collection, our sapphires and gemstones
          are treasures that captivate the eye and elevate your style. Embrace
          the elegance and timeless beauty that only the finest gemstones can
          offer.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {limitedProducts.map((product) => (
            <SingleProductCard
              key={product.id}
              singleProductcardType={product}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            className="w-[200px] h-[40px] text-[15px] outline bg-white p-2 text-center font-semibold text-lightGray "
          >
            FIND MORE SAPPHIRES{" "}
          </Link>
        </div>
      </div>
      <div className="block lg:hidden mt-2">
        <h1 className="text-[17px] text-blueGray text-left">
          The Art of <span className="text-darkMint">Gemstones,</span>{" "}
        </h1>
        <h1 className="text-[17px] text-blueGray text-left">
          The Majesty of
          <span className="text-darkMint"> Sapphires.</span>
        </h1>
        <p className="text-[8px] text-blueGray text-justify mt-2 mb-4">
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
          <div className="grid grid-cols-2 gap-10 mt-2">
            {limitedProductsMobile.map((product) => (
              <SingleProductCard
                key={product.id}
                singleProductcardType={product}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            className="w-[93px] h-[20px] outline bg-white text-center p-1 font-semibold text-[7px] text-lightGray "
          >
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
