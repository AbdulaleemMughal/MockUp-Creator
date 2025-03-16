import { PiDotsThreeBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { VscSync } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { MdVerified } from "react-icons/md";


type TwitterImageProps = {
  bgColor: string;
  image: string;
  date: string | undefined;
  time: string | undefined;
  verified: boolean;
};

export const TwitterImage = ({
  bgColor,
  image,
  time,
  date,
  verified,
}: TwitterImageProps) => {
  return (
    <div
    id="capture"
      className={`col-span-9 max-lg:col-span-12 min-h-screen flex justify-center items-center ${
        bgColor === "Blue"
          ? "bg-[#1DA1F2]"
          : bgColor === "White"
          ? "bg-white"
          : bgColor === "None"
          ? "bg-transparent"
          : "bg-[#1DA1F2]"
      }`}
    >
      <div className="w-[600px] bg-white rounded p-4 shadow-2xl">
        <div className="flex justify-between">
          <div className="flex gap-4">
            {image ? (
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={image} alt="Profile" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <IoPersonCircle style={{ height: "100%", width: "100%" }} />
              </div>
            )}

            <div>
              <p className="text-black font-[500] flex items-center gap-1" contentEditable>
                Elon Musk {verified && <MdVerified style={{color: 'rgb(56, 189, 248)'}} />}
              </p>
              <span contentEditable>@elonmush</span>
            </div>
          </div>
          <div>
            <PiDotsThreeBold style={{ fontSize: "24px" }} />
          </div>
        </div>

        <div className="my-2">
          <p className="text-sm outline-none" contentEditable>
            Type tweet here...
          </p>
        </div>

        <div className="py-4 border-b">
          <p className="text-sm text-gray-500 font-semibold">
            {time} • {date}
          </p>
        </div>

        <div className="flex justify-between items-center mt-3 text-gray-500">
          <div className="flex items-center gap-1">
            <FaRegComment />
            <span contentEditable className="outline-none">1,180K</span>
          </div>
          <div className="flex items-center gap-1">
            <VscSync />
            <span contentEditable className="outline-none">1,180K</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegHeart />
            <span contentEditable className="outline-none">1,180K</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegBookmark />
            <span contentEditable className="outline-none">1,180K</span>
          </div>
          <div>
            <MdOutlineFileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};
