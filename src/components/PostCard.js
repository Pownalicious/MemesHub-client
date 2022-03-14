import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/posts/actions";
import { selectUser } from "../store/user/selectors";

export default function PostCard(props) {
  const dispatch = useDispatch(deletePost);
  const user = useSelector(selectUser);

  function cancelHandler(postId) {
    let awnser = window.confirm("Are you sure you wish you delete the post?");
    if (!awnser) return;
    dispatch(deletePost(postId));
  }

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
        {user.isAdmin ? (
          <>
            <button
              id="admin-delete"
              onClick={() => cancelHandler(props.postId)}
            >
              ADMIN DELETE
            </button>
          </>
        ) : null}
      </div>
      <hr />
    </div>
  );
}
