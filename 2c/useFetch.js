import React, { useState, useEffect, useRef } from "react";

const cache = {}
let moduleCtr = 0

const useFetch = (searchUrl, uniqueId) => {
    let funcCtr = 0

    const [data, setData] = useState([]);
    const refCtr = useRef(0)

    // const cache = useRef({})

    useEffect(() => {
      let effectCtr = 0

      moduleCtr++
      funcCtr++
      refCtr.current++
      effectCtr++


        if (!searchUrl) return
        console.log("component Id: ", uniqueId)
      
        console.log(`${uniqueId} moduleCtr: `, moduleCtr)
        console.log(`${uniqueId} funcCtr: `, funcCtr)
        console.log(`${uniqueId} refCtr: `, refCtr.current)
        console.log(`${uniqueId} effectCtr: `, effectCtr)

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