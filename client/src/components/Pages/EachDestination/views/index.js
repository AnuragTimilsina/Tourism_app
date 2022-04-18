import React from "react";
import { useParams } from "react-router-dom";
import dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import "./EachDestination.sass";

export default function EachDestination() {
  const param = useParams();
  return (
    <div className="EachDestination">
      <div className="Page1">
        <h1 className="title">Dhulikhel</h1>
        <div className="division">
          <p className="description">
            {" "}
            Dhulikhel is a municipality in Kavrepalanchok District of Nepal.[1]
            Two major highway B.P. Highway and Arniko Highway passes through
            Dhulikhel. Araniko Highway connects Kathmandu, Nepal's capital city
            with Tibet's border town of Kodari.[2] Dhulikhel is located at the
            Eastern rim of Kathmandu Valley, south of the Himalayas at 1550m
            above sea level and is situated 30 km southeast of Kathmandu and 74
            km southwest of Kodari. The Majority of people in dhulikhel is
            Newars, and Brahmin, Chhettri, Tamang and Dalit are also living in
            outer area of the town. Drinking water in Dhulikhel is some of the
            best water in Nepal. It was made with the help of the German NGO
            German Technical Cooperation.{" "}
          </p>
          <div className="image">
            <img src={dhulikhel} />
          </div>
        </div>
      </div>
    </div>
  );
}
