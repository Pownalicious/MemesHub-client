import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Me from "./pages/Me";
import PostForm from "./pages/PostForm";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className={"App" + (darkMode ? " dark-mode" : " light-mode")}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <div className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Me />} />
          <Route path="/postform" element={<PostForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
