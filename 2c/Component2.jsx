import React, { useState, useRef } from "react";
import useFetch from "./useFetch";
const SEARCH_URL = "https://hn.algolia.com/api/v1/search?hitsPerPage=5&query="

const Component2 = () => {
  const [search, setSearch] = useState(null)
  const inputRef = useRef()

  const [results] = useFetch(search, "Component2")

  const handleSearch = () => {
    setSearch(`${SEARCH_URL}${inputRef.current.value}`)

    // small trick to allow searching the same input, to test cache
    setTimeout(() => {
      setSearch('')
    }, 500)
  }

  return (
    <div>
      <h3>Search Hacker News</h3>
      <input type="text" ref={inputRef} />
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

export default Component2;
