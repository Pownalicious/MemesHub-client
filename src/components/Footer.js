import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Footer() {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const response = await axios.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error, "no data");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="footer">
      <div className="logo">
        <p>logo</p>
      </div>

      <div className="categorylinks">
        <ul>
          {categories.map((genre, index) => {
            return (
              <li key={index} style={{ textDecoration: "none" }}>
                <NavLink
                  to={`/categories/${genre.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {genre.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <NavLink style={{ textDecoration: "none" }} to={"/signup"}>
          <h2 style={{ color: "black" }}>Signup</h2>
        </NavLink>
      </div>

      <div>
        <h3>My account</h3>
      </div>
      <div>
        <a href="http://www.facebook.com" className="fa fa-facebook"></a>
        <a href="http://www.twitter.com" className="fa fa-twitter"></a>
        <a href="http://www.instagram.com" className="fa fa-instagram"></a>
        <a href="http://www.snapchat.com" className="fa fa-snapchat"></a>
      </div>
    </div>
  );
}

export { Footer };
