import { IoPersonCircle } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import React from "react";
import { IoAdd } from "react-icons/io5";

type TiktkImageProps = {
  bgColor: string;
  name: string;
  profile: string;
  thumbnail: string;
  hidePhone: boolean;
  description: string;
  iconStyle: React.CSSProperties;
};

export const TiktokImage = ({
  bgColor,
  name,
  profile,
  thumbnail,
  hidePhone,
  description,
  iconStyle,
}: TiktkImageProps) => {
  return (
    <>
      <div
      id="capture"
  className="col-span-9 shadow-2xl flex justify-center items-center max-lg:col-span-12 max-lg:mt-4"
  style={{
    background:
      bgColor === "Gradient"
        ? "linear-gradient(45deg, #4e9499, black 50%, #cc1845)"
        : bgColor === "White"
        ? "#ffffff"
        : bgColor === "Dark"
        ? "bg-neutral-800"  
        : "bg-neutral-800",
  }}
>
        <div className="flex">
          {!hidePhone && (
            <div className="flex flex-col mt-20">
              <div className="h-[32px] w-[3px] bg-neutral-900 rounded-s-lg mb-5"></div>
              <div className="h-[46px] w-[3px] bg-neutral-900 rounded-s-lg mb-2"></div>
              <div className="h-[46px] w-[3px] bg-neutral-900 rounded-s-lg"></div>
            </div>
          )}
          <div
            className={` w-[290px] h-[560px] rounded-[2.5rem] overflow-hidden ${
              !hidePhone ? "border-[14px] border-neutral-900" : "shadow-lg mb-2"
            }`}
          >
            <div
              className="h-full w-full flex flex-col justify-end"
              style={
                thumbnail
                  ? {
                      backgroundImage: `url(${thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {
                      backgroundColor: "#404040",
                    }
              }
            >
              <div className="flex justify-between items-end mx-3 my-4">
                <div className="flex-1 mb-2 max-w-[75%]">
                  <h2 className="font-bold text-white text-lg">{name}</h2>
                  <p className="text-sm text-white">{description}</p>
                </div>
                <div className="flex flex-col gap-2 items-center text-white">
                  {!profile ? (
                    <div className="flex flex-col items-center relative top-2">
                      <IoPersonCircle style={{ fontSize: "45px" }} />
                      <IoAdd className="bg-[#EE1D52] rounded-full relative bottom-3 cursor-pointer" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center relative top-2">
                      <img src={profile} className="h-10 w-10 rounded-full" />
                      <IoAdd className="bg-[#EE1D52] rounded-full relative bottom-3 cursor-pointer" />
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <IoHeartSharp
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                    <span
                      className="text-[12px] font-bold text-white outline-none"
                      contentEditable
                    >
                      1234
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaCommentDots style={iconStyle} />
                    <span
                      className="text-[12px] font-bold text-white outline-none"
                      contentEditable
                    >
                      1234
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaBookmark style={iconStyle} />
                    <span
                      className="text-[12px] font-bold text-white outline-none"
                      contentEditable
                    >
                      1234
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IoMdShare style={iconStyle} />
                    <span
                      className="text-[12px] font-bold text-white outline-none"
                      contentEditable
                    >
                      1234
                    </span>
                  </div>
                  <div>
                    <AiFillTikTok style={iconStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!hidePhone && (
            <div className="h-[64px] w-[3px] bg-neutral-900 rounded-r-lg relative top-36"></div>
          )}
        </div>
      </div>
    </>
  );
};
