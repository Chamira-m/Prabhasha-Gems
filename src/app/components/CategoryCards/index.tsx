import React from "react";
import SingleCard from "./singleCard";
import { CategoryCardType } from "../types/categoryCardTypes";
import sapphire from "../../../public/images/home/categoryCard/sapphire.png";
import jewellery from "../../../public/images/home/categoryCard/jewellery.png";
import fine from "../../../public/images/home/categoryCard/fine.png";
import luxury from "../../../public/images/home/categoryCard/luxury.png";

const CategoryCards = () => {
  const categoryCardData: CategoryCardType[] = [
    {
      id: 1,
      image: sapphire,
      title: "SAPPHIRES",
    },
    {
      id: 2,
      image: jewellery,
      title: "Jewellery ",
    },
    {
      id: 3,
      image: fine,
      title: "FINE Jeweller ",
    },
    {
      id: 4,
      image: luxury,
      title: "Luxury gifts",
    },
  ];
  return (
    <div className=" mx-auto w-full py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryCardData.map((item) => (
          <SingleCard key={item.id} categoryCardType={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
