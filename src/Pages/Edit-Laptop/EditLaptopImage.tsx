type EditImageProps = {
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

export const EditLaptopImage = ({
  image,
  rotation,
  bgColor,
  linearLeft,
  linearGradient,
  linearRight,
  radialGradient,
  radialLeft,
  radialRight,
}: EditImageProps) => {
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
          <div
            className="border-[8px] border-gray-800 w-[512px] h-[294px] rounded-tl-xl rounded-tr-xl"
            style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {
                    backgroundColor: "white",
                  }
            }
          ></div>
          <div className="w-[597px] h-[21px] bg-gray-900 rounded-bl-xl rounded-br-xl"></div>
          <div className="w-[96px] h-[8px] bg-gray-800 rounded-bl-xl rounded-br-xl relative bottom-[21px]"></div>
        </div>
      </div>
    </>
  );
};
