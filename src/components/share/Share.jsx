import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios.js";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./Share.scss";
const Share = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);
  const textareaRef = useRef();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      }
    }
  );

  useEffect(() => {
    textareaRef.current.addEventListener("input", () => {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    setDescription("");
    setFile(null);
    mutation.mutate({ description: description, img: imgUrl });
  };

  const handleChange = (e) =>{
    if(description.length >= 200) {
      return false
    }
    else setDescription(e.target.value)
  }

  return (
    <div className="share">
      <div className="share_upper_content">
        <div className="share_profile-pic">
          <img src={currentUser.profile_pic} alt="" />
        </div>
        <div className="share_post_description">
          <textarea
            ref={textareaRef}
            name="post_desc"
            value={description}
            onChange={handleChange}
          ></textarea>
          {file && <img className="file" alt="" src={URL.createObjectURL(file)}/>}
        </div>
      </div>

      <div className="share_bottom_content">
        <div className="share_bottom_post-buttons">
          <div className="share_bottom_post-button">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="share_bottom_post-button" htmlFor="file">
              <AddAPhotoOutlinedIcon />
              <span>Add image</span>
            </label>
          </div>
          <div className="share_bottom_post-button">
            <PlaceOutlinedIcon />
            <span>Add place</span>
          </div>
          <div className="share_bottom_post-button">
            <AlternateEmailOutlinedIcon />
            <span>Tag friends</span>
          </div>
        </div>
        <div className="share_bottom_share-button">
          <button onClick={handleClick}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
