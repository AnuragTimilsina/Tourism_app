import React, { useState, useEffect } from "react";
import ServiceCards from "../../../Elements/ServiceCards";
import "../../AllDestinationPage/views/AllDestinations.sass";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";
export default function AllServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get(BaseUrl + "services/destinationlist").then((res) => {
      setServices(res.data);
    });
  }, []);
  return (
    <div className="AllDestinationPage">
      <div className="DestinationPageTitle">
        <h1>All Destinations </h1>
      </div>
      <div className="DestinationCardsSection">
        {services.map((e) => (
          <ServiceCards
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
