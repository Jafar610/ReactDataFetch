import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Cat.css'


function Cat() {
  const [catFact, setCatFact] = useState("");

  const generate = () => {
    Axios("https://meowfacts.herokuapp.com/").then((res) => {
      setCatFact(res.data.data);
    });
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <>
      <div className="container">
        <button onClick={generate} className="btn">
          Generate Cat Fact
        </button>
        <p className="para">{catFact}</p>
      </div>
    </>
  );
}

export default Cat;
