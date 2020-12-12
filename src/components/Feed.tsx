import React from "react";
import { auth } from "../firebase";

export const Feed = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()}>Logout</button>
      <p>Feed</p>
    </div>
  );
};
