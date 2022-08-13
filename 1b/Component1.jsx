import React, { useState, useRef } from "react";
const SEARCH_URL = "https://hn.algolia.com/api/v1/search?hitsPerPage=5&query="

const Component1 = () => {
  const [query, setQuery] = useState(null)
  const [results, setResults] = useState([])
  const cache = useRef({})

  const handleSearch = async () => {
      const searchUrl = `${SEARCH_URL}${query}`
      const cachedResults = cache.current[searchUrl]

      
      if (cachedResults) {
        console.log("✅ Using cached data")
        setResults(cachedResults)
      } else {
        console.log("🌏 Fetching...")
        const raw = await fetch(searchUrl);
        const result = await raw.json();
        const data = result?.hits
        
        cache.current[searchUrl] = data
        console.log("cache: ", cache.current)
        setResults(data)
      }
      // console.log(result)
  }

  return (
    <div>
      <h3>Search Hacker News</h3>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {
        !!results.length && (
          <div>
            <h3>Results</h3>
            <ul>
              {results.map(item => (
                <li key={item.url}>{item.title}</li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Component1;
