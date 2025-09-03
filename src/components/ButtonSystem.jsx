import React from "react";

const ButtonSystem = ({ text }) => {
  return (
    <div className="my-3">
      <button className="btn btn-success rounded-lg w-[150px] h-[57px]">
        {text}
      </button>
    </div>
  );
};

export default ButtonSystem;
