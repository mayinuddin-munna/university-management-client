import React from "react";

const Today = () => {
  return (
    <div className=" text-3xl font-bold text-indigo-600">
      {new Date().getFullYear()}
    </div>
  );
};

export default Today;
