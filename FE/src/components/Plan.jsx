import React from "react";
import { useContext, useState,useEffect } from "react";
import { cardContext } from "../context/context";
import Footer from "./Footer";

const Plan = () => {
  const [planSelected, setplanSelected] = useState("Arcade");
  const value = useContext(cardContext);

  const handleToggle = () => {
    if (value.toggle === "left") {
      value.settoggle("right");
    } else {
      value.settoggle("left");
    }
  };

  const plans = [
    {
      planImage: "./assets/images/icon-arcade.svg",
      planName: "Arcade",
      amountPerMonth: "$9/mo",
      amountPerYear: "$90/yr",
      message: "2 months free",
    },
    {
      planImage: "./assets/images/icon-advanced.svg",
      planName: "Advance",
      amountPerMonth: "$12/mo",
      amountPerYear: "$120/yr",
      message: "2 months free",
    },
    {
      planImage: "./assets/images/icon-pro.svg",
      planName: "Pro",
      amountPerMonth: "$15/mo",
      amountPerYear: "$150/yr",
      message: "2 months free",
    },
  ];

  useEffect(() => {
    const selectedPlan=plans.filter((item)=>{
      return item.planName===planSelected
    })
    value.settotalBill(selectedPlan);
  },[planSelected])
  

  const totalBill=[{
    planName:"Arcade",
    planDuration:"Monthly",
    planAmount:"$9/mo",
    addOnsOne:"online Service",
    addOnePrice:"+$1/mo",
    addOnsTwo:"Larger Storage",
    addOnsTwoPrice:"+$2/mo"
  }]

  const handleClick = (e) => {
    setplanSelected(e.currentTarget.id);
  };

  return (
    <>
      <div
        className={
          value.steps === 2
            ? "p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
            : "hidden"
        }
        // className="p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
      
      >
        {/* Heading */}
        <div>
          <p className="ubuntu-bold text-3xl text-[#02295a]">
            Select your plan
          </p>
          <p className="ubuntu-regular text-[#9699ab]">
            You have the option of monthly or yearly billing
          </p>
        </div>

        <div className="mt-[2rem]">
          {/* Following div consist of the plan data */}
          <div className="flex justify-between">
            {plans.map((item) => {
              return (
                <button
                  className={
                    item.planName === planSelected
                      ? "flex flex-col justify-between w-[140px] h-[160px] rounded-lg border-[1px] border-[#473dff] bg-[#fafbff] cursor-pointer"
                      : "flex flex-col justify-between w-[140px] h-[160px] rounded-lg border-[1px] hover:border-[#473dff] cursor-pointer"
                  }
                  key={item.planName}
                  id={item.planName}
                  onClick={handleClick}
                >
                  <div className="m-[15px]">
                    <img src={item.planImage} alt="planimage" />
                  </div>

                  <div className="m-[15px] flex flex-col items-start">
                    <p className="ubuntu-medium text-[#02295a]">
                      {item.planName}
                    </p>
                    <p className="ubuntu-medium text-[#9699ab] text-[13px]">
                      {value.toggle === "left"
                        ? `${item.amountPerMonth}`
                        : `${item.amountPerYear}`}
                    </p>
                    <p
                      className={
                        value.toggle === "right"
                          ? "ubuntu-medium text-[#02295a] text-[13px]"
                          : "hidden"
                      }
                    >
                      2 months free
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Toggle button and other stuff */}
          <div className="bg-[#fafbff] mt-[2rem] p-[0.5rem] rounded-md">
            <div className="flex justify-between m-auto w-[200px]">
              <p
                className={
                  value.toggle === "left"
                    ? "flex justify-center items-center ubuntu-medium text-[#02295a]"
                    : "flex justify-center items-center ubuntu-medium text-[#9699ab]"
                }
              >
                Monthly
              </p>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={handleToggle}
              >
                <img
                  className={value.toggle === "left" ? "block" : "hidden"}
                  src="./assets/images/toggle-left.svg"
                  alt="toggle-left"
                />

                <img
                  className={value.toggle === "right" ? "block" : "hidden"}
                  src="./assets/images/toggle-right.svg"
                  alt="toggle-right"
                />
              </div>
              <p
                className={
                  value.toggle === "right"
                    ? "flex justify-center items-center ubuntu-medium text-[#02295a]"
                    : "flex justify-center items-center ubuntu-medium text-[#9699ab]"
                }
              >
                Yearly
              </p>
            </div>
          </div>

          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Plan;
