import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className='bg-black rounded-full cursor-pointer hover:opacity-75'
      layout="fill"
      onClick={() => logoutOnPress && logout()}
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
    />
  );
};

export default Avatar;
