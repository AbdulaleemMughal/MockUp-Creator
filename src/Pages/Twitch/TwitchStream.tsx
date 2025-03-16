import { IoPersonCircle } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { TwitchComment } from "./TwitchComment";

type TwitchStreamProps = {
  profile: string;
  thumbnail: string;
};

export const TwitchStream = ({ profile, thumbnail }: TwitchStreamProps) => {
  return (
    <>
      <div className="grid grid-cols-5" id="capture">
        <div className="col-span-4 flex flex-col">
          <div className="mx-10">
            {thumbnail ? (
              <img
                src={thumbnail}
                className="w-[90%] bg-neutral-700 aspect-video"
              />
            ) : (
              <div className="w-[90%] bg-neutral-700 aspect-video"></div>
            )}
          </div>
          <div className="flex justify-between items-center bg-[#242424] pl-5 pt-3 pr-2">
            <div className="flex gap-1">
              <div className="w-16 h-16 rounded-full">
                {profile ? (
                  <img src={profile} className="w-full h-full rounded-full" />
                ) : (
                  <IoPersonCircle className="w-full h-full text-white" />
                )}
                <span className="bg-red-600 text-white rounded-md px-2 text-sm relative bottom-4 left-3">
                  LIVE
                </span>
              </div>
              <div className="flex flex-col">
                <h2
                  className="text-white text-2xl font-bold outline-none"
                  contentEditable
                >
                  Username
                </h2>
                <p
                  className="text-white font-semibold outline-none"
                  contentEditable
                >
                  Stream Title
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <button className="flex items-center gap-2 py-[6px] px-3 bg-[#772CE8] text-white rounded-sm text-sm font-semibold">
                  <FaRegHeart className="text-md" />
                  Follow
                </button>
                <button className="flex items-center gap-2 py-[6px] px-3 bg-[#35353B] text-white rounded-sm text-sm font-semibold">
                  <IoMdStarOutline className="text-lg" />
                  Subscribe
                  <IoIosArrowDown className="text-lg" />
                </button>
              </div>
              <div className="flex items-center gap-1">
                <FiUser className="text-red-500 text-lg" />
                <p contentEditable className="outline-none text-red-500">
                  3,456
                </p>
                <p
                  contentEditable
                  className="outline-none text-[12px] text-white"
                >
                  11:34:30
                </p>
                <div className="px-1">
                  <FiUpload className="text-white text-lg" />
                </div>
                <div className="px-1">
                  <IoEllipsisVertical className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TwitchComment />
      </div>
    </>
  );
};
