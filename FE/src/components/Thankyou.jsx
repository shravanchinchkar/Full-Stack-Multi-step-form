import React, { useContext } from "react";
import { cardContext } from "../context/context";

const Thankyou = () => {
  const value = useContext(cardContext);
  return (
    <>
      <div
        className={
          value.displayThankyou === true
            ? "p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl flex flex-col justify-center items-center gap-[1rem]"
            : "hidden"
        }

        // className="p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl flex flex-col justify-center items-center gap-[1rem]"
      >
        <div>
          <img src="./assets/images/icon-thank-you.svg" alt="thankyou" />
        </div>
        <div>
          <p className="ubuntu-bold text-2xl text-[#02295a]">Thank you!</p>
        </div>
        <div>
          <p className="ubuntu-regular text-center text-[#9699ab]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
