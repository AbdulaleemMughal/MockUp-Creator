type EditImageProps = {
    image: string,
    rotation: number,
    linearLeft: string,
    radialLeft: string,
    linearRight: string,
    radialRight: string,
    linearGradient: boolean,
    radialGradient: boolean,
    bgColor: string,
}

export const EditImage = ({ image, rotation, bgColor, linearLeft, linearGradient, linearRight, radialGradient, radialLeft, radialRight }: EditImageProps) => {
  return (
    <>
      <div id="capture" className="col-span-9 flex justify-center items-center max-md:col-span-12 max-lg:col-span-12" style={linearGradient ? {
          backgroundImage: `linear-gradient(${rotation}deg, ${linearLeft}, ${linearRight})`,
        }
        : radialGradient? {
          backgroundImage: `radial-gradient(${radialLeft}, ${radialRight})`,
        } : bgColor === "White" ? {
            backgroundColor: 'white'
        } : bgColor === "Dark" ? {
            backgroundColor: 'transparent'
        } : {backgroundColor: 'transparent'}
    }
      >
        <img
          src={image}
          className="block rounded-2xl w-auto h-auto max-w-[66%] max-h-[66%] shadow-[0_25px_50px_0_rgb(0_0_0_/_0.35)]"
        />
      </div>
    </>
  );
};
