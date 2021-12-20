import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({endOfMessagesRef}) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages.save({
      message: message,
      username: user.getUsername(),
      ethAddress: user.get("ethAddress"),
    }).then((message) => {
      
    },
    (error) =>{
      console.log(error.message);
    });
    endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'});
    setMessage('');
  };

  return (
    <form className="fixed flex w-11/12 max-w-2xl px-6 py-4 bg-black border-4 border-blue-400 rounded-full shadow-xl bottom-10 opacity-80">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="z-50 flex-grow pr-5 text-white placeholder-gray-500 bg-transparent outline-none"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
