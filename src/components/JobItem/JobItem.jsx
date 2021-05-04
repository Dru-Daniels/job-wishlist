import React, { useRef } from "react";
import TimeAgo from "react-timeago";

import JobPopup from "./JobPopup";

import "./JobItem.scss";

const JobItem = ({ item, handleDelete }) => {
  const myRef = useRef();

  const colorArray = ["#8fb1df", "#fd6e7b", "#48bf71", "#6680b1"];
  const color = colorArray[Math.floor(Math.random() * colorArray.length)];

  const onRemove = () => {
    myRef.current.id = "active";
    setTimeout(() => {
      handleDelete();
    }, 200);
  };

  const onError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://image.freepik.com/free-vector/arrow-star-logo-template_1222-835.jpg";
    e.target.alt = "dream job logo";
  };

  let logoUrl = `https://logo.uplead.com/${item.company
    .replace(/ /g, "")
    .toLowerCase()}.com`;

  return (
    <div
      className="list"
      key="item.key"
      ref={myRef}
      style={{ backgroundColor: color }}
    >
      <div className="list-content">
        <div className="list-content-left">
          <div className="img-wrapper">
            <img src={logoUrl} alt={`${item.company} logo`} onError={onError} />
          </div>
          <div className="list-text">
            <p id="list-company">{item.company}</p>
            <p>{item.job}</p>
          </div>
        </div>
        <JobPopup onClick={onRemove} />
      </div>
      <p className="list-time">
        added <TimeAgo date={item.key} /> ...
      </p>
    </div>
  );
};

export default JobItem;
