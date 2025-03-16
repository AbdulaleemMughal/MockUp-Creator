import { IoPersonCircle } from "react-icons/io5";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

type CommentProps = {
    image: string;
};

export const Comment = ({ image }: CommentProps) => {
  return (
    <>
      <div
      id="capture"
        className={`shadow-lg p-4 w-[600px] bg-neutral-800 rounded-lg`}
      >
        <div className="flex justify-between mb-4">
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {image ? <img src={image} className="w-full h-full" /> :<IoPersonCircle className="w-full h-full text-white" />}
            </div>
            <div>
              <div className="flex gap-1 items-center">
                <h2 className="font-semibold text-white" contentEditable>
                  User Name
                </h2>
                <span
                  className=" m-0 p-0 text-sm text-neutral-600"
                  contentEditable
                >
                  6 days ago
                </span>
              </div>
              <p contentEditable className="text-white mb-2 mt-1">
                Type something here....
              </p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiLike
                    style={{
                      fontSize: "18px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  />
                  <span className="text-neutral-500" contentEditable>
                    4
                  </span>
                </div>
                <BiDislike
                  style={{
                    fontSize: "18px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <p className="text-white">Reply</p>
              </div>
            </div>
          </div>
          <div>
            <IoEllipsisVerticalSharp className="text-[18px], text-white" />
          </div>
        </div>
      </div>
    </>
  );
};
