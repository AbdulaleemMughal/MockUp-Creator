import { IoPersonCircle } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaPhoneSlash } from "react-icons/fa";

type PhoneImageProps = {
  bgColor: string;
  name: string;
  profile: string;
  thumbnail: string;
  phoneNumber: string;
};

export const PhoneImage = ({
  bgColor,
  name,
  profile,
  thumbnail,
  phoneNumber,
}: PhoneImageProps) => {
  return (
    <>
      <div
      id="capture"
  className="col-span-9 shadow-2xl flex justify-center items-center max-lg:col-span-12 max-lg:mt-4"
  style={{
    background:
      bgColor === "Gradient"
        ? "linear-gradient(45deg, #4e9499, black 50%, #cc1845)"
        : bgColor === "White"
        ? "#ffffff"
        : bgColor === "Dark"
        ? "bg-neutral-800"  
        : "bg-neutral-800",
  }}
>
        <div className="flex">
          
            <div className="flex flex-col mt-20">
              <div className="h-[32px] w-[3px] bg-neutral-900 rounded-s-lg mb-5"></div>
              <div className="h-[46px] w-[3px] bg-neutral-900 rounded-s-lg mb-2"></div>
              <div className="h-[46px] w-[3px] bg-neutral-900 rounded-s-lg"></div>
            </div>
         
          <div
            className={` w-[290px] h-[560px] rounded-[2.5rem] overflow-hidden border-[14px] border-neutral-900 `}
          >
            <div
              className="h-full w-full flex flex-col justify-between px-8"
              style={
                thumbnail
                  ? {
                      backgroundImage: `url(${thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {
                      backgroundColor: "#404040",
                    }
              }
            >
                <div className="flex flex-col items-center gap-2 pt-10">
                    <p className="text-[13px] text-white">Imcoming call</p>
                    <h1 className="text-3xl text-white font-semibold pt-3">{name}</h1>
                    <p className="text-[13px] text-white">{phoneNumber}</p>
                    <div className="h-16 w-16 text-gray-400 rounded-full">
                        {
                            profile ? <img src={profile} className="w-full h-full rounded-full" /> : <IoPersonCircle className="w-full h-full" />
                        }
                        
                    </div>
                </div>
                <div className="flex justify-between items-center pb-12">
                    <div className="bg-white text-green-600 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
                        <FaPhone style={{fontSize: '20px'}}/>
                    </div>
                    <div className="bg-white text-red-600 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
                        <FaPhoneSlash style={{fontSize: '20px'}}/>
                    </div>
                </div>
            </div>
          </div>
            <div className="h-[64px] w-[3px] bg-neutral-900 rounded-r-lg relative top-36"></div>
        </div>
      </div>
    </>
  );
};
