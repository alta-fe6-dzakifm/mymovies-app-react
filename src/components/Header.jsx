import React from "react";
import { withRouter } from "../utils/navigation";

const Header = () => {
  return (
    <nav className="sticky top-0 w-full px-2 py-4 flex h-full bg-slate-500 items-center">
      <div className="text-white font-bold italic text-3xl ml-5">
        <a href="/">Cinepolis</a>
      </div>
      <ul className="text-white ml-auto flex flex-row space-x-8">
        <li>
          <a href="/">Hot Movies</a>
        </li>
        <li>
          <a href="/">Favorite</a>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Header);
