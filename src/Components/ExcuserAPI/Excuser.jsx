import React, { useState, useEffect } from "react";
import Axios from "axios";
function Excuser() {
  const [excuse, setExcuse] = useState("");

  const familyExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then(
      (res) => {
        setExcuse(res.data[0].excuse);
      },
    );
  };

  const officeExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then(
      (res) => {
        setExcuse(res.data[0].excuse);
      },
    );
  };

  const partyExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then(
      (res) => {
        setExcuse(res.data[0].excuse);
      },
    );
  };

  useEffect(() => {
    familyExcuse,
    partyExcuse,
    officeExcuse
  }, []);

  return (
    <>
      <div className="container">
        <h1>Generate Excuses</h1>
        <div className="btns">
          <button onClick={familyExcuse}>Family Excuse</button>
          <button onClick={officeExcuse}>Office Excuse</button>
          <button onClick={partyExcuse}>Party Excuse</button>
        </div>
        <div className="para">
          <p>{excuse}</p>
        </div>
      </div>
    </>
  );
}

export default Excuser;
