import React, { useContext } from "react";
import { cardContext } from "../context/context";

const Footer = ({ selectedAddOns }) => {
  const value = useContext(cardContext);
  console.log("Previous steps:=", value.steps);

  const handleBack = () => {
    value.setsteps((prev) => prev - 1);
  };

  const handleFront = () => {
    if (value.steps === 2) {
      value.setsteps((prev) => prev + 1);
    } else if (selectedAddOns === undefined) {
      value.setsteps(4);
      value.setdisplayThankyou(true)
    } else if (selectedAddOns.length === 0) {
      alert("Please select atleast one addons");
    } else {
      value.setsteps((prev) => prev + 1);
    }
  };

  console.log("Next Step:=", value.steps);
  return (
    <>
      <div
        className={
          value.steps <= 2
            ? "mt-[7rem] flex justify-between"
            : value.setdisplayThankyou===true
            ? "hidden"
            : "mt-[3.5rem] flex justify-between"
        }
      >
        <button
          className="ubuntu-medium text-[#9699ab] hover:text-[#02295a]"
          onClick={handleBack}
        >
          Go back
        </button>
        <button
          className="ubuntu-regular w-[100px] bg-[#02295a] hover:bg-[#473dff] text-white p-[0.5rem] rounded-lg"
          onClick={handleFront}
        >
          {value.steps < 4 ? "Next Step" : "Confirm"}
        </button>
      </div>
    </>
  );
};

export default Footer;
