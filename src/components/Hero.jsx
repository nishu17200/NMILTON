import React from "react";
// @ts-ignore
import SuperPageImg from "../assets/superPage.png";
// @ts-ignore
import Star from "../assets/starYellow.png";
// @ts-ignore
import user1 from "../assets/user1.webp";
// @ts-ignore
import user2 from "../assets/user2.webp";
// @ts-ignore
import user3 from "../assets/user3.webp";
// @ts-ignore
import user4 from "../assets/user4.webp";
// @ts-ignore
import user5 from "../assets/user5.webp";

const Hero = () => {
  return (
    <section className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[150px]">
      <div className="flex flex-none flex-col items-center justify-center px-[160px]">
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          An other way to manage time
        </div>
        <div className="flex flex-none items-center justify-center text-center leading-[80px] tracking-wider">
          <p className="text-[75px] font-PlusJakartaSansExtraBold ">
            Your new favorite calendar 🗓️ app
          </p>
        </div>
        <div className="font-PlusJakartaSansMedium leading-[32px] text-center text-[19px] py-10 px-12 text-slate-500 tracking-wider">
          Here you should explain how cool your app is. Remember, <br></br>focus
          on the benefits for your users, not on the features.{" "}
        </div>
        <div>
          <a href="#contact">
            <button className="bg-black text-[#FEFEFE] rounded-lg py-4 px-8 font-bold text-[18px]">
              <p>Get started, it's free</p>
            </button>
          </a>
        </div>
        <div className="text-[14px] text-slate-500">
          Free 14 days trials,no credit card needed
        </div>
        <div className="flex flex-row py-12 gap-0">
          <div className="flex justify-center items-center relative text-center mr-44">
            <div className="absolute left-0 right-0 h-12 w-12 border-[5px] rounded-full border-white">
              {" "}
              <img src={user1} alt="" className="" />
            </div>
            <div className="absolute left-8 right-0   h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user2} alt="" className="" />
            </div>
            <div className="absolute  left-16 right-0  h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user3} alt="" className=" " />
            </div>
            <div className="absolute -right-36 h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user4} alt="" className=" " />
            </div>
            <div className="absolute  -right-44 h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user5} alt="" className=" " />
            </div>
          </div>
          <div className="flex flex-none flex-col justify-center items-center ">
            <div className="flex justify-center items-center  gap-1">
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <div className=" font-bold text-md"> 5.0</div>
            </div>
            <div className="font-medium leading-[32px] text-center text-[14px] text-slate-500 ml-5 -mt-1">
              From 200+ happy users
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-3 items-center justify-center">
        <img
          src={SuperPageImg}
          className="object-center h-auto w-[1200px] object-fill"
          alt="sectionImg"
        />
      </div>
    </section>
  );
};

export default Hero;
