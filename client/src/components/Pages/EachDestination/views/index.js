import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import ServiceCards from "../../../Elements/ServiceCards";
import "./EachDestination.sass";
import useAuth from "../../../../logic/auth";
export default function EachDestination() {
  const { checkauth } = useAuth();
  useEffect(() => {
    checkauth();
  });
  const param = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices([1, 2, 3, 4]);
    axios.get(BaseUrl + param.id).then((res) => {
      console.log(res);
    });
    // axios.get(BaseUrl + `services/servicelist/${param.id}`).then((res) => {
    //   setServices(res.data);
    // });
  }, []);

  return (
    <div className="EachDestination">
      <div className="Page1">
        <div className="division">
          <div className="image">
            <img src={dhulikhel} />
          </div>
          <div className="description">
            <h1 className="title">Dhulikhel</h1>
            <span />
            <p>
              {" "}
              Dhulikhel is a municipality in Kavrepalanchok District of
              Nepal.[1] Two major highway B.P. Highway and Arniko Highway passes
              through Dhulikhel. Araniko Highway connects Kathmandu, Nepal's
              capital city with Tibet's border town of Kodari.[2] Dhulikhel is
              located at the Eastern rim of Kathmandu Valley, south of the
              Himalayas at 1550m above sea level and is situated 30 km southeast
              of Kathmandu and 74 km southwest of Kodari. The Majority of people
              in dhulikhel is Newars, and Brahmin, Chhettri, Tamang and Dalit
              are also living in outer area of the town. Drinking water in
              Dhulikhel is some of the best water in Nepal. It was made with the
              help of the German NGO German Technical Cooperation.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="Page2">
        <div className="title">
          <h1 className="title">Popular Servies</h1>
          <button>See All</button>
        </div>
        <div className="ServiceCards">
          {services.map((a) => (
            <ServiceCards
              src={dhulikhel}
              title="Dwarika"
              description="famours as fjasdkl jl famours as fjasdkl jl famours as fjasdkl jl famours as fjasdkl jl famours as fjasdkl jl famours as fjasdkl jl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
