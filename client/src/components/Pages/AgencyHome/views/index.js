import React from "react";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import ServiceEditCards from "../../../Elements/ServicesEditCard/views";
import "./AgencyHome.sass";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";

export default function AgencyHome() {
  const navigate = useNavigate();
  return (
    <div className="AgencyHome">
      <div className="header">
        <h1> All Services:</h1>
        <div
          className="addbutton"
          onClick={() => {
            navigate("/addService");
          }}
        >
          <p>Add service</p>
          <GrAdd />
        </div>
      </div>
      <div className="ServicesEditCards">
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
      </div>
    </div>
  );
}
