import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import "./AllDestinations.sass";
import useAuth from "../../../../logic/auth";
import DestinationCards from "../../../Elements/DestinationCards";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";
export default function AllDestinations() {
  const { checkauth } = useAuth();
  useEffect(() => {
    checkauth();
  });
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    axios.get(BaseUrl + "services/destinationlist/").then((res) => {
      setDestinations(res.data);
    });
  }, []);
  return (
    <div className="AllDestinationPage">
      <div className="DestinationPageTitle">
        <h1>All Destinations </h1>
      </div>
      <div className="DestinationCardsSection">
        {destinations.map((destination, index) => (
          <DestinationCards
            src={Dhulikhel}
            title={destination.destination_name}
            description={destination.destination_description}
            id={destination.destination_id}
          />
        ))}
      </div>
    </div>
  );
}
