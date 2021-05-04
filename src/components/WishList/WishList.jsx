import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";

import Form from "../Form/Form";
import ListItems from "../ListItems/ListItems";

import "./WishList.scss";

class WishList extends React.Component {
  state = {
    items: []
  };

  handleSubmit = (newVal) => {
    this.setState({ items: [...this.state.items, newVal] });
  };

  componentDidUpdate() {
    localStorage.setItem("dataStore", JSON.stringify(this.state.items));
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem("dataStore"));
    if (dataStore !== null) {
      this.setState({ items: dataStore });
    }
  }

  handleRemove = (index) => {
    const { items } = this.state;
    this.setState({
      items: items.filter((item, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="job-list-container">
        <div className="wishlist-container">
          <h2>
            <FontAwesomeIcon icon={faMagic} className="faMagic" /> WISHLIST
          </h2>
          <p>
            {items.length} {items.length === 1 ? "JOB" : "JOBS"}
          </p>
          <Popup trigger={<button className="add-btn">+</button>}>
            {(close) => (
              <div className="job-form-container">
                <h1 className="job-form-title">Add a job</h1>
                <Form onSubmit={this.handleSubmit} close={close} />
              </div>
            )}
          </Popup>
          {items.length === 0 ? (
            <h4>No Dream Jobs Yet!</h4>
          ) : (
            <ListItems items={items} onDelete={this.handleRemove} />
          )}
        </div>
        <a className="uplead-link" href="https://uplead.com">
          Logos provided by Uplead
        </a>
      </div>
    );
  }
}

export default WishList;
