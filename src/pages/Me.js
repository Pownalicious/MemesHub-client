import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectUser } from "../store/user/selectors";

export default function Me() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>{user.name}</h1>
      <hr />
      <div className="create-post-link">
        <NavLink style={{ textDecoration: "none" }} to={"/postform"}>
          <h4>Post a meme</h4>
        </NavLink>{" "}
      </div>
    </div>
  );
}
