import React from "react";
// @ts-ignore
import MonthsImage from "../assets/calendar.webp";
// @ts-ignore
import calenderTestImage from "../assets/calenderTestPicr.svg";

const Features = () => {
  return (
    <div className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[70px]">
      <div className="flex flex-none flex-col items-center justify-center  gap-4">
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          Our main features 🦸🏼
        </div>
        <div className="flex flex-none items-center justify-center text-center tracking-wide text-[58px] font-PlusJakartaSansExtraBold ">
          Discover your new superpowers
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[48px] mt-8">
        <div className="flex flex-col items-start justify-start h-auto w-[900px]">
          <div className="bg-orange-100 py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px] ">
            Seamless Scheduling
          </div>
          <div className=" tracking-wide text-[40px] font-PlusJakartaSansExtraBold pt-3">
            Focus on what matters most for you
          </div>
          <div className="font-PlusJakartaSansMedium leading-[32px] text-[19px] py-10 text-slate-500 tracking-wide text-start">
            Effortlessly plan your day with our intuitive drag-and-drop
            interface. Sync with multiple calendar platforms, import events from
            emails, and add participants with just a few clicks.
          </div>
          <div className="overflow-visible">
            <img
              src={calenderTestImage}
              alt=""
              className="object-center h-auto w-[1000px] object-fill"
            />
          </div>
        </div>
        <div className="overflow-visible ">
          <img
            src={MonthsImage}
            className="object-center h-auto w-[600px]] object-fill"
            alt="Img"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
