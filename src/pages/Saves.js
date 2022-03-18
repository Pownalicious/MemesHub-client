import React, { useEffect, useState } from "react";
import axios from "axios";

function Saves(props) {
  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  const variable = {
    userId: props.userId,
    postId: props.postId,
  };

  useEffect(() => {
    axios.post("/api/favorite/favoriteNumber", variable).then((response) => {
      if (response.data.success) {
        console.log(response.data.favoriteNumber);
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("Failed to get favoriteNumber");
      }
    });

    axios.post("/favorite/favorited", variable).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert("Failed to get Favorite Info");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (Favorited) {
      axios
        .post("/api/favorite/removeFromFavorite", variable)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert(" Failed to remove from favorite");
          }
        });
    } else {
      axios.post("/api/favorite/addToFavorite", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert(" Failed to add to Favorites");
        }
      });
    }
  };

  return (
    <div>
      <button onClick={onClickFavorite}>
        {Favorited ? " remove from Favorite " : "Add to Favorite"}
        {FavoriteNumber}
      </button>
    </div>
  );
}

export default Saves;
