import React, { useEffect, useState } from "react";
import dataStore from "./useStore";

const FETCH_URL = "https://fakestoreapi.com/users/1";

const Component1 = () => {
  const [fetchCtr, setFetchCtr] = useState(1);

  const user = dataStore((state) => state.data);
  const fetchData = dataStore((state) => state.fetchData);

  // on load
  useEffect(() => {
    fetchData(FETCH_URL, "Component1");
  }, [fetchData]);

  // every click
  const fetchUser = () => {
    fetchData(FETCH_URL, "Component1");
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

export default Component1;
