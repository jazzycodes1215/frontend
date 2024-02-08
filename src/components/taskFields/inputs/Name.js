import React, { useState } from "react";

const Name = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [primaryPOCName, setPrimaryPOCName] = useState(""); 
  const [additionalPOCName, setAdditionalPOCName] = useState(""); 
  const [gettingValue, setGettingValue] = useState(0);

let add = 0

  const handleChangeName = (event) => {
    setName(event.target.value);
    add = add + 1
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value); 
    add = add + 1  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
    add = add + 1  };

  const handleChangePrimaryPOCName = (event) => {
    setPrimaryPOCName(event.target.value);
    add = add + 1  };

  const handleChangeAdditionalPOCName = (event) => {
    setAdditionalPOCName(event.target.value);
    add = add + 1  };

  console.log(add)
  return (
    <div className="m-5">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border border-black ml-3"
        value={name}
        onChange={handleChangeName}
      />
      <label htmlFor="Email">Email:</label>
      <input
        type="text"
        id="Email"
        name="Email"
        className="border border-black ml-3"
        value={email}
        onChange={handleChangeEmail}
      />
      <label htmlFor="Phone">Phone:</label>
      <input
        type="text"
        id="Phone"
        name="Phone"
        className="border border-black ml-3"
        value={phone}
        onChange={handleChangePhone}
      />
      <label htmlFor="PrimaryPOCName">Primary POC Name:</label>
      <input
        type="text"
        id="PrimaryPOCName"
        name="PrimaryPOCName"
        className="border border-black ml-3"
        value={primaryPOCName}
        onChange={handleChangePrimaryPOCName}
      />
      <label htmlFor="AdditionalPOCName">Additional POC Name:</label>
      <input
        type="text"
        id="AdditionalPOCName"
        name="AdditionalPOCName"
        className="border border-black ml-3"
        value={additionalPOCName}
        onChange={handleChangeAdditionalPOCName}
      />
    </div>
  );
};

export default Name;
