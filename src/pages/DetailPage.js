import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../store/posts/actions";
import { selectPost } from "../store/posts/selectors";
import CommentCard from "../components/CommentCard";
import { getComments } from "../store/posts/actions";
import { selectComments } from "../store/posts/selectors";

export default function DetailPage() {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const comments = useSelector(selectComments);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailPost(id), dispatch(getComments(id)));
  }, [dispatch, id]);

  return (
    <div>
      {!post ? (
        "Loading"
      ) : (
        <div className="detail-post">
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt="no img" />
        </div>
      )}
      <div>
        <div>
          {!comments
            ? "Loading..."
            : comments.map((comment, index) => {
                return (
                  <CommentCard
                    key={index}
                    id={comment.id}
                    comment={comment.comment}
                  />
                );
              })}
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-outline mb-2 mt-2">
        <label className="form-label" htmlFor="form4Example1">
          <b> Title</b>
        </label>
        <input
          type="text"
          id="form4Example1"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
         <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        disabled={!title || !description}
        onClick={() => createNewNote(title, description)}
      >
        Send
      </button>
      
      <hr/>
      

    </div>
  );
}
