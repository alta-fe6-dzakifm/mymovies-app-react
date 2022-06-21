import React from "react";
import { FaHeart } from "react-icons/fa";

const Button = (props) => {
  return (
    <button
      className="bg-slate-500 hover:bg-slate-600 flex justify-center items-center p-2 space-x-5 mt-auto rounded-lg text-white"
      onClick={props.onClick}
    >
      <FaHeart /> <p>Add Favorite</p>
      {props.label}
    </button>
  );
};

export default Button;
