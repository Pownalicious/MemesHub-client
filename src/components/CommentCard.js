import React from "react";
// import { useSelector } from "react-redux";

// import { selectUser } from "../store/user/selectors";

export default function CommentCard(props) {
  // const user = useSelector(selectUser);

  return (
    <div className="comment-card" id={"commentid-" + props.id}>
      <span className="user">{props.userName}</span>
      <span className="message">{props.comment}</span>
    </div>
  );
}
