import React from "react";
import "./DestinationCards.sass";
import { AiOutlineArrowRight, AiTwotoneStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function DestinationCards(prop) {
  const navigate = useNavigate();
  return (
    <div className="DestinationCards">
      <div className="image">
        <img src={prop.src} alt={prop.src} />
        {/* <div className="ratingBox">
          <AiTwotoneStar size={26} color="#FF492F" />
          <h1>4.9</h1>
        </div> */}
      </div>
      <div className="Description">
        <p className="title">{prop.title}</p>
        <p className="description">{prop.description}</p>
        <div
          className="startJourneyButton"
          onClick={() => {
            navigate(`/destination/${prop.id}`);
          }}
        >
          <p>Start Journey</p>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}
