import React, { useEffect } from "react";
import Hotel from "../../../../assets/images/hotel.jpg";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import "./EachServices.sass";
import ReviewCard from "../../../Elements/ReviewCard/views";
import useAuth from "../../../../logic/auth";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";
import Gallery from "react-grid-gallery";

export default function EachServices() {
  const IMAGES = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 240,
      thumbnailHeight: 212,
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ];
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
        <div className="padding">
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
              <span className="line"></span>
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
              <span className="line"></span>
            </div>
            <div className="booking">
              <div className="heading">
                <div className="price">
                  <h1>$4</h1>
                  <p> per night</p>
                </div>
                <div className="rating">
                  <AiFillStar />
                  4.3
                  <BsDot />
                  <p>12 reviews</p>
                </div>
              </div>
              <div className="input">
                <div className="dates">
                  <div>
                    <p>Entry Date:</p>
                    <input type="date" />
                  </div>
                  <span className="vertical" />
                  <div>
                    <p>Exit Date:</p>
                    <input type="date" />
                  </div>
                </div>
                <span className="horizental" />
                <input type="number" placeholder="Number of Guests" min={0} />
              </div>
              <button>Proceed</button>
            </div>
          </div>
          <div className="gallery">
            <Gallery images={IMAGES} />
          </div>
          <span className="line" />
          <div className="reviews">
            <div className="reviewArea">
              <textarea placeholder="Write your review..." aria-multiline />
              <button>Submit</button>
            </div>
            <span className="line" />
            {[1, 2, 3, 4, 5].map((a) => (
              <>
                <ReviewCard />
                <span className="line" />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
