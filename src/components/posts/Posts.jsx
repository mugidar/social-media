import React from "react";
import Post from "../post/Post";
import "./Posts.scss"
//tempdata
const posts = [
  {
    id: 1,
    name: "Tanya Gorilla",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/2641773/pexels-photo-2641773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/4746698/pexels-photo-4746698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Tualet Derevensky",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Posts = () => {
  return <div className="posts">
    {
      posts.map((post) => <Post key={post.id} {...post} />)
    }
  </div>;
};

export default Posts;
