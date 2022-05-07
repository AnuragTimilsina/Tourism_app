import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import "../../ServiceEdit/views/ServiceEdit.sass";
export default function AddServices() {
  const param = useParams();
  useEffect(() => {
    axios.get(BaseUrl + `${param}`).then((res) => {});
  });

  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  return (
    <div className="ServiceEdit">
      <div className="Title">
        <p>Title</p>
        <input
          placeholder="Title"
          type="text"
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="ImageADescription">
        <div className="imageInput">
          <p>Image</p>
          <div className="image">
            <input
              typeof="image/*"
              type="file"
              onChange={(e) => {
                setImage(e.target.files);
              }}
            />
          </div>
        </div>
        <div className="descriptionInput">
          <p>Description</p>
          <textarea aria-multiline="true" placeholder="Description" />
        </div>
      </div>
      <div className="submitButton">
        <button
          onClick={() => {
            axios.post(BaseUrl + "", {
              title,
              image,
              description,
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
