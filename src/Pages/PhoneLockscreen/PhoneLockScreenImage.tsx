import { FaWifi } from "react-icons/fa6";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { CiBatteryFull } from "react-icons/ci";
import { PiLightbulbFilament } from "react-icons/pi";
import { IoIosCamera } from "react-icons/io";
import { NotificationInterface } from "./phoneScreen";
import { IoPersonCircle } from "react-icons/io5";

type PhoneLockScreenImageProps = {
  time: string | undefined;
  bgColor: string;
  date: string | undefined;
  blur: number;
  linearLeft: string;
  linearRight: string;
  radialLeft: string;
  radialRight: string;
  rotation: number;
  background: string;
  notification: NotificationInterface[];
};

export const PhoneLockScreenImage = ({
  time,
  bgColor,
  date,
  blur,
  linearLeft,
  linearRight,
  radialLeft,
  radialRight,
  rotation,
  background,
  notification,
}: PhoneLockScreenImageProps) => {
  return (
    <>
      <div
      id="capture"
        className="col-span-9 flex justify-center items-center max-lg:col-span-12"
        style={{
          background:
            bgColor === "Linear-Gradient"
              ? `linear-gradient(${rotation}deg, ${linearLeft}, ${linearRight})`
              : bgColor === "Radial-Gradient"
              ? `radial-gradient(circle, ${radialLeft}, ${radialRight})`
              : bgColor === "White"
              ? "#ffffff"
              : bgColor === "Dark"
              ? "#000000"
              : "#1f1f1f", // Default background color
        }}
      >
        <div className="flex">
          <div className="flex flex-col gap-4 mt-20">
            <div className="h-[32px] w-[3px] bg-white rounded-s-lg mb-5"></div>
            <div className="h-[46px] w-[3px] bg-white rounded-s-lg mb-2"></div>
            <div className="h-[46px] w-[3px] bg-white rounded-s-lg"></div>
          </div>
          <div
            className={` w-[290px] h-[560px] rounded-[2.5rem] border-[10px] border-neutral-800bg-neutral-800`}
          >
            <div
              className="w-full h-full rounded-[1.8rem]"
              style={
                background
                  ? {
                      backgroundImage: `url(${background})`,
                      backgroundSize: "cover",
                      filter: `blur(${blur}px)`,
                    }
                  : { backgroundColor: "transparent" }
              }
            >
              <div className="flex flex-col gap-44 h-full">
                <div>
                  <div className="flex justify-end px-3 py-3 gap-1">
                    <MdOutlineSignalCellularAlt className="text-white" />
                    <FaWifi className="text-white" />
                    <CiBatteryFull className="text-white" />
                  </div>
                  <div className="flex justify-between items-center flex-col mt-5">
                    <p className="text-[14px] text-white">{date}</p>
                    <h1 className="font-bold text-white text-7xl">{time}</h1>
                  </div>
                </div>

                <div>
                  {notification.length > 0 ? (
                    notification.map((n) => (
                      <div
                        key={n.id}
                        className="bg-white/35 flex items-center gap-2 w-[90%] m-auto rounded-xl pl-3 py-3 mb-2"
                      >
                        <div className="w-8 h-8 rounded-sm">
                          {n.img ? (
                            <img
                              src={n.img}
                              className="w-full h-full rounded-sm"
                            />
                          ) : (
                            <IoPersonCircle className="w-full h-full" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">{n.name}</span>
                          <p className="text-sm">{n.msg}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex-grow"></div>
                  )}

                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[80%]">
                    <button className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                      <PiLightbulbFilament style={{ fontSize: "20px" }} />
                    </button>
                    <button className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                      <IoIosCamera style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[64px] w-[3px] bg-white rounded-r-lg relative top-36"></div>
        </div>
      </div>
    </>
  );
};
