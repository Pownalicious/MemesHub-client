import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { selectGenres } from "../store/posts/selectors";
import React, { useEffect } from "react";
import { getGenres } from "../store/posts/actions";
import { useParams } from "react-router-dom";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const token = useSelector(selectToken);
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  async function createNewPost(title, imageUrl, genreId) {
    try {
      let response = await axios.post(
        "http://localhost:4000/meme",
        { title, imageUrl, genreId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <form>
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">
            Genre
          </label>
          {!genres ? (
            " "
          ) : (
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option disabled value="">
                Choose...
              </option>
              {console.log("the genres: ", genres)}
              {genres.map((genre) => (
                <option value={genre.id}>{genre.title}</option>
              ))}
            </select>
          )}
        </div>
        <br />
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => createNewPost(title, imageUrl, selectedGenre)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
