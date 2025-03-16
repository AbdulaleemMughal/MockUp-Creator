import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import "../../App.css";
import { TwitterImage } from "./TwitterImage";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export const TwitterMockup = () => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs("Dec 18, 2024")
  );
  const [time, setTime] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("Blue");
  const [image, setImage] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);

  const handleImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setImage(base64String);
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
      link.download = "twitter.png";
      link.click();
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="grid grid-cols-12 h-screen">
          <div className="m-0 p-0 col-span-3 max-lg:col-span-12">
            <div className="p-4 flex flex-col gap-4">
              <h2 className="text-xl font-bold text-white">
                Edit Tweet Mockup
              </h2>
              <p className="text-white text-sm">
                Click on a text (except time and date) to edit it.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  onChange={(e) => {
                    setVerified(e.target.checked);
                    console.log(verified);
                  }}
                />
                <label className="text-white text-sm">Verified</label>
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
              <TimePicker
                value={time}
                onChange={(newValue) => setTime(newValue)}
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
              <div className="flex flex-col gap-1">
                <div
                  className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px]">Background</span>
                    <p>{backgroundColor}</p>
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
                        setBackgroundColor("Blue");
                        setDropdown(false);
                      }}
                    >
                      Blue
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

              <button className="pic-btn" onClick={handleImage}>
                <FaPlus />
                Upload Profile Picture
              </button>
              <input
                type="file"
                accept="*/image"
                ref={imageRef}
                onChange={handleFileChange}
                className="hidden"
              />
              {image && (
                <button
                  className="pic-btn-del hover:opacity-70"
                  onClick={() => setImage("")}
                >
                  Remove Profile Picture
                </button>
              )}

              <div className="flex justify-center items-center gap-3">
                <button
                  className="py-[8px] px-[12px] w-[50%] text-white cursor-pointer rounded transition-all duration-300 hover:bg-slate-200 hover:text-black"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button className="pic-btn w-[50%]" onClick={handleScreenshot}>Download</button>
              </div>
            </div>
          </div>
          <TwitterImage
            bgColor={backgroundColor}
            image={image}
            date={selectedDate?.format("MMM D, YYYY")}
            time={time?.format("h:mm A")}
            verified={verified}
          />
        </div>
      </LocalizationProvider>
    </>
  );
};
