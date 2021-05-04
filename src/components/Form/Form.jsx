import React, { useState } from "react";

import "./Form.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = ({ onSubmit, close }) => {
  const [inputValue, setInputValue] = useState({
    company: "",
    job: "",
    logo: "",
    key: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
      key: Date.now()
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue({
      company: "",
      job: "",
      logo: "",
      key: ""
    });
    close(); setTimeout(() => {
      close();
    }, 200);
  };

  return (
    <form id="job-form" onSubmit={handleOnSubmit}>
      <div className="job-form-input-container">
        <input
          name="company"
          id="company"
          type="text"
          placeholder="Company Name"
          value={inputValue.company}
          onChange={handleChange}
          required
        />
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </div>
      <div className="job-form-input-container">
        <input
          name="job"
          id="job"
          type="text"
          placeholder="Job Title"
          value={inputValue.job}
          onChange={handleChange}
          required
        />
        <FontAwesomeIcon icon={faBriefcase} className="icon" />
      </div>
      <button type="submit">Continue</button>
    </form>
  );
};

export default Form;
