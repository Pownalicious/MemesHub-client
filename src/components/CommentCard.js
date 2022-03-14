import React from "react";

export default function CommentCard(props) {
  return (
    <div className="comment-card" id={"commentid-" + props.id}>
      <span className="user">{props.userName}</span>
      <span className="message">{props.comment}</span>
    </div>
  );
}
