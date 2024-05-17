import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex flex-col items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full max-w-[50%] `,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full max-w-[50%]`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        {message.uid === auth.currentUser.uid ? (
          ""
        ) : (
          <div className={style.name}>
            <p >{message.name}</p>
          </div>
        )}
        <div className="break-all">
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
