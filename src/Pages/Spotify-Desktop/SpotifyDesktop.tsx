import { Switch } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ChromePicker } from "react-color";
import { SpotifyDesktopImage } from "./SpotifyDesktopImage";
import html2canvas from "html2canvas";

export const SpotifyDesktop = () => {

    const navigate = useNavigate();
    const profileRef = useRef<HTMLInputElement | null>(null);

    const [color, setColor] = useState<string>('#fff'); 
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("Green");
  const [name, setName] = useState<string>("Name");
  const [playlist, setPlaylist] = useState<string>("Playlist");
  const [hideWindow, setHideWindow] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

   const handleProfileImage = () => {
      if (profileRef.current) {
        profileRef.current.click();
      }
    };
  
    const profileImageChnage = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          setProfileImage(base64String);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleScreenshot = async () => {
      const element = document.getElementById("capture");
      if (element) {
        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL("image/png");
  
        // Create a download link
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "spotify-desktop.png";
        link.click();
      }
    };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 flex flex-col gap-4 p-4 max-lg:col-span-12">
          <h2 className="text-white font-bold text-lg">Edit Spotify Desktop Mockup</h2>
          <div className="flex flex-col gap-1">
            <div
              className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer"
              onClick={() => setDropdown(!dropdown)}
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-blue-400">Background</span>
                <p className="text-sm">{backgroundColor}</p>
              </div>
              <IoIosArrowDown
                className={`text-gray-500 transition-transform duration-300 ${
                  dropdown ? "rotate-180" : ""
                }`}
                style={{ fontSize: "20px" }}
              />
            </div>

            <div
              className={`bg-white p-1 rounded transition-all duration-500 ease-in-out transform ${
                dropdown
                  ? "max-h-40 opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              } overflow-hidden`}
            >
              <ul>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("White");
                    setDropdown(false);
                  }}
                >
                  White
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("Green");
                    setDropdown(false);
                  }}
                >
                  Green
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("Desktop");
                    setDropdown(false);
                  }}
                >
                  Desktop
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("Dark");
                    setDropdown(false);
                  }}
                >
                  Dark
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("None");
                    setDropdown(false);
                  }}
                >
                  None
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer">
            <div className="flex flex-col gap-1 w-full">
              <span className="text-[10px] text-blue-400">UserName</span>
              <input
                type="text"
                className="outline-none w-full text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer">
            <div className="flex flex-col gap-1 w-full">
              <span className="text-[10px] text-blue-400">Playlist Name </span>
              <input
                type="text"
                className="outline-none w-full text-sm"
                placeholder="Type Description"
                value={playlist}
                onChange={(e) => setPlaylist(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <Switch
              value={hideWindow}
              onChange={(e) => setHideWindow(e.target.checked)}
            />
            <label className="text-sm text-white">Hide Window</label>
          </div>
          <div className="flex items-center">
            <Switch
              value={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <label className="text-sm text-white">Dark Mode</label>
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={handleProfileImage}
              className="flex items-center gap-1 pic-btn font-semibold w-full"
            >
              <IoMdAdd style={{ fontSize: "21px" }} />
              Upload Image
            </button>
            <input
              ref={profileRef}
              type="file"
              accept="*/image"
              className="hidden"
              onChange={profileImageChnage}
            />
            {profileImage && (
              <button
                onClick={() => setProfileImage("")}
                className="flex items-center pic-btn-del font-semibold w-full"
              >
                Remove Image
              </button>
            )}
          </div>
          <ChromePicker color={color} onChange={(updatedColor: any) => setColor(updatedColor.hex)} />
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/')} className="w-1/2 px-3 py-2 font-semibold text-white transition-all rounded duration-300 hover:bg-white hover:text-black">
              Cancel
            </button>
            <button className="w-1/2 px-3 py-2 pic-btn font-semibold" onClick={handleScreenshot}>
              Download
            </button>
          </div>
        </div>
        <SpotifyDesktopImage
          bgColor={backgroundColor}
          name={name}
          playlist={playlist}
          profile={profileImage}
          color={color}
          darkMode={darkMode}
          hideWindow={hideWindow}
          dropdown={dropdown}
        />
      </div>
    </>
  );
};
