type EditDesktopProps = {
    image: string;
    rotation: number;
    linearLeft: string;
    radialLeft: string;
    linearRight: string;
    radialRight: string;
    linearGradient: boolean;
    radialGradient: boolean;
    bgColor: string;
  };
  
  export const EditDesktop = ({
    image,
    rotation,
    bgColor,
    linearLeft,
    linearGradient,
    linearRight,
    radialGradient,
    radialLeft,
    radialRight,
  }: EditDesktopProps) => {
    return (
      <>
        <div
        id="capture"
          className="col-span-9 flex justify-center items-center"
          style={
            linearGradient
              ? {
                  backgroundImage: `linear-gradient(${rotation}deg, ${linearLeft}, ${linearRight})`,
                }
              : radialGradient
              ? {
                  backgroundImage: `radial-gradient(${radialLeft}, ${radialRight})`,
                }
              : bgColor === "White"
              ? {
                  backgroundColor: "white",
                }
              : bgColor === "Dark"
              ? {
                  backgroundColor: "transparent",
                }
              : { backgroundColor: "transparent" }
          }
        >
          <div className="flex flex-col items-center">
            <div className="border-[16px] border-[#1f2a38] w-[512px] rounded-tl-xl rounded-tr-xl h-[294px] shadow-lg" style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {
                    backgroundColor: "#1f2a38",
                  }
            }></div>
            <div className="h-[45px] bg-gray-900 w-[512px] rounded-br-xl rounded-bl-xl shadow-lg"></div>
            <div className="h-[90px] bg-[#1f2a38] w-[142px] rounded-br-xl rounded-bl-xl shadow-lg"></div>
        </div>
        </div>
      </>
    );
  };
  