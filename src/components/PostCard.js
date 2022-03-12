import React from "react";

export default function PostCard(props) {
  return (
    <div className="post-card">
      <h3 className="title">{props.title}</h3>
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="buttons">
        <button onClick={props.triggerLike} id={props.id}>
          Like {props.likes.length}
        </button>
        {props.children && props.children}
      </div>
      <hr />
    </div>
  );
}
