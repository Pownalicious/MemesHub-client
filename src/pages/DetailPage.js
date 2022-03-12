import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPost, postLike } from "../store/posts/actions";
import { selectPost } from "../store/posts/selectors";
import CommentCard from "../components/CommentCard";

import PostCard from "../components/PostCard";
import CommentForm from "../components/CommentForm";

export default function DetailPage() {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailPost(id));
  }, [dispatch, id]);

  function likeHandler(event) {
    let postId = event.target.id;
    dispatch(postLike(postId));
  }

  return !post ? (
    <p>Loading</p>
  ) : (
    <>
      <PostCard
        id={post.id}
        title={post.title}
        imageUrl={post.imageUrl}
        likes={post.likes}
        triggerLike={likeHandler}
      />
      <CommentForm />

      {post.comments.length > 0 &&
        post.comments.map((comment, index) => {
          return (
            <CommentCard
              key={index}
              id={comment.id}
              comment={comment.comment}
              userName={comment.userName}
            />
          );
        })}
    </>
  );
}
