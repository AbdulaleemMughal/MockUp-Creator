import "../App.css";
import { MockUpCard } from "./MockUpCard";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { IoMdLaptop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import desktop from '../assets/desktop.png';
import edit_image from "../assets/edit-image.png";
import edit_laptop from "../assets/edit-laptop.png";
import instagram from "../assets/instagram.png";
import phone_lock_screen from "../assets/phone-lock-screen.png";
import spotify_desktop from "../assets/spotify-desktop.png";
import spotify_phone from "../assets/spotify-phone.png"
import tiktok from "../assets/tiktok.png";
import twitch from "../assets/twitch-stream.png";
import twitter from "../assets/twitter.png";
import whatsapp from '../assets/whatsapp.png';
import youtube from "../assets/youtube (1).png"
import youtube_comment from "../assets/youtube-comment.png";

export const MockUp = () => {
  return (
    <>
      <div
        id="allMockup"
        className="px-6 py-8 md:px-12 lg:px-20 max-w-screen overflow-x-hidden"
      >
        <div className="grid grid-cols-12 gap-4">
          <MockUpCard
            title={"X (Twitter) tweet"}
            icon={FaXTwitter}
            link={"twitter"}
            bgColor={"bg-blue-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(59, 130, 246)" }}
            image={twitter}
          />
          <MockUpCard
            title={"Youtube Video"}
            icon={FaYoutube}
            link={"youtube"}
            bgColor={"bg-red-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(239, 68, 68)" }}
            image={youtube}
          />
          <MockUpCard
            title={"Youtube Comment"}
            icon={FaYoutube}
            link={"youtube-comment"}
            bgColor={"bg-red-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(239, 68, 68)" }}
            image={youtube_comment}
          />
          <MockUpCard
            title={"WhatsApp Chat"}
            icon={FaWhatsapp}
            link={"whatsapp"}
            bgColor={"bg-green-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(34, 197, 94)" }}
            image={whatsapp}
          />
          <MockUpCard
            title={"Intagram Post"}
            icon={FaInstagram}
            link={"instagram"}
            bgColor={"bg-purple-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(217, 70, 239)" }}
            image={instagram}
          />
          <MockUpCard
            title={"Spotify Playlist Phone"}
            icon={FaSpotify}
            link={"spotify-phone"}
            bgColor={"bg-green-600"}
            iconStyle={{ fontSize: "20px", color: "black" }}
            image={spotify_phone}
          />
          <MockUpCard
            title={"Spotify Playlist Desktop"}
            icon={FaSpotify}
            link={"spotify-desktop"}
            bgColor={"bg-green-600"}
            iconStyle={{ fontSize: "20px", color: "black" }}
            image={spotify_desktop}
          />
          <MockUpCard
            title={"Tiktok"}
            icon={IoLogoTiktok}
            link={"tiktok"}
            bgColor={"bg-pink-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(236, 72, 153)" }}
            image={tiktok}
          />
          <MockUpCard
            title={"Image MockUp"}
            icon={IoImageOutline}
            link={"edit-image"}
            bgColor={"bg-pink-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(236, 72, 153)" }}
            image={edit_image}
          />
          <MockUpCard
            title={"Laptop MockUp"}
            icon={IoMdLaptop}
            link={"edit-laptop"}
            bgColor={"bg-indigo-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(99, 102, 241)" }}
            image={edit_laptop}
          />
          <MockUpCard
            title={"Desktop MockUp"}
            icon={IoMdLaptop}
            link={"edit-desktop"}
            bgColor={"bg-indigo-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(99, 102, 241)" }}
            image={desktop}
          />
          <MockUpCard
            title={"Phone Call MockUp"}
            icon={FaMobileAlt}
            link={"phone-call"}
            bgColor={"bg-amber-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(245, 158, 11)" }}
            image={phone_lock_screen}
          />
          <MockUpCard
            title={"Phone LockScreen MockUp"}
            icon={FaMobileAlt}
            link={"phone-lockScreen"}
            bgColor={"bg-amber-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(245, 158, 11)" }}
            image={phone_lock_screen}
          />
          <MockUpCard
            title={"Twitch Stream"}
            icon={FaTwitch}
            link={"twitch"}
            bgColor={"bg-purple-100"}
            iconStyle={{ fontSize: "20px", color: "rgb(168, 85, 247)" }}
            image={twitch}
          />
        </div>
      </div>
    </>
  );
};
