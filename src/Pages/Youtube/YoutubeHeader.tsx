import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { SlMicrophone } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { RxDotsVertical } from "react-icons/rx";
import { YoutubeBody } from "./YoutubeBody";
import { Drawer, Switch } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

type YoutubeHeaderProps = {
  menuStyle: React.CSSProperties;
};

export const YoutubeHeader = ({ menuStyle }: YoutubeHeaderProps) => {
  const navigate = useNavigate();
  const profileRef = useRef<HTMLInputElement | null>(null);
  const thumbnailRef = useRef<HTMLInputElement | null>(null);

  const [profileImage, setProfileImage] = useState<string>("");
  const [thumbnailImage, setThumbnailImage] = useState<string>("");

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs("Dec 18, 2024")
  );
  const [open, setOpen] = useState<boolean>(true);
  const [redButton, setRedButton] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("redButton") || "false");
  });
  const [logo, setLogo] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("logo") || "false");
  });
  const [navbar, setNavbar] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("navbar") || "false");
  });
  const [description, setDescription] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("description") || "false");
  });

  // Functions to handle Images

  const handleProfileImage = () => {
    if (profileRef.current) {
      profileRef.current.click();
    }
  };

  const handleProfilePic = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleThumbnailImage = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.click();
    }
  };

  const handleThumbnailPic = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setThumbnailImage(base64String);
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
      link.download = "youtube.png";
      link.click();
    }
  };

  // Handlers to Update State and Save to localStorage
  const handleRedButtonToggle = () => {
    const newValue = !redButton;
    setRedButton(newValue);
    localStorage.setItem("redButton", JSON.stringify(newValue));
  };

  const handleLogoToggle = () => {
    const newValue = !logo;
    setLogo(newValue);
    localStorage.setItem("logo", JSON.stringify(newValue));
  };

  const handleNavbarToggle = () => {
    const newValue = !navbar;
    setNavbar(newValue);
    localStorage.setItem("navbar", JSON.stringify(newValue));
  };

  const handleDescriptionToggle = () => {
    const newValue = !description;
    setDescription(newValue);
    localStorage.setItem("description", JSON.stringify(newValue));
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <div className="w-[500px] p-5">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Edit Mockup</h1>
              <div
                className="h-10 w-10 flex justify-center items-center hover:bg-black hover:rounded-full"
                onClick={() => setOpen(false)}
              >
                <RxCross2 className="text-neutral-500 text-[20px]" />
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
              or this button{" "}
              <IoMenu
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "20px",
                }}
              />
              to open this menu.
            </div>
            <p className="mt-1 text-neutral-700 text-sm">
              Further you can edit the Title, the amount of subscribers and the
              amount of likes directly in inside the mockup.
            </p>

            <div className="flex flex-col gap-2 mt-11">
              <div className="flex gap-2">
                <button
                  className="pic-btn gap-1 font-semibold w-[50%]"
                  onClick={handleProfileImage}
                >
                  <IoMdAdd style={{ fontSize: "20px" }} />
                  Upload Profile Picture
                </button>
                <input
                  type="file"
                  accept="*/image"
                  className="hidden"
                  ref={profileRef}
                  onChange={handleProfilePic}
                />
                <button className="pic-btn-del gap-1 font-semibold w-[50%]">
                  <IoMdAdd style={{ fontSize: "20px" }} />
                  Remove Profile Picture
                </button>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  className="pic-btn gap-1 font-semibold w-[50%]"
                  onClick={handleThumbnailImage}
                >
                  <IoMdAdd style={{ fontSize: "20px" }} />
                  Upload Video Thumbnail
                </button>
                <input
                  type="file"
                  accept="*/image"
                  className="hidden"
                  ref={thumbnailRef}
                  onChange={handleThumbnailPic}
                />
                <button className="pic-btn-del gap-1 font-semibold w-[50%]">
                  <IoMdAdd style={{ fontSize: "20px" }} />
                  Remove Video Thumbnail
                </button>
              </div>
              <div className="flex items-center">
                <Switch checked={redButton} onChange={handleRedButtonToggle} />
                <label className="text-sm text-neutral-700">
                  Red Subscribe Button
                </label>
              </div>
              <div className="flex items-center">
                <Switch checked={logo} onChange={handleLogoToggle} />
                <label className="text-sm text-neutral-700">
                  Show Youtube Logo
                </label>
              </div>
              <div className="flex items-center">
                <Switch checked={navbar} onChange={handleNavbarToggle} />
                <label className="text-sm text-neutral-700">Hide Navbar</label>
              </div>
              <div className="flex items-center">
                <Switch
                  checked={description}
                  onChange={handleDescriptionToggle}
                />
                <label className="text-sm text-neutral-700">
                  Show Description
                </label>
              </div>
              <DatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "white",
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "& .MuiButtonBase-root": {
                    color: "rgb(154, 146, 146)",
                  },
                }}
              />

              <div className="flex justify-end gap-2 mt-1">
                <button
                  className="bg-black py-2 px-3 rounded text-neutral-200 hover:opacity-70"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button className="pic-btn hover:opacity-70" onClick={handleScreenshot}>Download</button>
              </div>
            </div>
          </div>
        </Drawer>
      </LocalizationProvider>

      {/* ------------header---------   */}
      {!navbar && (
        <nav className="px-5 py-3 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="cursor-pointer" onClick={() => setOpen(true)}>
              <IoMenu style={menuStyle} />
            </div>
            {logo && (
              <div className="flex items-center gap-[2px] cursor-pointer">
                <FaYoutube style={{ color: "red", fontSize: "32px" }} />
                <span className="text-xl leading-none font-bold text-white font-sans">
                  YouTube
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-center gap-4 flex-[0_1_723px]">
            <div className="flex items-center flex-1 w-[600px] h-[37px]">
              <input
                placeholder="Search"
                type="text"
                className="h-full text-sm text-neutral-400 border border-neutral-500 placeholder:text-neutral-400 bg-transparent rounded-s-full pl-4 py-1 focus:outline-none w-full"
              />
              <button className="bg-neutral-700 h-full pl-4 pr-6 pb-[4px] pt-[3px] rounded-e-full border-e border-t border-b border-neutral-500 cursor-pointer">
                <IoSearch style={{ fontSize: "25px", color: "whitesmoke" }} />
              </button>
            </div>
            <div className="bg-neutral-700 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
              <SlMicrophone style={{ color: "whitesmoke" }} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-neutral-100">
            <div
              className="flex justify-center cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <RxDotsVertical className="text-neutral-100 text-xl" />
            </div>
            <div className="flex items-center gap-2 justify-center border border-gray-500 py-2 px-4 rounded-full cursor-pointer">
              <GoPerson className="text-neutral-100" />
              <span className="font-bold">Log in</span>
            </div>
          </div>
        </nav>
      )}
      <div className="mx-24 mt-10">
        <YoutubeBody
          setOpen={setOpen}
          redButton={redButton}
          description={description}
          profilePic={profileImage}
          thumbnailPic={thumbnailImage}
        />
      </div>
    </>
  );
};
