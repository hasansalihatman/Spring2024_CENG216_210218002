import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import SendIcon from "@mui/icons-material/Send";

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0 justify-center items-center`,
  input: `w-full text-xl p-3 bg-[#464655] text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
        style={{ borderRadius: "16px" }}
      />
      <div className="flex ml-3 bg-green-400 w-10 h-10 rounded-[100%] justify-center ">
        <button type="submit">
          {/* <SendIcon style={{ color: "white" }} /> */}
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
