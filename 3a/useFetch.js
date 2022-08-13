import React, { useState, useEffect, useRef } from "react";

const cache = {};

const useFetch = (searchUrl, uniqueId) => {
  const [data, setData] = useState({});

  // const cache = useRef({})

  useEffect(() => {
    if (!searchUrl) return;
    // console.log("component Id: ", uniqueId);

    const fetchFunc = async () => {
      // const cachedResults = cache.current[searchUrl]
      const cachedResults = cache[searchUrl];

      if (cachedResults) {
        console.log("✅ Using cached data");
        setData(cachedResults);
      } else {
        console.log("🌏 Fetching...");
        const raw = await fetch(searchUrl);
        const result = await raw.json();

        console.log("📦 Data arrives!", result);

        // cache.current[searchUrl] = data
        cache[searchUrl] = result;
        // console.log("cache: ", cache.current)
        console.log(`${uniqueId} cache: `, cache);
        setData(result);
      }
    };

    fetchFunc();
  }, [searchUrl]);

  return [data];
};

export default useFetch;
