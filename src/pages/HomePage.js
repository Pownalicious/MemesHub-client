import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getposts } from "../store/posts/actions";
import { selectPosts } from "../store/posts/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getposts());
  }, []);

  return (
    <div>
      <div className="posts-list">
        {posts.length === 0 ? (
          <p>loading...</p>
        ) : (
          posts.map((post, index) => {
            return (
              <PostCard
                key={index}
                id={post.id}
                title={post.title}
                imageUrl={post.imageUrl}
              />
            );
          })
        )}
        ;
      </div>
    </div>
  );
}
