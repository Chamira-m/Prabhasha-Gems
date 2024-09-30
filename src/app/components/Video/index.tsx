"use client";

import { useRef, useEffect } from "react";

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
    <div
      className="wow fadeInUp overflow-hidden rounded-xl w-full lg:mt-72 md:mt-36 mt-36"
      data-wow-delay=".15s"
      ref={videoRef}
    >
      <div className="relative aspect-w-16 aspect-h-9 h-[300px] md:h-[400px] lg:h-[500px]">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/uSOPrwZcISs?si=tSbkb-Y6pION5Gge&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
