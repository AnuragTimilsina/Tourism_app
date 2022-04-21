import React from "react";
import Dhulikhel from "../../../assets/images/dhulikhel.jpg";
import "./PopularDestination.sass";
import { useNavigate } from "react-router-dom";
import DestinationCards from "../DestinationCards";
export default function PopularDestination() {
  const navigate = useNavigate();

  const x = [1, 2, 3];
  return (
    <div className="DestinationPage">
      <div className="DestinationPageTitle">
        <div className="DestinationPageDescription">
          <h1>Popular Touris Destinations</h1>
        </div>
        <button
          className="DestinationPageViewAll"
          onClick={() => {
            navigate("/destination");
          }}
        >
          View All
        </button>
      </div>

      <div className="DestinationCardsSection">
        {x.map(() => (
          <DestinationCards
            src={Dhulikhel}
            title="Dhulikhel, Bagmati -Nepal"
            description="Dhulikhel is a municipality in Kavrepalanchok District of Nepal. Two major highway B.P.  "
            id="12329201"
          />
        ))}
      </div>
    </div>
  );
}
