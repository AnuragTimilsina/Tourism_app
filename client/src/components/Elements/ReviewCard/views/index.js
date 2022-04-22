import React from "react";
import { CgProfile } from "react-icons/cg";
import "./ReviewCard.sass";
export default function ReviewCard(prop) {
  return (
    <div className="ReviewCard">
      <div className="image">
        <CgProfile size={32} />
      </div>
      <div className="comment">
        <h1 className="name">Writer</h1>
        <p>This was such a amaxing experience being here</p>
      </div>
    </div>
  );
}
