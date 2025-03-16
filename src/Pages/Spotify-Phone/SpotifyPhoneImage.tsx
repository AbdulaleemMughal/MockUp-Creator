import { IoIosArrowBack } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";

type SpotifyPhoneImageProps = {
  bgColor: string;
  name: string;
  playlist: string;
  profile: string;
  thumbnail: string;
  hidePhone: boolean;
  color: string;
};

export const SpotifyPhoneImage = ({
  bgColor,
  name,
  playlist,
  profile,
  thumbnail,
  hidePhone,
  color
}: SpotifyPhoneImageProps) => {
  return (
    <>
      <div
      id="capture"
        className={`col-span-9 shadow-2xl flex justify-center items-center max-lg:col-span-12 max-lg:mt-4 ${
          bgColor === "Green"
            ? "bg-green-700"
            : bgColor === "White"
            ? "bg-white"
            : bgColor === "Dark"
            ? "bg-neutral-800"
            : "bg-neutral-800"
        }`}
      >
        <div className="flex">
          {!hidePhone && (
            <div className="flex flex-col mt-20">
              <div className="h-[32px] w-[3px] bg-neutral-800 rounded-s-lg mb-5"></div>
              <div className="h-[46px] w-[3px] bg-neutral-800 rounded-s-lg mb-2"></div>
              <div className="h-[46px] w-[3px] bg-neutral-800 rounded-s-lg"></div>
            </div>
          )}
          <div
            className={` w-[290px] h-[560px] rounded-[2.5rem] overflow-hidden bg-neutral-800 ${
              !hidePhone ? "border-[14px] border-neutral-800" : "shadow-lg mb-2"
            }`}
          >
            {" "}
            <div className={`flex flex-col ${hidePhone ? "px-4" : "px-4"}`}>
                <div className={` ${hidePhone ? `w-[290px] bg-cover bg-gradient-to-b from-[${color}] relative right-4` : `bg-cover bg-gradient-to-b from-[${color}] w-[265px] relative right-4` }`} style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}>
              <div className="flex mt-9 ml-[11px]">
                <div className="text-xl font-bold mr-4">
                  <IoIosArrowBack className="text-white" />
                </div>

                <div className="w-[180px] bg-[#222326] aspect-square flex justify-center items-center shadow-2xl">
                  {thumbnail ? (
                    <img src={thumbnail} className="h-full w-full" />
                  ) : (
                    <div className="text-9xl text-neutral-700">
                      <IoMusicalNotesSharp />
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-1 ml-4">
                <h5 className="font-bold text-xl text-white">{playlist}</h5>
                <div className="flex gap-1 items-center text-white">
                  <div className="w-6 h-6 rounded-full">
                    {profile ? (
                      <img
                        src={profile}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <IoPersonCircle className="w-full h-full" />
                    )}
                  </div>

                  <p className="text-sm font-semibold">{name}</p>
                </div>
                <p className="text-[12px] text-neutral-400 font-semibold">
                  2 h 25 min
                </p>
              </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-neutral-400 text-xl">
                  <IoArrowDownCircleOutline />
                  <LuUserPlus />
                  <IoEllipsisVertical />
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#a3a3a3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-shuffle"
                    >
                      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"></path>
                      <path d="m18 2 4 4-4 4"></path>
                      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"></path>
                      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"></path>
                      <path d="m18 14 4 4-4 4"></path>
                    </svg>
                  </div>
                  <div className="bg-[#1db954] p-2 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-10 aspect-square bg-neutral-600 rounded-sm"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="w-full rounded-full bg-neutral-600 h-3"></div>
                  <div className="w-1/3 rounded-full bg-neutral-600 h-2"></div>
                </div>
                <div className="text-neutral-400">
                  <IoEllipsisVertical className="text-lg" />
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="h-10 aspect-square bg-neutral-600 rounded-sm"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="w-full rounded-full bg-neutral-600 h-3"></div>
                  <div className="w-1/3 rounded-full bg-neutral-600 h-2"></div>
                </div>
                <div className="text-neutral-400">
                  <IoEllipsisVertical className="text-lg" />
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="h-10 aspect-square bg-neutral-600 rounded-sm"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="w-full rounded-full bg-neutral-600 h-3"></div>
                  <div className="w-1/3 rounded-full bg-neutral-600 h-2"></div>
                </div>
                <div className="text-neutral-400">
                  <IoEllipsisVertical className="text-lg" />
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="h-10 aspect-square bg-neutral-600 rounded-sm"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="w-full rounded-full bg-neutral-600 h-3"></div>
                  <div className="w-1/3 rounded-full bg-neutral-600 h-2"></div>
                </div>
                <div className="text-neutral-400">
                  <IoEllipsisVertical className="text-lg" />
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="h-10 aspect-square bg-neutral-600 rounded-sm"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="w-full rounded-full bg-neutral-600 h-3"></div>
                  <div className="w-1/3 rounded-full bg-neutral-600 h-2"></div>
                </div>
                <div className="text-neutral-400">
                  <IoEllipsisVertical className="text-lg" />
                </div>
              </div>
            </div>
          </div>
          {!hidePhone && (
            <div className="h-[64px] w-[3px] bg-neutral-800 rounded-r-lg relative top-36"></div>
          )}
        </div>
      </div>
    </>
  );
};
