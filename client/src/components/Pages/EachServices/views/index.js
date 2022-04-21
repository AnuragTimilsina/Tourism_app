import React, { useEffect } from "react";
import Hotel from "../../../../assets/images/hotel.jpg";
import "./EachServices.sass";
import ReviewCard from "../../../Elements/ReviewCard/views";
import useAuth from "../../../../logic/auth";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";

export default function EachServices() {
  const { checkauth } = useAuth();
  useEffect(() => {
    checkauth();
  });
  return (
    <div className="EachServices">
      <div className="Page1">
        <img className="Image" src={Hotel} />
        <div className="box">
          <div>
            <h1>Hotel Dwarika is the hotel</h1>
            <p>Make your Journey more awesome</p>
          </div>
        </div>
      </div>
      <div className="Page2">
        <div className="contents">
          <div className="descriptions">
            <div className="Header">
              <h1>5 star hotel</h1>
              <div className="rating">
                <AiFillStar size={32} />
                <AiFillStar size={32} />
                <AiFillStar size={32} />
                <AiFillStar size={32} />
                <AiFillStar size={32} />
              </div>
            </div>
            <div className="headings">
              <p>Dhulikhel, 3 Bhattidada</p>
              <BsDot />
              <p>Service by: Nirjal</p>
            </div>
            <span></span>
            <div className="available">
              <div>
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
              <div>
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
              <div>
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
              <div>
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
              <div>
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
              <div>
                <FaSwimmingPool />
                <p>Swimming Pool</p>
              </div>
            </div>
          </div>
          <div className="booking">
            <h1>Book Now</h1>
            <input type="number" placeholder="Number of Guests" min={0} />
            <p>Entry Date:</p>
            <input type="date" />
            <p>Exit Date:</p>
            <input type="date" />
            <button>Proceed</button>
          </div>
        </div>
      </div>
      <div>
        <div className="gallery">
          <img src={Hotel} width="200px" />
          <img src={Hotel} width="200px" />
          <img src={Hotel} width="200px" />
          <img src={Hotel} width="200px" />
        </div>
        <div className="reviews">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
