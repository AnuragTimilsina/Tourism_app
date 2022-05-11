import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import "../../ServiceEdit/views/ServiceEdit.sass";
import useAuth from "../../../../logic/auth";
export default function AddServices() {
  const { checkAgencyAuth } = useAuth();
  useEffect(() => {
    checkAgencyAuth();
  }, []);
  const param = useParams();
  const [destination, setDestination] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function addService() {
    let formdata = new FormData();
    formdata.append("package_name", title);
    formdata.append("description", description);
    formdata.append("amount", amount);
    formdata.append("Destination", destination);
    formdata.append("no_of_person", 4);

    axios.post(BaseUrl + `services/addservice/`, formdata).then((res) => {
      console.log("Here");
    });
  }

  return (
    <div className="ServiceEdit">
      <div className="Title">
        <p>Destination</p>
        <input
          placeholder="Destination Id"
          type="number"
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        <p>Title</p>
        <input
          placeholder="Title"
          type="text"
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
          <textarea
            aria-multiline="true"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="submitButton">
        <input
          type="number"
          onchange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Amount per night"
          min={500}
        />
        <button onClick={addService}>Submit</button>
      </div>
    </div>
  );
}
