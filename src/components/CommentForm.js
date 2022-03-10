import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../store/posts/actions";
import { useParams } from "react-router-dom";
export default function CommentForm() {
  const dispatch = useDispatch();
  const [description, setComment] = useState("");
  const { id } = useParams();

  return (
    <form onSubmit={createComment()}>
      <div className="form-outline mb-2 mt-2">
        <label className="form-label" htmlFor="form4Example1">
          <b> Title</b>
        </label>
        <input
          type="text"
          id="form4Example1"
          className="form-control"
          value={description}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        onClick={() => dispatch(createComment(id, description))}
      >
        Send
      </button>
    </form>
  );
}
