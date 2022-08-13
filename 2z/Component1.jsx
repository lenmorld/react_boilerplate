import React from "react";
import useFetch from "./useFetch";
import { URL_TO_FETCH } from "./constants";

const Component1 = () => {
  const [post] = useFetch(URL_TO_FETCH);

  if (!post) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>Component1</h3>
      {post.id} - {post.title}
    </div>
  );
};

export default Component1;
