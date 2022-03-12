import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getposts, postLike } from "../store/posts/actions";
import { selectPosts } from "../store/posts/selectors";

function filteredList(list, key, query) {
  let filtered = list;

  if (query && key) {
    filtered = filtered.filter(
      (item) => item[key].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  return filtered;
}

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const filteredPosts = filteredList(posts, "title");

  useEffect(() => {
    dispatch(getposts());
  }, []);

  function likeHandler(event) {
    let postId = event.target.id;
    dispatch(postLike(postId, true));
  }

  return filteredPosts.length === 0 ? (
    <p>loading...</p>
  ) : (
    <div className="posts-list">
      {filteredPosts.map((post, index) => {
        return (
          <PostCard
            key={index}
            id={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            likes={post.likes}
            triggerLike={likeHandler}
          >
            <NavLink className={"detail"} to={`/detail/${post.id}`}>
              <button>Comment</button>
            </NavLink>
          </PostCard>
        );
      })}
    </div>
  );
}
