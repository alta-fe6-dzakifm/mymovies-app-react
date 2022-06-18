import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="container grow p-7 flex flex-col bg-blue-400 max-w-sm mx-auto rounded-md ">
      <div onClick={props.onClickItem}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt={props.image}
          width="350"
          height="450"
          className="mx-auto"
        />
        <div className="text-center text my-4">{props.title}</div>
      </div>
      <button className="bg-red-500 hover:bg-red-400 flex justify-center items-center p-2 space-x-5 mt-auto">
        <FaHeart /> <p>Add Favorite</p>
      </button>
    </div>
  );
};

export default Card;
