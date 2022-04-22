import React, { useEffect } from "react";
import useAuth from "../../../../logic/auth";
import PopularDestination from "../../../Elements/PopularDestination";
import Hotel from "../../../../assets/images/hotel.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./HomePage.sass";
export default function HomePage() {
  const { checkauth } = useAuth();
  useEffect(() => {
    checkauth();
  });
  return (
    <div className="HomePage">
      <div className="page1">
        <img src={Hotel} />
        <div className="overlay" />
        <div className="titles">
          <div className="touristApp">
            <h1>TOURIST APP</h1>
            <p>Make your Travel better with us</p>
          </div>
          <div className="box">
            <h1>"It's time for a short break"</h1>
          </div>
        </div>
      </div>
      <PopularDestination />
    </div>
  );
}
