import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import ServiceCards from "../../../Elements/ServiceCards";
import "./EachDestination.sass";
import useAuth from "../../../../logic/auth";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
export default function EachDestination() {
  const navigate = useNavigate();
  const { checkauth } = useAuth();
  const param = useParams();
  const [services, setServices] = useState([]);
  const [destinationdetail, setDestinationdetail] = useState({});
  useEffect(() => {
    checkauth();
    axios
      .get(BaseUrl + `services/destinationdetail/${param.id}`)
      .then((res) => {
        setDestinationdetail(res.data[0]);
      });
    axios
      .get(BaseUrl + `services/listdestinationservice/${param.id}`)
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  return (
    <div className="EachDestination">
      <div className="Page1">
        <div className="division">
          <div className="image">
            <img src={dhulikhel} />
          </div>
          <div className="description">
            <h1 className="title"> {destinationdetail.destination_name}</h1>
            <span />
            <p>{destinationdetail.destination_description}</p>
          </div>
        </div>
      </div>
      <div className="Page2">
        <div className="title">
          <h1 className="title">Popular Servies</h1>
          <button
            onClick={() => {
              navigate(`/services/${param.id}`);
            }}
          >
            See All
          </button>
        </div>
        <div className="ServiceCards">
          {services.map((service) => (
            <ServiceCards
              id={service.Agency}
              src={dhulikhel}
              title={service.package_name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
