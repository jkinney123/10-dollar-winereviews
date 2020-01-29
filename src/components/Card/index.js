import React from "react";
import "./style.css";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header bg-white p-4">
        <h3 className=" text-center">
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
        {/* <button className="text-center">Order by Rating</button> */}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
