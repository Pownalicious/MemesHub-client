import React from "react";
// import { useSelector } from "react-redux";

// import { selectUser } from "../store/user/selectors";

export default function CommentCard(props) {
  // const user = useSelector(selectUser);

  return (
    <div className="comment">
      <p className="UserName">{props.userName}</p>
      <p className="comment">{props.comment}</p>
    </div>
  );
}
