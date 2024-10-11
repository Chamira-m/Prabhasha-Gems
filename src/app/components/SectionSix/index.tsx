"use client";

import React, { useState, useEffect } from "react";
import Testimonial from "./testimonial";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "../../../public/images/home/sectionSix/section61.png";
import imageTwo from "../../../public/images/home/sectionSix/section62.png";
import imageThree from "../../../public/images/home/sectionSix/section63.png";
import imageFour from "../../../public/images/home/sectionSix/section64.png";

const SectionSix = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonialsData = [
    {
      id: 1,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Jacob Livian",
      location: "(Sri Lanka)",
      image: imageTwo,
    },
    {
      id: 2,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Jordini Silva",
      location: "(United States)",
      image: imageFour,
    },
    {
      id: 3,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Lokesh Sharma",
      location: "(India)",
      image: imageOne,
    },
    {
      id: 4,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Tharindu Godagedara",
      location: "(Sri Lanka)",
      image: imageThree,
    },
  ];

  return (
    <>
      <div className="md:block hidden md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-9 4xl:mt-10 mb-10">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <h2 className="uppercase md:text-[22px] lg:text-[28px] xl:text-[36px] 2xl:text-[40px] 3xl:text-[46px] 4xl:text-[50px] text-darkMint font-mulish-extraBold">
              Crafting Trust
            </h2>
            <h2 className="uppercase md:text-[22px] lg:text-[28px] xl:text-[36px] 2xl:text-[40px] 3xl:text-[46px] 4xl:text-[50px] font-bold text-blueGray font-mulish-semiBold">
              One Gem at a Time
            </h2>
          </div>
          <div className="col-span-2">
            <p className="md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] text-blueGray text-justify mt-2 font-mulish-lightItalic">
              We believe that jewellery is more than just an accessory; its a
              reflection of your inner confidence and unique style. Each piece
              in our collection is carefully crafted from the finest gemstones
              and materials, ensuring that every detail meets the highest
              standards of quality. When you wear our jewellery, you dont just
              wear a beautiful adornment — you carry a legacy of craftsmanship,
              integrity, and timeless elegance. Discover the brilliance that
              complements your confidence, and let every piece you wear tell a
              story of unparalleled quality.
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <h2 className="uppercase text-[15px] xs:text-[17px] sm:text-[19px] text-darkMint text-center font-mulish-extraBold">
          Crafting Trust
        </h2>
        <h2 className="uppercase text-[15px] xs:text-[17px] sm:text-[19px] xl:text-[40px] font-bold text-blueGray text-center font-mulish-semiBold">
          One Gem at a Time
        </h2>
        <p className="text-[7px] xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 font-mulish-lightItalic">
          We believe that jewellery is more than just an accessory; its a
          reflection of your inner confidence and unique style. Each piece in
          our collection is carefully crafted from the finest gemstones and
          materials, ensuring that every detail meets the highest standards of
          quality. When you wear our jewellery, you dont just wear a beautiful
          adornment — you carry a legacy of craftsmanship, integrity, and
          timeless elegance. Discover the brilliance that complements your
          confidence, and let every piece you wear tell a story of unparalleled
          quality.
        </p>
      </div>
      {isMounted && (
        <div className="flex justify-center xs:mt-1 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">
          <div className="md:w-11/12 w-11/12">
            <Slider {...settings}>
              {testimonialsData.map((item) => (
                <Testimonial key={item.id} testimonialTypes={item} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionSix;
