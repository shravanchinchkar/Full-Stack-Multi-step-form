import React, { useContext, useState,useEffect } from "react";
import { cardContext } from "../context/context";
import Footer from "./Footer";

const AddOns = () => {
  const value = useContext(cardContext);
  const [selectedAddOns, setselectedAddOns] = useState([]);

  const addons = [
    {
      addOnName: "Online Service",
      addOnsDescription: "Access to multiplayer games",
      addOnsPricePerMonth: "+$1/mo",
      addOnsPricePerYear:"+$10/yr"
    },
    {
      addOnName: "Larger Storage",
      addOnsDescription: "Extra 1TB of cloud save",
      addOnsPricePerMonth: "+$2/mo",
      addOnsPricePerYear:"+$20/yr"
    },
    {
      addOnName: "Customizable Profile",
      addOnsDescription: "Custom theme on your profile",
      addOnsPricePerMonth: "+$2/mo",
      addOnsPricePerYear:"+$20/yr"
    },
  ];

  const handleAddOns = (e) => {
    const id=e.currentTarget.id; //selected id
    setselectedAddOns((prevSelectedAddOns)=>{
      //check if the selected id is already present in the array
      if(prevSelectedAddOns.includes(id)){
        return prevSelectedAddOns.filter((items)=>items!==id) // if present remove it
      }
      else{
        return [...prevSelectedAddOns,id] //if not add it
      }
    })
    console.log("SelectedAddOns updated");
  };

  useEffect(() => {
    const finalAddOns=addons.filter((item)=>{
      return selectedAddOns.includes(item.addOnName)
    })
    value.setfinalAddons(finalAddOns);
  }, [selectedAddOns])
  
  return (
    <>
      <div
        className={
          value.steps === 3
            ? "p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
            : "hidden"
        }
        // className="p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
      >
        {/* Heading */}
        <div>
          <p className="ubuntu-bold text-3xl text-[#02295a]">Pick add-ons</p>
          <p className="ubuntu-regular text-[#9699ab]">
            Add-ons help enhance your gaming experience
          </p>
        </div>

        {/* Main content */}
        <div className="mt-[2rem] flex flex-col gap-[1rem]">
          {addons.map((items) => {
            return (
              <button
                className={
                  selectedAddOns.includes(items.addOnName)
                    ? "border-[1px]  border-[#473dff] bg-[#fafbff] cursor-pointer rounded-lg flex p-[1rem] justify-between items-center"
                    : "border-[1px] border-[#d6d9e6] hover:border-[#473dff] cursor-pointer rounded-lg flex p-[1rem] justify-between items-center"
                }
                onClick={handleAddOns}
                key={items.addOnName}
                id={items.addOnName}
              >
                {/* Check/unCheck section */}
                <div
                  className={
                    selectedAddOns.includes(items.addOnName)
                      ? "bg-[#473dff] w-[25px] h-[25px] rounded-md flex justify-center items-center"
                      : "w-[25px] h-[25px] rounded-md flex justify-center items-center"
                  }
                >
                  <img
                    src="./assets/images/icon-checkmark.svg"
                    alt="checkmark"
                    className={selectedAddOns.includes(items.addOnName)?"block":"hidden"}
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col items-start w-[300px]">
                  <p className="ubuntu-medium text-[#02295a]">
                    {items.addOnName}
                  </p>
                  <p className="ubuntu-regular text-[#9699ab]">
                    {items.addOnsDescription}
                  </p>
                </div>

                {/* Amount */}
                <div>
                  <p className="ubuntu-medium text-[#473dff]">
                    {value.toggle==="left"?`${items.addOnsPricePerMonth}`:`${items.addOnsPricePerYear}`}
                  </p>
                </div>
              </button>
            );
          })}
          <Footer selectedAddOns={selectedAddOns}/>
        </div>
      </div>
    </>
  );
};

export default AddOns;
