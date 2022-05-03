import React, { useEffect, useState } from "react";
import Hotel from "../../../../assets/images/hotel.jpg";
import "./EachServices.sass";
import ReviewCard from "../../../Elements/ReviewCard/views";
import useAuth from "../../../../logic/auth";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";
import Gallery from "react-grid-gallery";
import { useParams } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";
import axios from "axios";
import { BaseUrl } from "../../../../common/config/httpsConfig";

export default function EachServices() {
  let config = {
    // replace this key with yours
    publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  let checkout = new KhaltiCheckout(config);
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
  let param = useParams();
  useEffect(() => {
    checkauth();
  });
  const [detail, setDetail] = useState({});
  useEffect(() => {
    console.log(param);
    axios.get(BaseUrl + `services/servicedetail/${param.id}`).then((res) => {
      setDetail(res.data);
    });
  }, []);

  const [guestNo, setGuestNo] = useState(1);
  return (
    <div className="EachServices">
      <div className="Page1">
        <img className="Image" src={Hotel} />
        <div className="box">
          <div>
            <h1>{detail.package_name}</h1>
            <p>{detail.description}</p>
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
                  <h1>Rs{detail.amount}</h1>
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
                <input
                  type="number"
                  placeholder="Number of Guests"
                  min={0}
                  onChange={(e) => {
                    setGuestNo(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  checkout.show({ amount: detail.amount * guestNo * 100 });
                }}
              >
                Proceed
              </button>
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
