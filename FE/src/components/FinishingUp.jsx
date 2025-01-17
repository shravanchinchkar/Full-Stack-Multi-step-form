import React, { useContext } from "react";
import { cardContext } from "../context/context";
import Footer from "./Footer";

const FinishingUp = () => {
  const value = useContext(cardContext);

  // Extract the amount of the Selected Plan and store it into any array of object
  const planAmount = value.totalBill.map((item) => {
    return {
      amountPerMonth: item.amountPerMonth,
      amountPerYear: item.amountPerYear,
    };
  });

  // Extract the amount of the Selected addOns and store it into any array of object
  const addOnsPrice = value.finalAddons.map((item) => {
    return {
      amountPerMonth: item.addOnsPricePerMonth,
      amountPerYear: item.addOnsPricePerYear,
    };
  });

  // Function to extract the numerical value from the string
  const extractAmount = (amountString) => {
    return parseFloat(amountString.replace(/[^\d.-]/g, ""));
  };

  // User's choice (either 'PerMonth' or 'PerYear')
  const timePeriod = value.toggle;

  function calculateAmount(timePeriod) {
    let totalAmount = 0;
    if (value.totalBill.length > 0 && value.finalAddons.length > 0) {
      if (timePeriod === "left") {
        totalAmount += extractAmount(planAmount[0].amountPerMonth);
        addOnsPrice.forEach((addon) => {
          totalAmount += extractAmount(addon.amountPerMonth);
        });
        return totalAmount;
      } else if (timePeriod === "right") {
        // Add per year amounts
        totalAmount += extractAmount(planAmount[0].amountPerYear);
        addOnsPrice.forEach((addon) => {
          totalAmount += extractAmount(addon.amountPerYear);
        });
        return totalAmount;
      }
    } else {
      console.log("");
    }
  }

  const handlePlan = () => {
    value.setsteps(2);
  };

  return (
    <>
      <div
        className={
          value.displayThankyou === true
            ? "hidden"
            : value.steps === 4
            ? "p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
            : "hidden"
        }
        // className="p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
      >
        {/* Heading */}
        <div>
          <p className="ubuntu-bold text-3xl text-[#02295a]">Finishing up</p>
          <p className="ubuntu-regular text-[#9699ab]">
            Double-check everything looks OK before confirming
          </p>
        </div>

        {/* Main content */}
        <div className="mt-[3rem]">
          <ul className="flex flex-col gap-[1rem] p-[1.5rem] bg-[#fafbff] rounded-lg">
            {/* Final Plan Summary Goes here */}
            {value.totalBill.map((item) => {
              return (
                <li
                  className="flex justify-between border-b-[2px] pb-[1.5rem]"
                  key={item.planName}
                >
                  <div>
                    <p className="ubuntu-medium text-[#02295a]">
                      {item.planName}
                      {value.toggle === "left" ? "(Monthly)" : "(Yearly)"}
                    </p>
                    <button
                      className="underline ubuntu-regular text-[#9699ab] hover:text-[#473dff]"
                      onClick={handlePlan}
                    >
                      Change
                    </button>
                  </div>

                  <div>
                    <p className="ubuntu-bold text-[#02295a]">
                      {value.toggle === "left"
                        ? `${item.amountPerMonth}`
                        : `${item.amountPerYear}`}
                    </p>
                  </div>
                </li>
              );
            })}

            {/* Final AddOns Summary Goes here */}
            {value.finalAddons.map((item) => {
              return (
                <li className="flex justify-between" key={item.addOnName}>
                  <p className="ubuntu-regular text-[#9699ab]">
                    {item.addOnName}
                  </p>
                  <p className="ubuntu-regular text-[#02295a]">
                    {value.toggle === "left"
                      ? `${item.addOnsPricePerMonth}`
                      : `${item.addOnsPricePerYear}`}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-between p-[1rem]">
          <p className="ubuntu-medium text-sm text-[#9699ab]">
            {value.toggle === "left" ? "Total (per month)" : "Total (per year)"}
          </p>
          <p className="ubuntu-bold text-[#473dff]">
            {value.toggle === "left"
              ? `$${calculateAmount(timePeriod)}/mo`
              : `$${calculateAmount(timePeriod)}/yr`}
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default FinishingUp;
