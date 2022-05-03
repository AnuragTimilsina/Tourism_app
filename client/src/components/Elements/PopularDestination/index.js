import React, { useEffect, useState } from "react";
import Dhulikhel from "../../../assets/images/dhulikhel.jpg";
import "./PopularDestination.sass";
import { useNavigate } from "react-router-dom";
import DestinationCards from "../DestinationCards";
import axios from "axios";
import { BaseUrl } from "../../../common/config/httpsConfig";
export default function PopularDestination() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    axios.get(BaseUrl + "services/destinationlist").then((res) => {
      setDestinations(res.data);
    });
  }, []);
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
        {destinations.map((destination, index) => {
          if (index <= 4) {
            console.log(index);
            return (
              <DestinationCards
                src={Dhulikhel}
                title={destination.destination_name}
                description={destination.destination_description}
                id={destination.destination_id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
