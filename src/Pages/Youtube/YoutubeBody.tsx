import { IoPersonCircleSharp } from "react-icons/io5";
import { BiLike, BiDislike } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { YoutubeSuggestion } from "./YoutubeSuggestion";

type YoutubeBodyProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  redButton: boolean;
  description: boolean;
  profilePic: string;
  thumbnailPic: string;
};

export const YoutubeBody = ({
  setOpen,
  redButton,
  profilePic,
  description,
  thumbnailPic,
}: YoutubeBodyProps) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4" id="capture">
        <div className="col-span-3 flex flex-col">
          {thumbnailPic ? (
            <img src={thumbnailPic} className="rounded-xl w-full h-[560px]" />
          ) : (
            <div className="bg-neutral-700 rounded-xl w-full h-[560px]"></div>
          )}

          <h1
            contentEditable
            className="text-white text-2xl my-2 font-bold focus:outline-none"
          >
            Youtube Title
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 h-full">
              <div className="w-12 h-12 rounded-full">
                {profilePic ? (
                  <img
                    src={profilePic}
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <IoPersonCircleSharp
                    style={{ height: "100%", width: "100%" }}
                  />
                )}
              </div>
              <div className="flex flex-col">
                <div contentEditable className="text-white font-semibold">
                  Username
                </div>
                <div contentEditable className="text-neutral-500 text-[12px]">
                  2343 <span>Subscribers</span>
                </div>
              </div>
              <button
                className={`rounded-full ml-2 h-full px-5 font-medium ${
                  redButton === true
                    ? "bg-red-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-4 h-full">
              <div className="flex justify-center items-center gap-2 bg-neutral-700 px-4 h-full rounded-full">
                <button className="flex items-center gap-2 font-bold px-1">
                  <BiLike style={{ color: "white", fontSize: "20px" }} />
                  <span contentEditable className="text-neutral-100">
                    4
                  </span>
                </button>
                <div className="h-5 w-[1px] bg-neutral-500"></div>
                <button className="flex items-center px-1">
                  <BiDislike style={{ color: "white", fontSize: "20px" }} />
                </button>
              </div>
              <button className="flex items-center justify-center px-4 bg-neutral-700 rounded-full gap-2 text-sm font-bold h-full text-white">
                <FiSend style={{ fontSize: "19px" }} />
                Share
              </button>
              <button className="flex items-center justify-center px-4 bg-neutral-700 rounded-full gap-2 text-sm font-bold h-full text-white">
                <FaRegBookmark style={{ fontSize: "19px" }} />
                Save
              </button>
              <button
                className="flex items-center justify-center px-3 bg-neutral-700 rounded-full gap-2 text-sm font-bold h-full text-white"
                onClick={() => setOpen(true)}
              >
                <IoEllipsisHorizontalSharp style={{ fontSize: "19px" }} />
              </button>
            </div>
          </div>
          {description && (
            <div className="bg-neutral-700/50 mt-8 p-2 min-h-24 w-full rounded-lg">
              <p contentEditable className="text-white font-bold">
                144 <span>Veiw</span> 11/11/2024
              </p>
              <p contentEditable className="text-white">
                Edit Description....
              </p>
            </div>
          )}
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <YoutubeSuggestion />
          <YoutubeSuggestion />
          <YoutubeSuggestion />
          <YoutubeSuggestion />
          <YoutubeSuggestion />
          <YoutubeSuggestion />
          <YoutubeSuggestion />
          <YoutubeSuggestion />
        </div>
      </div>
    </>
  );
};
