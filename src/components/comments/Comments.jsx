import React, { useContext, useEffect, useRef } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

const comments = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "John Doe",
    userId: 1,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "Jane Doe",
    userId: 2,
    profilePicture:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current.addEventListener("input", () => {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    });

    
  }, []);

  return (
    <div className="comments">
      <div className="write_comment">
        <img src={currentUser.img} alt={currentUser.name} />
        <textarea
          ref={textareaRef}
          placeholder="Comment post..."
          name="write_comment"
          id=""
          cols="30"
          rows="1"
        />
        <button>Comment</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img src={comment.profilePicture} alt={comment.name} />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="comment_date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
