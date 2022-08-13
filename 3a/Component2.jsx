import React from "react";
import useFetch from "./useFetch";

const FETCH_URL = "https://fakestoreapi.com/users/1";

const Component2 = () => {
  const [user] = useFetch(FETCH_URL, "Component2");

  return (
    <div>
      <h3>Profile</h3>
      {user && (
        <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default Component2;
