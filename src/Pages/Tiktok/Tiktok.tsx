import { Switch } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { TiktokImage } from "./TiktokImage";
import html2canvas from "html2canvas";

export const Tiktok = () => {

    const navigate = useNavigate();
    const profileRef = useRef<HTMLInputElement | null>(null);
    const thumbnailRef = useRef<HTMLInputElement | null>(null);

  const [dropdown, setDropdown] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("Gradient");
  const [name, setName] = useState<string>("Name");
  const [description, setDescription] = useState<string>("");
  const [hidePhone, setHidePhone] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");
  const [thumbnailImage, setThumbnailImage] = useState<string>("");

  
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

  const handleThumbnailImage = () => {
     if (thumbnailRef.current) {
        thumbnailRef.current.click();
     }
   };
 
   const thumbnailImageChnage = (e: ChangeEvent<HTMLInputElement>) => {
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
      link.download = "tiktok.png";
      link.click();
    }
  };


  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 flex flex-col gap-4 p-4 max-lg:col-span-12">
          <h2 className="text-white font-bold text-lg">Edit TikTok Mockup</h2>
          <p className="text-sm text-white">Click on the number to edit it.</p>
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
                    setBackgroundColor("Gradient");
                    setDropdown(false);
                  }}
                >
                  Gradient
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
                placeholder="Type Description.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <Switch
              value={hidePhone}
              onChange={(e) => setHidePhone(e.target.checked)}
            />
            <label className="text-sm text-white">Hide Phone</label>
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={handleProfileImage}
              className="flex items-center gap-1 pic-btn font-semibold w-full"
            >
              <IoMdAdd style={{ fontSize: "21px" }} />
              Upload Profile Image
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
                Remove Profile Image
              </button>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={handleThumbnailImage}
              className="flex items-center gap-1 pic-btn font-semibold w-full"
            >
              <IoMdAdd style={{ fontSize: "21px" }} />
              Upload Thumbnail Image
            </button>
            <input
              ref={thumbnailRef}
              type="file"
              accept="*/image"
              className="hidden"
              onChange={thumbnailImageChnage}
            />
            {thumbnailImage && (
              <button
                onClick={() => setThumbnailImage("")}
                className="flex items-center pic-btn-del font-semibold w-full"
              >
                Remove Thumbnail Image
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/')} className="w-1/2 px-3 py-2 font-semibold text-white transition-all rounded duration-300 hover:bg-white hover:text-black">
              Cancel
            </button>
            <button className="w-1/2 px-3 py-2 pic-btn font-semibold" onClick={handleScreenshot}>
              Download
            </button>
          </div>
        </div>
        <TiktokImage
          bgColor={backgroundColor}
          name={name}
          description={description}
          profile={profileImage}
          hidePhone={hidePhone}
          thumbnail={thumbnailImage}
          iconStyle={{fontSize: '25px', cursor: 'pointer'}}
        />
      </div>
    </>
  );
};
