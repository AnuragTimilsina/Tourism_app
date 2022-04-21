import axios from "axios";
import React, { useEffect } from "react";
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
  // useEffect(() => {
  //   axios.get(BaseUrl + "services/destinationlist/").then((res) => {
  //     console.log(res);
  //   });
  // });
  return (
    <div className="AllDestinationPage">
      <div className="DestinationPageTitle">
        <h1>All Destinations </h1>
      </div>
      <div className="DestinationCardsSection">
        {[1, 2, 3, 4, 5, 6, 7, , 8].map((e) => (
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
