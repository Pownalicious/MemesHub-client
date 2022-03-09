import React from "react";
import { NavLink } from "react-router-dom";

export default function PostCard(props) {
  return (
    <div className="post-card">
      <p>{props.id}</p>
      <p>{props.title}</p>
      <img src={props.imageUrl} alt="meme" />
      {!props.hideButton} (
      <NavLink to={`/detail/${props.id}`}>
        <button>View details</button>
      </NavLink>
    </div>
  );
}
