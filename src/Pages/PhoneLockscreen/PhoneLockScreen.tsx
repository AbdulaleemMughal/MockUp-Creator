import "../../App.css";
import {
  LocalizationProvider,
  TimePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PhoneLockScreenImage } from "./PhoneLockScreenImage";
import { Box, Modal } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaApple } from "react-icons/fa";
import { NotificationInterface, wallpapers } from "./phoneScreen";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export const PhoneLockScreen = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    height: 600,
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const navigate = useNavigate();

  const imageRef = useRef<HTMLInputElement | null>(null);
  const backgroundRef = useRef<HTMLInputElement | null>(null);

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs("Dec 18, 2024")
  );
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [backgroundImage, setBackgroundImage] = useState<string>(
    "https://preview.redd.it/what-is-your-favorite-iphone-and-ios-default-wallpaper-v0-4s5ngbslqq4c1.jpg?width=1080&crop=smart&auto=webp&s=5ee1a96a26f93f15f1f7c185a4617968ba1fcc71"
  );
  const [time, setTime] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("Dark");
  const [linearGradient, setLinearGradient] = useState<boolean>(false);
  const [radialGradient, setRadialGradient] = useState<boolean>(false);
  const [linearLeft, setLinearLeft] = useState<string>("#000");
  const [linearRight, setLinearRight] = useState<string>("#fff");
  const [radialRight, setRadialRight] = useState<string>("#000");
  const [radialLeft, setRadialLeft] = useState<string>("#fff");
  const [rotation, setRotation] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [notification, setNotification] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<NotificationInterface[]>([]);

  useEffect(() => {
    setDisabled(notifications.length >= 2);
  }, [notifications]);

  const handleImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const changeBackground = () => {
    if (backgroundRef.current) {
      backgroundRef.current.click();
    }
  };

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
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
  const handleBackgroundImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setBackgroundImage(base64String);
      };
      reader.readAsDataURL(file);
    }
    setOpen(false);
  };

  const addNotifications = () => {
    const newNotification = {
        id: notifications.length + 1,
        img: image,
        name: name,
        msg: notification,
      };

      setNotifications((prev) => [...prev, newNotification]);
      setName("");
      setNotification("");
      setImage("");
  };

  const handleScreenshot = async () => {
    const element = document.getElementById("capture");
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL("image/png");

      // Create a download link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "phone-lock-screen.png";
      link.click();
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex flex-col gap-2 p-4">
            <h2 className="text-lg font-bold text-white">
              Edit Phone Lockscreen Mockup
            </h2>
            <div>
              <span className="text-[12px] text-white flex flex-col">
                Date:
              </span>
              <DatePicker
                className="w-full"
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
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] text-white flex flex-col">
                Time:
              </span>
              <TimePicker
                className="w-full"
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
            </div>
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
                  ? "max-h-[200px] opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              } overflow-hidden`}
            >
              <ul>
                <li
                  className="px-2 py-3 my-1 rounded cursor-pointer"
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
                  className="px-2 py-3 my-1 rounded cursor-pointer"
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
                  className="px-2 py-3 my-1 rounded cursor-pointer"
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
                  className="px-2 py-3 my-1 rounded cursor-pointer"
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

            {linearGradient && (
              <div className="flex flex-col gap-2">
                <ChromePicker
                  color={linearLeft}
                  onChange={(updatedColor: any) =>
                    setLinearLeft(updatedColor.hex)
                  }
                />
                <ChromePicker
                  color={linearRight}
                  onChange={(updatedColor: any) =>
                    setLinearRight(updatedColor.hex)
                  }
                />
                <div className="flex flex-start flex-col gap-2">
                  <label className="text-sm text-white">{rotation} deg</label>
                  <input
                    type="range"
                    max={360}
                    onChange={(e) => setRotation(Number(e.target.value))}
                  />
                </div>
              </div>
            )}
            {radialGradient && (
              <div className="flex flex-col gap-2">
                <ChromePicker
                  color={radialLeft}
                  onChange={(updatedColor: any) =>
                    setRadialLeft(updatedColor.hex)
                  }
                />
                <ChromePicker
                  color={radialRight}
                  onChange={(updatedColor: any) =>
                    setRadialRight(updatedColor.hex)
                  }
                />
              </div>
            )}

            <button
              className="pic-btn font-semibold"
              onClick={() => setOpen(true)}
            >
              Select Background Image
            </button>
            <div className="flex flex-col border-b border-gray-400 pb-2">
              <span className="text-[12px] text-white flex flex-col">
                Background Blur:
              </span>{" "}
              <input
                type="range"
                max={10}
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
              />
            </div>
            <h2 className="text-md font-bold text-white">Add Notifications</h2>
            <div className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer">
              <div className="flex flex-col gap-1 w-full">
                <span className="text-[10px] text-blue-400">
                  Notification Title
                </span>
                <input
                  type="text"
                  className="outline-none w-full text-sm"
                  placeholder="Type Title..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer">
              <div className="flex flex-col gap-1 w-full">
                <span className="text-[10px] text-blue-400">
                  Notification Text
                </span>
                <input
                  type="text"
                  className="outline-none w-full text-sm"
                  value={notification}
                  placeholder="Type Notification..."
                  onChange={(e) => setNotification(e.target.value)}
                />
              </div>
            </div>
            {image ? (
              <div className="flex gap-2">
                <img src={image} className="w-10 h-10" />
                <button
                  className="pic-btn flex justify-center items-center gap-2 font-semibold w-full"
                  onClick={handleImage}
                >
                  <IoMdAdd />
                  Update Notification{" "}
                </button>
              </div>
            ) : (
              <button
                className="pic-btn flex justify-center items-center gap-2 font-semibold"
                onClick={handleImage}
              >
                <IoMdAdd />
                Update Notification Icon{" "}
              </button>
            )}
            <input
              ref={imageRef}
              className="hidden"
              type="file"
              accept="*/image"
              onChange={changeImage}
            />
            <div className="border-b border-gray-400 pb-2">
              <button disabled={disabled} className={`pic-btn w-full font-semibold ${disabled && 'opacity-60'}`} onClick={addNotifications}>
                Add Notification
              </button>
              {
                notifications.length > 0 && (
                    <button className="pic-btn-del w-full mt-2 font-bold" onClick={() => setNotifications([])}>Remove All Notifications</button>
                )
              }
            </div>

            <div className="flex gap-2 mt-6">
              <button onClick={() => navigate('/')} className="w-1/2 rounded-md font-semibold text-white hover:bg-slate-200 transition-all duration-300 hover:text-black">
                Cancel
              </button>
              <button className="pic-btn w-1/2 font-semibold" onClick={handleScreenshot}>Download</button>
            </div>
          </div>

          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    Select Background Image
                  </h2>
                  <div className="h-10 w-10 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-black hover:text-white">
                    <RxCross2 style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div className="flex justify-center items-center text-3xl gap-2">
                  <FaApple />
                  <h3 className="font-bold">Apple</h3>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                  {wallpapers.map((w) => (
                    <div
                      key={w.id}
                      className="flex flex-col items-center border border-gray-400 p-1 rounded-lg"
                    >
                      <img
                        src={w.img}
                        className="rounded-lg h-[450px] w-[200px]"
                      />
                      <h2 className="text-xl font-bold py-3">iOS 17 light</h2>
                      <button
                        className="pic-btn font-semibold"
                        onClick={() => {
                          setBackgroundImage(w.img);
                          setOpen(false);
                        }}
                      >
                        Select Background
                      </button>
                    </div>
                  ))}

                  <div className="flex flex-col gap-4 mb-3">
                    <h1 className="text-3xl font-bold">Upload Wallpaper</h1>
                    <button
                      className="pic-btn flex justify-between items-center gap-1 font-semibold"
                      onClick={changeBackground}
                    >
                      <IoMdAdd />
                      Upload Phone Background
                    </button>
                    <input
                      className="hidden"
                      type="file"
                      accept="*/image"
                      ref={backgroundRef}
                      onChange={handleBackgroundImage}
                    />
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
          <PhoneLockScreenImage
            date={selectedDate?.format("MMM D, YYYY")}
            time={time?.format("h:mm")}
            bgColor={backgroundColor}
            blur={blur}
            rotation={rotation}
            linearLeft={linearLeft}
            linearRight={linearRight}
            radialLeft={radialLeft}
            radialRight={radialRight}
            background={backgroundImage}
            notification={notifications}
          />
        </div>
      </LocalizationProvider>
    </>
  );
};
