import React from "react";
import { useContext } from "react";
import { cardContext } from "../context/context";

const SideBar = () => {
  const value = useContext(cardContext);
  const sideBarObject = [
    {
      value: 1,
      name: "Step 1",
      description: "Your Info",
    },
    {
      value: 2,
      name: "Step 2",
      description: "Select Plan",
    },
    {
      value: 3,
      name: "Step 3",
      description: "Add-ons",
    },
    {
      value: 4,
      name: "Step 4",
      description: "Summary",
    },
  ];
  return (
    <>
      {/* Following div consist of steps */}

      <div className="m-[1rem] p-[2rem] w-[280px]  bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-no-repeat">
        <div className="flex flex-col gap-[1.5rem]">
          {sideBarObject.map((item, index) => {
            return (
              <div className="flex items-center gap-[20px]" key={item.value}>
                <div
                  className={
                    value.steps === item.value
                      ? "w-[35px] h-[35px] rounded-[50%] bg-[#bfe2fd] flex justify-center items-center ubuntu-medium"
                      : "w-[35px] h-[35px] rounded-[50%] text-white border-[1px] flex justify-center items-center ubuntu-medium"
                  }
                >
                  {item.value}
                </div>
                <div>
                  <p className="ubuntu-medium text-[#9699ab] uppercase text-[13px]">
                    {item.name}
                  </p>
                  <p className="ubuntu-medium text-[#ffffff] uppercase text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
