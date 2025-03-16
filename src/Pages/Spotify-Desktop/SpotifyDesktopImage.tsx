import { IoMusicalNotesSharp } from "react-icons/io5";
import { BsArrowDownCircle } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import desktopImage from '../../assets/desktop.jpg';

type SpotifyDesktopImageProps = {
  bgColor: string;
  name: string;
  playlist: string;
  color: string;
  profile: string;
  darkMode: boolean;
  hideWindow: boolean;
  dropdown: boolean;    
};

export const SpotifyDesktopImage = ({
  bgColor,
  name,
  playlist,
  color,
  profile,
  darkMode,
  hideWindow,
  dropdown
}: SpotifyDesktopImageProps) => {
  return (
    <>
      <div id="capture" className={`col-span-9 flex justify-center items-center h-full ${bgColor === "White" ? "bg-white" : bgColor === "Green" ? "bg-green-700" : bgColor === "Dark" ? "bg-transparent" : bgColor === "None" ? "bg-transparent" : "bg-transparent"}`} style={
    bgColor === "Desktop"
      ? {
          backgroundImage: `url(${desktopImage})`,
          backgroundSize: "cover",
        //   backgroundPosition: "center",
        }
      : {}
  }>
        <div className={`w-2/3 rounded-xl overflow-hidden ${profile ? "h-[66%]" : "h-[67%]"} ${darkMode ? "bg-neutral-800" : "bg-white"} ${dropdown ? "h-[58%]" : "h-[70%]"}`}>
          {/* ----header---- */}
          {!hideWindow && <div className="flex justify-between items-center p-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div>
              <h2 className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>Spotify</h2>
            </div>
            <div className="w-9"></div>
          </div>}
          {/* ------------body---------   */}
          <div className={`flex flex-col bg-[#121212] border-[8px] rounded-bl-xl rounded-br-xl border-[#000000] ${hideWindow && "h-full"}`}>
            <div className="rounded-md" style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}>
            <div className="flex gap-4 pt-4 px-4">
              <div className="w-48 aspect-square bg-[#222326] flex justify-center items-center ml-2 rounded-md">
                {profile ? (
                  <img src={profile} className="w-full h-full" />
                ) : (
                  <div className="text-neutral-600">
                    <IoMusicalNotesSharp className="text-9xl" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-end">
                <h2 className="text-6xl font-bold text-white">{playlist}</h2>
                <p className="font-bold text-white mt-2">
                  {name} •{" "}
                  <span
                    className="outline-none text-neutral-600 text-sm"
                    contentEditable
                  >
                    118
                  </span>
                  <span className="text-neutral-600 text-sm">Song</span>{" "}
                  <span
                    className="outline-none text-neutral-600 text-sm"
                    contentEditable
                  >
                    6 h 34 min
                  </span>
                </p>
              </div>
            </div>
            </div>
            <div className="flex items-center gap-4 py-3 px-4">
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
              <div className="text-neutral-300 text-xl">
                <BsArrowDownCircle />
              </div>
              <div className="text-neutral-300 text-xl">
                <GoPersonAdd />
              </div>
              <div className="text-neutral-300 text-xl">
                <IoEllipsisHorizontal />
              </div>
            </div>
            <table className="w-[96%] mx-auto">
              <thead className="border-b border-neutral-600">
                <tr className="text-left text-neutral-500 font-normal">
                  <th className="font-medium py-2">#</th>
                  <th className="font-medium w-[45%] px-4 py-2">Title</th>
                  <th className="font-medium py-2">Album</th>
                  <th className="font-medium py-2">Added On</th>
                  <th className="font-medium py-2 text-neutral-500 ">
                    <FaRegClock />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-neutral-400">
                  <td className="py-2">1</td>
                  <td className="flex gap-2 px-4 py-2">
                    <div className="w-10 aspect-square bg-neutral-600 rounded-sm"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="w-full bg-neutral-600 h-3 rounded-full"></div>
                      <div className="w-1/3 bg-neutral-600 h-2 rounded-full"></div>
                    </div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="w-24 bg-neutral-600 h-3 rounded-full"></div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="w-24 bg-neutral-600 h-3 rounded-full"></div>
                  </td>
                </tr>
                <tr className="text-neutral-400">
                  <td className="py-2">2</td>
                  <td className="flex gap-2 px-4 py-2">
                    <div className="w-10 aspect-square bg-neutral-600 rounded-sm"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="w-full bg-neutral-600 h-3 rounded-full"></div>
                      <div className="w-1/3 bg-neutral-600 h-2 rounded-full"></div>
                    </div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="w-24 bg-neutral-600 h-3 rounded-full"></div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="w-24 bg-neutral-600 h-3 rounded-full"></div>
                  </td>
                </tr>
                <tr className="text-neutral-400">
                  <td className="py-2">3</td>
                  <td className="flex gap-2 px-4 py-2">
                    <div className="w-10 aspect-square bg-neutral-600 rounded-sm"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="w-full bg-neutral-600 h-3 rounded-full"></div>
                      <div className="w-1/3 bg-neutral-600 h-2 rounded-full"></div>
                    </div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="w-24 bg-neutral-600 h-3 rounded-full"></div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="w-24 bg-neutral-600 h-3 rounded-full"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
