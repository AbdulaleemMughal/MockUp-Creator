import { IoEllipsisHorizontalSharp, IoEllipsisVertical } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { Drawer, Switch } from "@mui/material";
import { RxCross2, RxDotsVertical } from "react-icons/rx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { TwitchStream } from "./TwitchStream";
import html2canvas from "html2canvas";

export const Twitch = () => {
  const navigate = useNavigate();
  const profileRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("twitch-logo") || "false");
  });

  const chooseProfile = () => {
    if (profileRef.current) {
      profileRef.current.click();
    }
  };

  const handleProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setProfile(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const chooseThumbnail = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.click();
    }
  };

  const handleThumbnailImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setThumbnail(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogo = () => {
    const newValue = !showLogo;
    setShowLogo(newValue);
    localStorage.setItem("twitch-logo", JSON.stringify(newValue));
  };

  const handleScreenshot = async () => {
    const element = document.getElementById("capture");
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL("image/png");

      // Create a download link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "twitch-stream.png";
      link.click();
    }
  };

  return (
    <>
      <div className="bg-black">
        {
            !hideNavbar && (<nav className="bg-[#18181B] flex justify-between items-center p-2">
                <div className="flex items-center gap-6 text-white">
                  {!showLogo && <img
                    width={25}
                    src="https://projects.fabian-kleine.dev/mockup-creator/twitch-logo.png"
                  />}
                  <h2 className="font-bold text-xl pb-1">Browse</h2>
                  <IoEllipsisVertical
                    className="cursor-pointer"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="flex items-center w-96 h-[35px] max-lg:hidden">
                  <div className="flex-1 h-full">
                    <input
                      type="text"
                      className="pl-4 w-full h-full border border-neutral-500 bg-transparent rounded-s-md text-neutral-400 placeholder:font-bold"
                      placeholder="Search"
                    />
                  </div>
                  <button className="bg-neutral-700 text-white aspect-square h-full flex justify-center items-center rounded-e-md text-xl">
                    <IoSearch />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="mx-2">
                    <LuCrown />
                  </div>
                  <button className="text-sm py-[6px] px-3 rounded-sm bg-[#35353B]">
                    Log In
                  </button>
                  <button className="text-sm py-[6px] px-3 rounded-sm bg-[#772CE8]">
                    Sign Up
                  </button>
                  <div className="mx-2">
                    <FiUser />
                  </div>
                </div>
              </nav>)
        }

        <TwitchStream profile={profile} thumbnail={thumbnail} />
        
      </div>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="w-[500px] p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Edit Mockup</h1>
            <div
              className="h-10 w-10 flex justify-center items-center transition-all duration-300 hover:text-white hover:bg-black hover:rounded-full"
              onClick={() => setOpen(false)}
            >
              <RxCross2 className="text-[20px]" />
            </div>
          </div>
          <div className="flex items-center text-neutral-700 text-sm mt-5">
            Click this button{" "}
            <RxDotsVertical
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                fontSize: "20px",
              }}
            />
            , this button{" "}
            <IoEllipsisHorizontalSharp
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                fontSize: "20px",
              }}
            />
            or this button to open this menu.
          </div>
          <button className="pic-btn w-full mt-10 font-semibold flex items-center gap-2" onClick={chooseProfile}>
            <IoMdAdd className="text-xl" />
            Upload Profile Picture
          </button>
          <input
            ref={profileRef}
            type="file"
            accept="*/image"
            className="hidden"
            onChange={handleProfileImage}
          />
          <button className="pic-btn w-full mt-6 font-semibold flex items-center gap-2" onClick={chooseThumbnail}>
            <IoMdAdd className="text-xl" />
            Upload Stream Thumbnail
          </button>
          <input
            ref={thumbnailRef}
            type="file"
            accept="*/image"
            className="hidden"
            onChange={handleThumbnailImage}
          />

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex items-center">
              <Switch
                value={showLogo}
                onChange={() => handleLogo}
              />
              <label className="text-sm">Show Twitch Logo</label>
            </div>
            <div className="flex items-center">
              <Switch
                value={hideNavbar}
                onChange={(e) => setHideNavbar(e.target.checked)}
              />
              <label className="text-sm">Hide Navbar</label>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-2 bg-black text-neutral-400 font-semibold rounded-md"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button className="pic-btn font-semibold px-3 py-2" onClick={handleScreenshot}>
              Download
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
