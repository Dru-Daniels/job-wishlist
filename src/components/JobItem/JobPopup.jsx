import React from "react";

import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const JobPopup = ({ onClick }) => {
  return (
    <Popup
      trigger={
        <FontAwesomeIcon
          icon={faTrash}
          className="trash-icon"
          position="top center"
        />
      }
    >
      {(close) => (
        <div className="job-form-container pop-confirm">
          <h4>Delete Job?</h4>
          <p>Are you sure you want to delete this job?</p>
          <button className="popconfirm-button" onClick={onClick}>
            Delete
          </button>
          <button
            className="popconfirm-button popconfirm-button-accent"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      )}
    </Popup>
  );
};

export default JobPopup;
