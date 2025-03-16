import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

type TwitterProps = {
  iconStyle: React.CSSProperties;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  bgColor: string;
  image: string;
};

export const MockUpCard = ({ iconStyle, image, title, icon: Icon, link, bgColor }: TwitterProps) => {
  return (
    <>
      <div className="col-span-3 bg-white p-4 rounded-lg max-lg:col-span-6 max-sm:col-span-12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <span>{title}</span>
            </div>
            <div className="flex justify-center">
              <img src={image} className="w-[90%] rounded-md" />
            </div>
            <div>
              <Link to={`/${link}`}>
                <button className="edit-button">Edit Mockup</button>
              </Link>
            </div>
          </div>
          <div className={`h-10 w-10 min-w-10 flex justify-center items-center ${bgColor} rounded`}>
            <Icon style={iconStyle} />
          </div>
        </div>
      </div>
    </>
  );
};
