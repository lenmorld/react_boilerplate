import React from "react";

import Component1 from "./Component1";
import Component2 from "./Component2";

import useFetch from "./useFetch";

const FETCH_URL = "https://fakestoreapi.com/users/1";

export default function App() {
  const [user] = useFetch(FETCH_URL, "App");

  return (
    <div className="App">
      <Component1 user={user} />
      <Component2 user={user} />
    </div>
  );
}
