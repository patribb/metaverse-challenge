import Image from "next/image";
import { useMoralis } from "react-moralis";
import logo from "../public/img/logo.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 z-50 p-5 text-pink-500 bg-black border-b-2 border-pink-700 shadow-sm">
      <div className="grid items-end grid-cols-5 lg:grid-cols-6 lg:items-center">
        <div className="relative hidden w-24 h-24 mx-auto lg:inline-grid">
          <Image
            src={logo}
            objectFit="cover"
            className="rounded-full"
            layout="fill"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative w-48 h-48 border-8 border-pink-500 rounded-full lg:mx-auto">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl font-semibold">
            Welcome to the PatriciaGM Metaverse.
          </h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
