import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { cardContext } from "./context/context";
import js from "@eslint/js";

function App() {
  const [steps, setsteps] = useState(() => {  // use to highlight the steps in the sidebar
    // Initialize from localStorage or default to 1
    const savedSteps = localStorage.getItem("formSteps");
    return savedSteps !== null ? JSON.parse(savedSteps) : 1;
  });
  
  const [toggle, settoggle] = useState("left"); //used for the toggle button
  const [totalBill, settotalBill] = useState([]); //It's the array of object which consist of summary of Selected Plan
  const [finalAddons, setfinalAddons] = useState([]); //It's the array of object which consist of summary of Addons
  const [displayThankyou, setdisplayThankyou] = useState(false); //use to display the Thankyou page of the form


  useEffect(() => {
    localStorage.setItem("formSteps", JSON.stringify(steps));
  }, [steps]);

  return (
    <>
      <cardContext.Provider
        value={{
          steps,
          setsteps,
          toggle,
          settoggle,
          totalBill,
          settotalBill,
          finalAddons,
          setfinalAddons,
          displayThankyou,
          setdisplayThankyou,
        }}
      >
        <div className="w-[100vw] h-[100vh] bg-[#bfe2fd] flex justify-center items-center">
          <Card />
        </div>
      </cardContext.Provider>
    </>
  );
}

export default App;
