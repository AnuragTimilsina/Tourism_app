import React from "react";
import "../DestinationCards/DestinationCards.sass";
import { AiOutlineArrowRight, AiTwotoneStar } from "react-icons/ai";
import Footer from "../Footer/footer"
export default function ServiceCards(prop) {
  return (
    <div className="DestinationCards">
      <div className="image">
        <img src={prop.src} alt={prop.src} />
        <div className="ratingBox">
          <AiTwotoneStar size={26} color="#FF492F" />
          <h1>4.9</h1>
        </div>
      </div>
      <div className="Description">
        <p className="title">{prop.title}</p>
        <p className="description">{prop.description}</p>
        <div className="startJourneyButton">
          <p>Know More</p>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
   
  );
}
