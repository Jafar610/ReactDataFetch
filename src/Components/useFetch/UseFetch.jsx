import React, { useState, useEffect } from "react";
import Axios from "axios";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    Axios.get(url).then((res) => {
      setData(res.data);
    })
    .catch((error)=>{
      setError(error);
    })
    .finally(()=>{
      setLoading(false)
    })

  }, [url]);
  return {data, loading, error};
}

export default UseFetch;
