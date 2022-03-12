import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../store/posts/actions";

export default function CommentForm() {
  const dispatch = useDispatch();
  const [description, setComment] = useState("");
  const { id } = useParams();

  async function formSubmitHandler(event, id, description) {
    event.preventDefault();
    dispatch(createComment(id, description));
    setComment("");

    setTimeout(() => {
      let allComments = document.querySelectorAll(".comment-card");
      let lastComment = allComments[allComments.length - 1];

      if (lastComment) {
        let lastItem = document.getElementById(lastComment.id);
        lastItem.classList.add("is-new");
        lastItem.scrollIntoView();
      }
    }, 250);
  }

  return (
    <form onSubmit={(event) => formSubmitHandler(event, id, description)}>
      <div className="form-outline mb-2 mt-2">
        <input
          type="text"
          id="form4Example1"
          className="form-control"
          placeholder="Write a comment"
          value={description}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        // onClick={() => dispatch(createComment(id, description))}
      >
        Send
      </button>
    </form>
  );
}
