import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      title: "Fashion Forward!",
      offer: "Seasonal Sale 25% Off All Items",
      buttonText1: "Shop Now",
      buttonText2: "Browse Collection",
      imgSrc: assets.banner2, // Image of trendy clothing
    },
    {
      id: 2,
      title: "Get Ready for Summer ",
      offer: "Limited Time Offer 20% Off",
      buttonText1: "Shop Swimwear",
      buttonText2: "See All Summer Styles",
      imgSrc: assets.banner1, // Image of swimwear
    },
    {
      id: 3,
      title: "Elevate Your Style - ",
      offer: "Buy 2 Get 1 Free on Denim",
      buttonText1: "Shop Denim",
      buttonText2: "Explore Premium Jeans",
      imgSrc: assets.banner3, // Image of denim jeans
    },
    {
      id: 4,
      title: "Cozy Up in Style ",
      offer: "Up to 40% Off  Collection",
      buttonText1: "Shop Coats",
      buttonText2: "Browse Winter Wear",
      imgSrc: assets.banner4, // Image of winter coats
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translate(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col justify-between md:flex-row sm:flex-row border border-gray-300 min-w-full sm:w-1/2 sm:h-[300px] lg:h-[450px]"
          >
            {/* hero left side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
              <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                    {slide.offer}
                  </p>
                </div>
                <h1 className="prata-regular text-2xl sm:py-3 lg:text-3xl leading-relaxed">
                  {slide.title}
                </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                  <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
                </div>
              </div>
            </div>
            {/* {Hero right side} */}
            <div className="flex sm:w-1/2  justify-center">
              <img className="w-full h-full" src={slide.imgSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-green-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
