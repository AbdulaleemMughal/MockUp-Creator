import { IoPersonCircle } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";

type InstagramImageProps = {
  name: string;
  desc: string;
  bgColor: string;
  thumbnail: string;
  profile: string;
  dark: boolean;
  hidePhone: boolean;
};

export const InstagramImage = ({
  name,
  desc,
  bgColor,
  profile,
  thumbnail,
  dark,
  hidePhone,
}: InstagramImageProps) => {
  return (
    <>
      <div
      id="capture"
        className={`max-lg:col-span-12 max-lg:mt-4 col-span-9 flex justify-center items-center ${
          bgColor === "Gradient"
            ? "bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] h-screen"
            : bgColor === "Dark"
            ? "bg-transparent"
            : bgColor === "White"
            ? "bg-white"
            : "bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] h-screen"
        } `}
      >
        <div className="flex">
          {!hidePhone && <div className="flex flex-col mt-20">
            <div className="h-[32px] w-[3px] bg-neutral-800 rounded-s-lg mb-5"></div>
            <div className="h-[46px] w-[3px] bg-neutral-800 rounded-s-lg mb-2"></div>
            <div className="h-[46px] w-[3px] bg-neutral-800 rounded-s-lg"></div>
          </div>}
          <div className={` w-[290px] h-[560px] rounded-[2.5rem] ${!hidePhone ? "border-[14px] border-neutral-800" : "shadow-lg "}  ${!dark ? "bg-neutral-100 text-black" : "bg-neutral-800 text-white"}`}>
            <div className="flex justify-between items-center py-4 px-3">
              <div className="flex items-center gap-[2px]">
                <div className="w-8 h-8 rounded-full">
                  {profile ? (
                    <img src={profile} className="w-full h-full rounded-full" />
                  ) : (
                    <IoPersonCircle className="w-full h-full" />
                  )}
                </div>
                <p contentEditable className="text-sm ml-1">
                  {name}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="border border-black rounded-md py-[2px] px-3 flex items-center">
                  <button className="text-sm">Follow</button>
                </div>
                <div>
                  <IoEllipsisVertical />
                </div>
              </div>
            </div>
            {thumbnail ? (
              <img src={thumbnail} className="w-full aspect-square" />
            ) : (
              <div className="w-full aspect-square bg-gray-300"></div>
            )}

            <div className="flex items-center justify-between pt-1 px-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <FaRegHeart />
                  <span
                    contentEditable
                    className="text-[13px] ml-1 focus:outline-none"
                  >
                    2,332
                  </span>
                </div>
                <div className="flex items-center">
                  <FaRegComment />
                  <span
                    contentEditable
                    className="text-[13px] ml-1 focus:outline-none"
                  >
                    22{" "}
                  </span>
                </div>
                <div className="flex items-center">
                  <FiSend />
                  <span
                    contentEditable
                    className="text-[13px] ml-1 focus:outline-none"
                  >
                    2{" "}
                  </span>
                </div>
              </div>
              <div>
                <CiBookmark />
              </div>
            </div>
            <p className="text-neutral-500 outline-none text-[12px] px-2">
              {desc}
            </p>
            <p
              contentEditable
              className="text-neutral-500 outline-none text-[12px] px-2"
            >
              5 days ago
            </p>
            <div className="flex justify-between items-center py-4 px-3">
              <div className="flex items-center gap-[2px]">
                <div className="w-8 h-8 rounded">
                  {profile ? (
                    <img src={profile} className="w-full h-full rounded-full" />
                  ) : (
                    <IoPersonCircle className="w-full h-full" />
                  )}
                </div>
                <p contentEditable className="text-sm ml-1">
                  {name}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="border text-sm border-black rounded-md py-[2px] px-3 flex items-center">
                  <button className="">Follow</button>
                </div>
                <div>
                  <IoEllipsisVertical />
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-gray-300 rounded-bl-[2rem] rounded-br-[2rem] ${
                desc ? "h-[5.4rem]" : "h-[6.5rem]"
              }`}
            ></div>
          </div>
          {!hidePhone && <div className="h-[64px] w-[3px] bg-neutral-800 rounded-r-lg relative top-36"></div>}
        </div>
      </div>
    </>
  );
};
