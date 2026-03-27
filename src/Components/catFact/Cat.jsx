import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Cat.css'
import useFetch from '../useFetch/UseFetch'

function Cat() {
  const {data, loading, error, generate} = useFetch('https://meowfacts.herokuapp.com/');
  if(loading) return <h1>LOADING...</h1>;
  
  if(error) console.log(error)

  return (
    <>
      <div className="container">
        <button onClick={generate} className="btn">
          Generate Cat Fact
        </button>
        <p className="para">{data?.data}</p>
      </div>
    </>
  );
}

export default Cat;
