import React, { useState, useEffect } from "react";
import ServiceCards from "../../../Elements/ServiceCards";
import "../../AllDestinationPage/views/AllDestinations.sass";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import { useParams } from "react-router-dom";
export default function AllServices() {
  const [services, setServices] = useState([]);
  const param = useParams();
  useEffect(() => {
    axios
      .get(BaseUrl + `services/listdestinationservice/${param.id}`)
      .then((res) => {
        setServices(res.data);
      });
  }, []);
  return (
    <div className="AllDestinationPage">
      <div className="DestinationPageTitle">
        <h1>All Services </h1>
      </div>
      <div className="DestinationCardsSection">
        {services.map((service, index) => (
          <ServiceCards
            src={Dhulikhel}
            title={service.package_name}
            description={service.description}
            id={service.Agency}
          />
        ))}
      </div>
    </div>
  );
}
