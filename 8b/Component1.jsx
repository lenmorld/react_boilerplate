import React, { useEffect, useState } from "react";
import dataStore from "./useStore";

// const FETCH_URL = "https://fakestoreapi.com/users/1";
const FETCH_URL = "https://fakestoreapi.com/users";

const Component1 = () => {
  const [fetchCtr, setFetchCtr] = useState(1);
  const [forceClearCache, setForceClearCache] = useState(false);

  const user = dataStore((state) => state.data);
  const fetchData = dataStore((state) => state.fetchData);

  // on load
  useEffect(() => {
    fetchData(
      "https://fakestoreapi.com/users/1",
      "Component1",
      forceClearCache
    );
  }, [fetchData]);

  const fetchUser = () => {
    // const nextUser = Math.ceil(fetchCtr / 2);
    fetchData(
      "https://fakestoreapi.com/users/1",
      "Component1",
      forceClearCache
    );
    // fetchData(`${FETCH_URL}/${nextUser}`, "Component1");
    // rotate
    setFetchCtr((prev) => prev + 1);
  };

  const handleCheckForceClearCache = (event) => {
    console.log(event.target.checked);
    setForceClearCache(event.target.checked);
  };

  return (
    <div>
      <h3>Header</h3>
      {user && (
        <div>
          {user.id} - {user.username}
        </div>
      )}
      <button onClick={fetchUser}>Fetch!</button>
      <label>
        <input
          type="checkbox"
          checked={forceClearCache}
          onChange={handleCheckForceClearCache}
        />
        Force cache clear
      </label>
      <div>times fetched: {fetchCtr}</div>
    </div>
  );
};

export default Component1;
