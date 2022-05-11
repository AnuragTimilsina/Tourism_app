import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import ServiceEditCards from "../../../Elements/ServicesEditCard/views";
import "./AgencyHome.sass";
import Dhulikhel from "../../../../assets/images/dhulikhel.jpg";
import { BaseUrl } from "../../../../common/config/httpsConfig";
import axios from "axios";
import useAuth from "../../../../logic/auth";

export default function AgencyHome() {
  const navigate = useNavigate();
  const agency_id = localStorage.getItem("id");
  const { checkAgencyAuth } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    checkAgencyAuth();
    axios
      .get(BaseUrl + `services/listagencyservice/${agency_id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);
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
        {!data ? (
          <div />
        ) : (
          data.map((datas, index) => (
            <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
          ))
        )}

        {/* <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" />
        <ServiceEditCards src={Dhulikhel} title="Dhulikhel" /> */}
      </div>
    </div>
  );
}
