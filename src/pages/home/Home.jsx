import React from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./Home.scss";
import Share from "../../components/share/Share";

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  );
};

export default Home;
