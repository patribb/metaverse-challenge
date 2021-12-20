import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = (e) => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );
    if (!username) return;
    setUserData({
      username,
    });
  };

  return (
    <div className="absolute text-sm top-5 right-5">
      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeUsername;
