import axios from "axios";

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
    } catch (error) {
      console.log("No Data Found");
    }
  };
}
