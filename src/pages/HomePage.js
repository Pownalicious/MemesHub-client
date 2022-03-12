import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getposts, postLike } from "../store/posts/actions";
import { selectPosts } from "../store/posts/selectors";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const filteredPosts = filteredList(posts, "title", search);

  useEffect(() => {
    dispatch(getposts());
  }, []);

  function filteredList(list = [], key, query) {
    let filteredList = list;

    if (search && key) {
      filteredList = filteredList.filter((post) =>
        post[key].toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredList;
  }

  function likeHandler(event) {
    let postId = event.target.id;
    dispatch(postLike(postId, true));
  }

  return filteredPosts.length === 0 && !search ? (
    <p>loading...</p>
  ) : (
    <div className="HomePage">
      <input
        type="text"
        className="searchbox"
        placeholder="Search.."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div className="posts-list">
        {filteredPosts.length === 0 ? (
          <p>no posts found</p>
        ) : (
          filteredPosts.map((post, index) => {
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
          })
        )}
      </div>
    </div>
  );
}
