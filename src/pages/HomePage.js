import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getposts } from "../store/posts/actions";
import { selectPosts } from "../store/posts/selectors";
import { selectToken, selectUser } from "../store/user/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getposts());
  }, []);

  return (
    <div>
      {!token ? (
        " "
      ) : (
        <Nav.Item style={{ padding: ".5rem 1rem" }}>
          Welcome back {user.name}!
        </Nav.Item>
      )}

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
