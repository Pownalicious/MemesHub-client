import React from "react";

export default function CommentCard(props) {
  return (
    <div>
      <p>Comment: {props.comment}</p>
      <p>{props.id}</p>
    </div>
  );
}
