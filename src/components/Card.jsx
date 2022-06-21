import React from "react";

import Button from "./Button";

const Card = (props) => {
  return (
    <div className="container grow p-7 flex flex-col bg-neutral-800 max-w-sm mx-auto rounded-md ">
      <div onClick={props.onClickItem}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt={props.image}
          width="350"
          height="450"
          className="mx-auto"
        />
        <div className="text-center text my-4 text-white">{props.title}</div>
      </div>
      <Button onClick={props.onClickFav}></Button>
    </div>
  );
};

export default Card;
