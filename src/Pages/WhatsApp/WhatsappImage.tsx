import "../../App.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import backgrorundImage from "../../assets/whatsapp2.jpg";
import { GrEmoji } from "react-icons/gr";
import { GoPaperclip } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { MessageInterface } from "./whatsapp.interface";

type WhatsAppImageProps = {
  message: MessageInterface[];
  bgColor: string;
  mobile: boolean;
  image: string;
};

export const WhatsAppImage = ({
  message,
  bgColor,
  mobile,
  image,
}: WhatsAppImageProps) => {
  return (
    <>
      <div
      id="capture"
        className={`col-span-9 flex justify-center items-center ${
          bgColor === "Green"
            ? "bg-[#25D366]"
            : bgColor === "White"
            ? "bg-white"
            : bgColor === "None"
            ? "bg-transparent"
            : "bg-[#25D366]"
        }`}
      >
        <div className="flex">
          {!mobile && (
            <div className="relative top-20">
              <div className="h-[32px] w-[3px] bg-neutral-800 rounded-s-lg mb-5"></div>
              <div className="h-[46px] w-[3px] bg-neutral-800 rounded-s-lg mb-2"></div>
              <div className="h-[46px] w-[3px] bg-neutral-800 rounded-s-lg"></div>
            </div>
          )}
          <div
            className={`${
              !mobile
                ? `bg-neutral-100 w-[290px] h-[560px] rounded-[2.5rem] border-[14px] border-neutral-800`
                : `border-neutral-700 shadow-xl h-[500px]`
            } `}
          >
            <div className="bg-[#2E383E] rounded-t-[1.5rem] flex justify-between items-center py-3 px-2">
              <div className="flex items-center gap-1 text-white">
                <IoArrowBackOutline style={{ fontSize: "18px" }} />
                <div className="w-8 h-8 rounded-full">
                  {image ? (
                    <img src={image} className="w-full h-full rounded-full" />
                  ) : (
                    <IoPersonCircle className="w-full h-full" />
                  )}
                </div>
                <p contentEditable className="text-sm outline-none">
                  Name
                </p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <IoVideocamOutline style={{ fontSize: "18px" }} />
                <IoCallOutline style={{ fontSize: "18px" }} />
                <IoEllipsisVertical style={{ fontSize: "18px" }} />
              </div>
            </div>
            <div className="h-[477px]">
              <img
                src={backgrorundImage}
                className="h-full rounded-b-[1.5rem] w-[263px]"
              />
            </div>
            <div className="h-[477px] top-[210px] w-[263px] bg-transparent absolute bottom-[477px] overflow-hidden">
              <div className="flex flex-col bottom-[65px] absolute">
                {message.map((msg, index) =>
                  msg.messageSent ? (
                    <div
                      key={index}
                      className="message-send bg-[#9ae6b4] w-[220px] p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg relative left-[30px] mb-3"
                    >
                      <div className="flex flex-col">
                        <p className="text-[12px]">{msg.messageSent}</p>
                        <p className="text-xs text-right float-right">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="message-recieve bg-white relative ml-3 w-[220px] p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg mb-3">
                      <div className="flex flex-col">
                        <p className="text-[12px]">{msg.messageReceived}</p>
                        <p className="text-[11px] text-right float-right">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-1 relative bottom-[43px] h-9">
              <div className="flex gap-1 px-1 pl-[10px] w-5/6 items-center bg-[#2E383E] h-full rounded-full text-neutral-200">
                <div className="">
                  <GrEmoji style={{ fontSize: "18px", color: "#798188" }} />
                </div>
                <input
                  type="text"
                  placeholder="Message"
                  className="outline-none text-[#788188] bg-transparent text-sm w-[130px] gap-[3px]"
                />
                <div className="flex gap-2">
                  <div>
                    <GoPaperclip
                      style={{ fontSize: "18px", color: "#798188" }}
                    />
                  </div>
                  <div>
                    <CiCamera style={{ fontSize: "18px", color: "#798188" }} />
                  </div>
                </div>
              </div>
              <div className="bg-green-600 h-full aspect-square rounded-full flex justify-center items-center">
                <IoMicOutline style={{ fontSize: "18px" }} />
              </div>
            </div>
          </div>
          {!mobile && (
            <div className="h-[64px] w-[3px] bg-neutral-800 rounded-r-lg relative top-36"></div>
          )}
        </div>
      </div>
    </>
  );
};
