import { PiSignOutBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { MdBolt } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export const TwitchComment = () => {
    return (
        <>
            <div className="col-span-1 bg-[#242424] border-l border-neutral-700">
                <div className="flex justify-between items-center border-b border-neutral-700 text-neutral-200 p-3">
                    <div className="text-xl"><PiSignOutBold /></div>
                    <p className="text-md">STREAM CHAT</p>
                    <div className="text-xl"><LuUsers /></div>
                </div>
                <div className="flex flex-col gap-2 mt-1 px-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <div className="bg-blue-400 h-3 w-14 rounded-full"></div>:
                            <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                        </div>
                        <div className="w-full bg-neutral-400 h-3 rounded-full"></div>
                        <div className="w-[70%] bg-neutral-400 h-3 rounded-full mt-2"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-orange-400 w-[35%] h-3 rounded-full mt-4"></div>
                        <div className="bg-neutral-400 w-[70%] ml-5 h-3 rounded-full"></div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-400 w-[25%] h-3 rounded-full"></div>
                            <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                        </div>
                        <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-[45%] bg-purple-400 rounded-full h-3"></div>
                            <div className="w-full bg-neutral-400 rounded-full h-3"></div>
                        </div>
                        <div className="h-3 w-full bg-neutral-400 rounded-full"></div>
                        <div className="h-3 w-full bg-neutral-400 rounded-full"></div>
                        <div className="h-3 w-[50%] bg-neutral-400 rounded-full"></div>

                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 px-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <div className="bg-blue-400 h-3 w-14 rounded-full"></div>:
                            <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                        </div>
                        <div className="w-full bg-neutral-400 h-3 rounded-full"></div>
                        <div className="w-[70%] bg-neutral-400 h-3 rounded-full mt-2"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-orange-400 w-[35%] h-3 rounded-full mt-4"></div>
                        <div className="bg-neutral-400 w-[70%] ml-5 h-3 rounded-full"></div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-400 w-[25%] h-3 rounded-full"></div>
                            <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                        </div>
                        <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-[45%] bg-purple-400 rounded-full h-3"></div>
                            <div className="w-full bg-neutral-400 rounded-full h-3"></div>
                        </div>
                        <div className="h-3 w-full bg-neutral-400 rounded-full"></div>
                        <div className="h-3 w-full bg-neutral-400 rounded-full"></div>
                        <div className="h-3 w-[50%] bg-neutral-400 rounded-full"></div>

                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 px-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <div className="bg-blue-400 h-3 w-14 rounded-full"></div>:
                            <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                        </div>
                        <div className="w-full bg-neutral-400 h-3 rounded-full"></div>
                        <div className="w-[70%] bg-neutral-400 h-3 rounded-full mt-2"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-orange-400 w-[35%] h-3 rounded-full mt-4"></div>
                        <div className="bg-neutral-400 w-[70%] ml-5 h-3 rounded-full"></div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-400 w-[25%] h-3 rounded-full"></div>
                            <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                        </div>
                        <div className="bg-neutral-400 w-full h-3 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-[45%] bg-purple-400 rounded-full h-3"></div>
                            <div className="w-full bg-neutral-400 rounded-full h-3"></div>
                        </div>
                        <div className="h-3 w-full bg-neutral-400 rounded-full"></div>
                        <div className="h-3 w-full bg-neutral-400 rounded-full"></div>
                        <div className="h-3 w-[50%] bg-neutral-400 rounded-full"></div>

                    </div>
                </div>

                <div className="mt-2 w-[95%] mx-auto"> 
                    <input type="text" placeholder="Send a message" className="w-full text-sms font-semibold p-2 placeholder:text-neutral-400 rounded-md bg-transparent border border-neutral-400" />
                </div>
                <div className="flex justify-between items-center mx-2 mt-3">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1"><MdBolt className="text-[#772CE8] text-lg"/><p contentEditable className="outline-none text-white ">0</p></div>
                        <div className="flex items-center gap-1"><FaRegCircle className="text-[#772CE8] text-lg" /><p contentEditable className=" text-white outline-none">0</p></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-white"><IoSettingsOutline /></div>
                        <button className="bg-[#772CE8] py-[6px] px-3 rounded-md text-white">Chat</button>
                    </div>
                </div>
            </div>
        </>
    );
};  