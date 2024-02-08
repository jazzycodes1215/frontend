import React, { useState, useEffect } from "react";
import ProgressItem from "./ProgessItem";
import Name from "../taskFields/inputs/Name";


const ProgressContainer = () => {
  const [gettingValue, setGettingValue] = useState(0);
  const [status, setStatus] = useState("Not started");

  useEffect(() => {
    // Function to set status based on the value of integerValueName
    const setStatusFromValue = () => {
      if (gettingValue === 0) {
        setStatus("Not started");
      } else if (gettingValue > 1) {
        setStatus("In progress");
      } else if (gettingValue <= 5) {
        setStatus("Completed");
      }
    };

    // Call the function initially and whenever integerValueName changes
    setStatusFromValue();
  }, [gettingValue]);

// console.log(integerValueName)

  return (
    <div className="flex-row w mt-2 mr-5 w-96">
      <ProgressItem heading={"Requester Information"} status={"Not started"} />
      <ProgressItem heading={"Request Details"} status={"Not started"} />
      <ProgressItem heading={"Disclosure Criteria"} status={"Not started"} />
      <ProgressItem heading={"Product Details"} status={"Not started"} />
      <ProgressItem
        heading={"Final Check and Acknowledge"}
        status={"Not started"}
      />
    </div>
  );
};

export default ProgressContainer;
