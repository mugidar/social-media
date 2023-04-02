import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./Posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import axios from "axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], async () => {
    const res = await makeRequest.get("/posts");
    return res.data;
  });


  return (
    <div className="posts">
      {error ? (
        <h1>Smth went wrong</h1>
      ) : isLoading ? (
        <h1>Loading</h1>
      ) : (
        data.map((post) => <Post key={post.id} {...post} />)
      )}
    </div>
  );
};

export default Posts;
