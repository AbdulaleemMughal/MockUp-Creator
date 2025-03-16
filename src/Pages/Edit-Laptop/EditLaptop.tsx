import { ChangeEvent, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ChromePicker } from "react-color"
import { EditLaptopImage } from "./EditLaptopImage";
import html2canvas from "html2canvas";

export const EditLaptop = () => {

    const navigate = useNavigate();
    const profileRef = useRef<HTMLInputElement | null>(null);

  const [dropdown, setDropdown] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("White");
  const [profileImage, setProfileImage] = useState<string>("");
  const [linearGradient, setLinearGradient] = useState<boolean>(false) 
  const [radialGradient, setRadialGradient] = useState<boolean>(false) 
  const [rotation, setRotation] = useState<number>(45);
  const [linearLeft, setLinearLeft] = useState<string>("#000");
  const [linearRight, setLinearRight] = useState<string>("#fff");
  const [radialRight, setRadialRight] = useState<string>("#000");
  const [radialLeft, setRadialLeft] = useState<string>("#fff");

  
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
      link.download = "edit-laptop.png";
      link.click();
    }
  };


  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 flex flex-col gap-4 p-4 max-lg:col-span-12">
          <h2 className="text-white font-bold text-lg">Edit Laptop Mockup</h2>
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
                  ? "max-h-50 opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              } overflow-hidden`}
            >
              <ul>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("White");
                    setDropdown(false);
                    setLinearGradient(false);
                    setRadialGradient(false);
                  }}
                >
                  White
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("Linear-Gradient");
                    setDropdown(false);
                    setLinearGradient(true);
                    setRadialGradient(false);
                  }}
                >
                  Linear Gradient
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("Radial-Gradient");
                    setDropdown(false);
                    setRadialGradient(true);
                    setLinearGradient(false);
                  }}
                >
                  Radial Gradient
                </li>
                <li
                  className="px-2 py-3 my-1 rounded"
                  onClick={() => {
                    setBackgroundColor("Dark");
                    setDropdown(false);
                    setLinearGradient(false);
                    setRadialGradient(false);
                  }}
                >
                  Dark
                </li>
              </ul>
            </div>
          </div>
          {linearGradient && <div className="flex flex-col gap-2">
            <ChromePicker color={linearLeft} onChange={(updatedColor: any) => setLinearLeft(updatedColor.hex)} />
            <ChromePicker color={linearRight} onChange={(updatedColor: any) => setLinearRight(updatedColor.hex)} />
            <div className="flex flex-start flex-col gap-2">
                <label className="text-sm text-white">{rotation} deg</label>
            <input type="range" max={360} onChange={(e) => setRotation(Number(e.target.value))} />
            </div>
          </div>}
          {radialGradient && <div className="flex flex-col gap-2">
            <ChromePicker color={radialLeft} onChange={(updatedColor: any) => setRadialLeft(updatedColor.hex)} />
            <ChromePicker color={radialRight} onChange={(updatedColor: any) => setRadialRight(updatedColor.hex)} />
            
          </div>}
          <div className="flex flex-col gap-1">
            <button
              onClick={handleProfileImage}
              className="flex items-center gap-1 pic-btn font-semibold w-full"
            >
              <IoMdAdd style={{ fontSize: "21px" }} />
              Upload Laptop Background
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
                Remove Laptop Background
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
        <EditLaptopImage
            image={profileImage}
            rotation={rotation}
            linearLeft={linearLeft}
            linearRight={linearRight}
            radialLeft={radialLeft}
            radialRight={radialRight}
            linearGradient={linearGradient}
            radialGradient={radialGradient}
            bgColor={backgroundColor}
        />
      </div>
    </>
  );
};