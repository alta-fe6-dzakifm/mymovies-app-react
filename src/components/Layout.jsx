import React from "react";
import CustomHeader from "../components/Header";

const Layout = (props) => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-auto">
        <CustomHeader />
        <div className="h-full w-full bg-white dark:bg-black">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
