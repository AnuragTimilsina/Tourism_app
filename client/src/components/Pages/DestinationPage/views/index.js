import React from "react";
import DestinationCards from "../../../Elements/DestinationCards/index";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import "./DestinationPage.sass";

export default function DestinationPage() {
  const x = [1, 2, 3];
  return (
    <div className="DestinationPage">
      <div className="DestinationPageTitle">
        <div className="DestinationPageDescription">
          <h1>POPULAR TOURIST PLACE</h1>
          <p>
            These are the popular destination over nepal that you can enjoy
            <br />
            These are the popular destination over nepal that you can enjoy
          </p>
        </div>
        <button className="DestinationPageViewAll">View All</button>
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
