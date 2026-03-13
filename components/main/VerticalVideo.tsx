"use client";

import React from "react";

export default function VerticalVideo() {
  return (
    <section className="w-full flex justify-center items-center  ">
      <div className="relative  aspect-9/16 overflow-hidden  shadow-xl">
        <video
          className="w-full h-full object-cover"
          src="/videos/video-san-pham.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    </section>
  );
}