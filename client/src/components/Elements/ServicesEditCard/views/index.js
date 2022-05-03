import React from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineArrowRight,
  AiTwotoneStar,
} from "react-icons/ai";
import "./ServiceEditCard.sass";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";
export default function ServiceEditCards(prop) {
  function deleteService() {
    axios
      .delete(BaseUrl + `services/servicedelete/${prop.service_id}/`)
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        alert("Sorry Could not be deleted !!!");
      });
  }
  const navigate = useNavigate();
  return (
    <div className="ServiceEditCards">
      <div className="image">
        <img src={prop.src} alt={prop.src} />
        <div className="ratingBox">
          <AiTwotoneStar size={26} color="#FF492F" />
          <h1>4.9</h1>
        </div>
      </div>
      <div className="Description">
        <p className="title">{prop.title}</p>
        <div className="startJourneyButton">
          <AiFillEdit
            size={26}
            onClick={() => {
              navigate(`/agency/serviceEdit/${prop.id}`);
            }}
          />
          <AiFillDelete size={26} onClick={deleteService} />
        </div>
      </div>
    </div>
  );
}
