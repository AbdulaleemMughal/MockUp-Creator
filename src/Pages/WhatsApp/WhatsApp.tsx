import "../../App.css";
import { Switch } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { WhatsAppImage } from "./WhatsappImage";
import { MessageInterface } from "./whatsapp.interface";
import html2canvas from "html2canvas";

export const WhatsApp = () => {

  const imageRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [time, setTime] = useState<Dayjs>(dayjs("2022-04-17T15:30"));
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [showMobile, setShowMobile] = useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState<string>("Green");
  const [sentMessage, setSentMessage] = useState<string>("");
  const [message, setMessage] = useState<MessageInterface[]>([]);
  const [image, setImage] = useState<string>("");

  const handleSentMessage = () => {
    const newMessage: MessageInterface = {
      time: time.format("h:mm A"),
      messageSent: sentMessage,
      messageReceived: "",
        };

    setMessage((prev) => [...prev, newMessage]); 
    setSentMessage('');
  };

  const handleRecieveMessage = () => {
    const newMessage: MessageInterface = {
      time: time.format("h:mm A"),
      messageSent: "",
      messageReceived: sentMessage, 
    };

    setMessage((prev) => [...prev, newMessage]); 
    setSentMessage('');
   
  };

  const handleImage = () => {
    if(imageRef.current) {
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
      link.download = "whatsapp.png";
      link.click();
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="grid grid-cols-12">
          <div className="col-span-3 p-4">
            <div className="flex flex-col gap-4 text-neutral-200">
              <h2 className="text-lg font-bold">Edit Whatsapp Chat Mockup</h2>
              <p>Click on the Name to edit it.</p>
              <div
                className="w-full bg-white rounded flex justify-between items-center px-4 py-2 cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-blue-500">Background</span>
                  <p className="text-black">{backgroundColor}</p>
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
                <ul className="text-black">
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
                      setBackgroundColor("None");
                      setDropdown(false);
                    }}
                  >
                    None
                  </li>
                </ul>
              </div>

              <div className="flex items-center">
                <Switch value={showMobile} onChange={(e) => setShowMobile(e.target.checked)} />
                <label className="text-sm ">Hide Phone</label>
              </div>
              <div className="border-b border-neutral-500 pb-3">
                <button className="pic-btn w-full gap-2 text-black font-semibold" onClick={handleImage}>
                  <IoMdAdd />
                  Upload Profile Photo
                </button>
                <input type="file" accept="*/image" className="hidden" ref={imageRef} onChange={handleFileChange} />
              </div>

              <h2 className="mt-2 text-lg font-bold">Add Message</h2>
              <div className="flex flex-col gap-1 bg-white py-2 px-3 rounded">
                <span className="text-[12px] text-blue-500">Message-text</span>
                <input
                  type="text"
                  placeholder="Type Message..."
                  className="outline-none text-neutral-700"
                  value={sentMessage}
                  onChange={(e) => setSentMessage(e.target.value)}
                />
              </div>
              <p className="text-sm">
                You can copy emoji from{" "}
                <a
                  className="underline"
                  target="_main"
                  href="https://getemoji.com/"
                >
                  getemoji.com
                </a>
              </p>
              <TimePicker
                value={time}
                onChange={(newValue) => setTime(newValue || dayjs())}
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
              <div className="flex items-center gap-2 h-[65px]">
                <button
                  className="send-message text-black font-semibold rounded h-full w-1/2 py-2 px-3"
                  onClick={handleSentMessage}
                >
                  Add sent message
                </button>
                <button
                  className="bg-gray-300 text-black font-semibold rounded w-1/2 py-2 px-3"
                  onClick={handleRecieveMessage}
                >
                  Add recieved message
                </button>
              </div>
              {message.length >= 1 && <button className="bg-red-500 px-3 py-2 rounded text-black font-semibold opacity-70" onClick={() => setMessage([])}>
                Remove all messages
              </button>}
              <div className="h-[1px] w-full bg-neutral-500"></div>
              <div className="flex items-center gap-2 h-[65px]">
                <button
                  className="text-white font-semibold rounded w-1/2 py-2 px-3 transition-all duration-300 hover:bg-slate-700"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button className="pic-btn bg-gray-300 text-black font-semibold rounded w-1/2 py-2 px-3 " onClick={handleScreenshot}>
                  Download
                </button>
              </div>
            </div>
          </div>
          <WhatsAppImage image={image} mobile={showMobile} bgColor={backgroundColor} message={message} />
        </div>
      </LocalizationProvider>
    </>
  );
}