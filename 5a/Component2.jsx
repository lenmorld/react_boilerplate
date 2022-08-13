import React, { useEffect } from "react";
import dataStore from "./useStore";

const FETCH_URL = "https://fakestoreapi.com/users/1";

const Component2 = () => {
  const user = dataStore((state) => state.data);
  const fetchData = dataStore((state) => state.fetchData);

  useEffect(() => {
    fetchData(FETCH_URL, "Component2");
  }, [fetchData]);

  return (
    <div>
      <h3>Header</h3>
      {user && (
        <div>
          {user.id} - {user.username}
        </div>
      )}
    </div>
  );
};

export default Component2;
