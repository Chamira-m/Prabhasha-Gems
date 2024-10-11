import React from "react";
import Image from "next/image";
import { singleProductcardType } from "../types/singleProductcardType";

const SingleProductCard = ({
  singleProductcardType,
}: {
  singleProductcardType: singleProductcardType;
}) => {
  const { image, title, price } = singleProductcardType;

  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow-md w-32 h-48 xs:w-36 xs:h-52 sm:w-44 sm:h-56 md:w-36 md:h-52 lg:w-[200px] lg:h-[320px] xl:w-[260px] xl:h-[360px] 2xl:w-[278px] 2xl:h-[383px] 3xl:w-[300px] 3xl:h-[420px] 4xl:w-[320px] 4xl:h-[450px] flex flex-col items-center justify-center ">
      <Image
        className="object-cover xs:w-full xs:h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full 2xl:w-full 2xl:h-full 3xl:w-full 3xl:h-full 4xl:w-full 4xl:h-full rounded-t-xl"
        src={image}
        alt={title}
        width={500}
        height={300}
        layout="fixed"
        objectFit="cover"
        loading="lazy"
      />
      <div className="p-1 xs:p-1 sm:p-2 md:p-2 lg:p-2 xl:p-4 2xl:p-4 3xl:p-5 4xl:p-6">
        <h1 className="text-blueGray text-[8px] xs:text-[9px] sm:text-[9px] md:text-[9px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[19px] 4xl:text-[21px] text-center font-mulish-semiBold">
          {title}
        </h1>
        <h1 className="text-darkMint text-[8px] xs:text-[9px] sm:text-[9px] md:text-[9px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[19px] 4xl:text-[21px] text-center font-mulish-semiBold">
          LKR {price}
        </h1>
      </div>
    </div>
  );
};

export default SingleProductCard;
