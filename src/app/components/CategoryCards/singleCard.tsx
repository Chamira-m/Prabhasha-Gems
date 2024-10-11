import React from "react";
import Image from "next/image";
import { CategoryCardType } from "../types/categoryCardTypes";

export default function SingleCard({
  categoryCardType,
}: {
  categoryCardType: CategoryCardType;
}) {
  const { image, title } = categoryCardType;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 3xl:p-6 4xl:p-7">
      <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-2 xl:space-x-4 2xl:space-x-8 3xl:space-x-9 4xl:space-x-10">
        <div className="relative flex-shrink-0 h-5 w-5  xs:h-6 xs:w-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 4xl:w-18 4xl:h-18">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
            priority
          />
        </div>
        <h2 className="font-semibold text-gray-800 uppercase text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
