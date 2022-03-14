import axios from "axios";
import { selectUser } from "../user/selectors";
import { showMessageWithTimeout } from "../appState/actions";

//SET ALL POSTS
export const setPosts = (data) => ({
  type: "SET/posts",
  payload: data,
});

//SET ONE POST
export const setPost = (data) => ({
  type: "SET/post",
  payload: data,
});

//SET ALL GENRES
export const setGenres = (data) => ({
  type: "SET/genres",
  payload: data,
});

//SET ALL LIKES
export const setLikes = (data) => ({
  type: "SET/posts",
  payload: data,
});

//SET POST COMMENTS
export const setComments = (data) => ({
  type: "SET/comments",
  payload: data,
});

//GET ALL POSTS
export function getposts() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/posts`);
      console.log("Im getting posts data back", response);
      dispatch(setPosts(response.data));
    } catch (error) {
      console.warn("No data");
    }
  };
}

//GET DETAILS POST
export function getDetailPost(id) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/post/${id}`);
      dispatch(setPost(response.data));
    } catch (error) {
      console.log("No data found");
    }
  };
}

//GET COMMENTS
export function getComments(id) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(
        `http://localhost:4000/post/${id}/comments`
      );
      dispatch(setComments(response.data));
    } catch (error) {}
    console.log("No comments data found");
  };
}

//GET LIKES
export function postLike(postId, getAllPosts = false) {
  return async function thunk(dispatch, getState) {
    const { token } = selectUser(getState());
    try {
      const response = await axios.post(
        `http://localhost:4000/post/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        if (getAllPosts) {
          dispatch(getposts());
        } else {
          dispatch(getDetailPost(postId));
        }
      }
    } catch (error) {
      console.log("No likes data found");
    }
  };
}

//GET ALL GENRES
export function getGenres() {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/genres`);
      console.log("Im getting genres data back", response);
      dispatch(setGenres(response.data));
    } catch (error) {
      console.warn("No genres data");
    }
  };
}

//POST COMMENT
export function createComment(postId, comment) {
  return async function thunk(dispatch, getState) {
    const { token } = selectUser(getState());
    const response = await axios.post(
      `http://localhost:4000/comment`,
      {
        postId,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data) {
      dispatch(
        showMessageWithTimeout("success", false, "Comment placed!", 2500)
      );
      dispatch(getDetailPost(postId));
    }
  };
}

//DELETE ONE POST AS AN ADMIN
export function deletePost(id) {
  return async function thunk(dispatch, getState) {
    const { token } = selectUser(getState());
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        console.log("Reservation deleted", response);
        dispatch(getposts());
      }
    } catch (error) {
      console.log(error);
    }
  };
}
