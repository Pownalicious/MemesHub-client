import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../store/posts/actions";
import { selectPost } from "../store/posts/selectors";
import CommentCard from "../components/CommentCard";
import { getComments } from "../store/posts/actions";
import { selectComments } from "../store/posts/selectors";
import CommentForm from "../components/CommentForm";

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
                return <CommentCard key={index} comment={comment.comment} />;
              })}
        </div>
        <CommentForm />
      </div>
    </div>
  );
}
