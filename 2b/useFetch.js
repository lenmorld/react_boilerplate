import React, { useState, useEffect, useRef } from "react";

const cache = {}

const useFetch = (searchUrl, uniqueId) => {
    const [data, setData] = useState([]);

    // const cache = useRef({})

    useEffect(() => {
        if (!searchUrl) return
        // console.log("component Id: ", uniqueId)

        const fetchFunc = async () => {
            // const cachedResults = cache.current[searchUrl]
            const cachedResults = cache[searchUrl]
        
            if (cachedResults) {
                console.log("✅ Using cached data") 
                setData(cachedResults)
              } else {
                console.log("🌏 Fetching...")
                const raw = await fetch(searchUrl);
                const result = await raw.json();
                const hits = result?.hits
                
                // cache.current[searchUrl] = data
                cache[searchUrl] = hits
                // console.log("cache: ", cache.current)
                console.log("cache: ", cache)
                setData(hits)
              }
        }

        fetchFunc()
    }, [searchUrl])

    return [data]
}

export default useFetch