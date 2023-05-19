import React from "react";
import "../index.css";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-3 ">
      <div className="spinner "></div>;
      <p className="font-medium text-5xl">Loading...</p>
    </div>
  );
};

export default Spinner;
