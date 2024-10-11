"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Img from "../../../public/images/home/home1.png";

const Video = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (iframeRef.current) {
              iframeRef.current.contentWindow?.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              );
            }
          } else {
            if (iframeRef.current) {
              iframeRef.current.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className=" mt-24 sm:mt-28 md:mt-24 lg:mt-28 xl:mt-48 2xl:mt-52 3xl:mt-56 4xl:mt-60">
      {" "}
      <Image
        src={Img}
        alt="Jewelry piece"
        width={500}
        height={300}
        className="h-[160px] xs:h-[170px] sm:h-[190px] md:h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[420px] 3xl:h-[550px] 4xl:h-[600px] object-cover w-full rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px]"
      />
    </div>
    // <div
    //   ref={galleryRef}
    //   className=" mt-28 sm:mt-32 md:mt-24 lg:mt-36 xl:mt-52 min-w-full"
    // >
    //   <Image
    //     src={Img}
    //     alt="Jewelry piece"
    //     width={500}
    //     height={300}
    //     className="h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover"
    //   />
    //   {/* <Image
    //       src={Img}
    //       alt="Another jewelry piece"
    //       width={500}
    //       height={300}
    //       className="w-1/2 h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] object-cover flex-shrink-0"
    //     /> */}
    // </div>
    // <div
    //   className="wow fadeInUp overflow-hidden rounded-xl w-full xl:mt-60 lg:mt-36 md:mt-36 mt-28"
    //   data-wow-delay=".15s"
    //   ref={videoRef}
    // >
    //   <div className="relative aspect-w-16 aspect-h-9 h-[300px] md:h-[400px] lg:h-[500px]">
    //     <iframe
    //       ref={iframeRef}
    //       width="100%"
    //       height="100%"
    //       src="https://www.youtube.com/embed/uSOPrwZcISs?si=tSbkb-Y6pION5Gge&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
    //       title="YouTube video player"
    //       frameBorder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       allowFullScreen
    //     ></iframe>
    //   </div>
    // </div>
  );
};

export default Video;
