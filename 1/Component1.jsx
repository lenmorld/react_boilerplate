import React, { useState } from "react";
const SEARCH_URL = "https://hn.algolia.com/api/v1/search?hitsPerPage=5&query="

const Component1 = () => {
  const [query, setQuery] = useState(null)
  const [results, setResults] = useState([])

  const handleSearch = async () => {
      const searchUrl = `${SEARCH_URL}${query}`
      console.log("🌏 Fetching...")
      const raw = await fetch(searchUrl);
      const result = await raw.json();
      // console.log(result)
      setResults(result?.hits)
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
