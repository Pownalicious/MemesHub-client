import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../store/posts/actions";
import { selectPost } from "../store/posts/selectors";
import CommentCard from "../components/CommentCard";
import { getComments } from "../store/posts/actions";
import { selectComments } from "../store/posts/selectors";
import PostCard from "../components/PostCard";
import CommentForm from "../components/CommentForm";

export default function DetailPage() {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const comments = useSelector(selectComments);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailPost(id));
  }, [dispatch, id]);

  return !post ? (
    <p>Loading</p>
  ) : (
    <>
      <PostCard id={post.id} title={post.title} imageUrl={post.imageUrl} />
      <CommentForm />

      {post.comments.length > 0 &&
        post.comments.map((comment, index) => {
          return (
            <CommentCard
              key={index}
              comment={comment.comment}
              userName={comment.userName}
            />
          );
        })}
    </>
  );
}
