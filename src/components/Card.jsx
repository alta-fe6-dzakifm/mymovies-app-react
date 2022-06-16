import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";

export class Card extends Component {
  render() {
    return (
      <div className="container grow p-7 flex flex-col bg-blue-400 max-w-sm mx-auto rounded-md ">
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
          alt={this.props.image}
          width="350"
          height="450"
          className="mx-auto"
        />
        <a href={"/movie/" + this.props.id} className="text-center text my-4">
          {this.props.title}
        </a>

        <button className="bg-red-500 hover:bg-red-400 flex justify-center items-center p-2 space-x-5 mt-auto">
          <FaHeart /> <p>Add Favorite</p>
        </button>
      </div>
    );
  }
}

export default Card;
