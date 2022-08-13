import React from "react";
// import useFetch from "./useFetch";

// const FETCH_URL = "https://fakestoreapi.com/users/1";

const Component2 = ({ user }) => {
  // const [user] = useFetch(FETCH_URL, "Component1");

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
