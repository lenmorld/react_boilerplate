import React, { useState, useEffect } from "react";

const useFetch = (urlToFetch) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchFunc = async () => {
      console.log("Fetching...");

      const raw = await fetch(urlToFetch);
      const result = await raw.json();

      setData(result);
    };

    fetchFunc();
  }, []);

  return [data];
};

export default useFetch;
