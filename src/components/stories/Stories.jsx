import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Stories.scss";

const Stories = () => {
  const {currentUser} = useContext(AuthContext);
  //temdata
  const stories = [
    {
      id: 1,
      name: "Bruce Vilez",
      img: "https://images.pexels.com/photos/3692738/pexels-photo-3692738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Lisaya Shekotka",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
    {
      id: 3,
      name: "Ovalniy Kvadrat",
      img: "https://images.pexels.com/photos/3059930/pexels-photo-3059930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Chetire Nogi",
      img: "https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  console.log(currentUser)
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.img} alt={currentUser.name} />
        <span>{currentUser.name} {currentUser.lastname}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.img} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
