import React, { useEffect, useState } from "react";
import dataStore from "./useStore";

// const FETCH_URL = "https://fakestoreapi.com/users/1";
const FETCH_URL = "https://fakestoreapi.com/users";

const Component2 = () => {
  const [fetchCtr, setFetchCtr] = useState(1);

  const user = dataStore((state) => state.data);
  const fetchData = dataStore((state) => state.fetchData);

  // on load
  useEffect(() => {
    fetchData("https://fakestoreapi.com/users/1", "Component2");
  }, [fetchData]);

  // every click, fetch user from 1-3
  const fetchUser = () => {
    const nextUser = Math.ceil(fetchCtr / 2);
    fetchData(`${FETCH_URL}/${nextUser}`, "Component2");
    // rotate
    setFetchCtr((prev) => prev + 1);
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
      <div>times fetched: {fetchCtr}</div>
    </div>
  );
};

export default Component2;
