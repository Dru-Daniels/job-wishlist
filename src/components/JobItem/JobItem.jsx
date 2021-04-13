import React from "react";

import TimeAgo from 'react-timeago'
import Popup from 'reactjs-popup';

import './JobItem.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class JobItem extends React.Component {
  myRef = React.createRef();
  colorArray = [
    '#8fb1df',
    '#fd6e7b',
    '#48bf71',
    '#6680b1'
  ];

  color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];

  onRemove = () => {
    this.myRef.current.id = "active";
    setTimeout(() => {
      this.props.handleDelete()
    }, 200)
  }

  render() {
    const { item } = this.props

    let logoUrl = `https://logo.uplead.com/${item.company
      .replace(/ /g, "")
      .toLowerCase()}.com`
    return (
      <div
        className="list"
        key='item.key'
        ref={this.myRef}
        style={{ backgroundColor: this.color }}
      >
        <div className='list-content'>
          <div className='list-content-left'>
            <div className="img-wrapper">
              <img
                src={logoUrl}
                alt={`${item.company} logo`}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://image.freepik.com/free-vector/arrow-star-logo-template_1222-835.jpg"; e.target.alt = "dream job logo" }}
              />
            </div>
            <div className='list-text'>
              <p id='list-company'>{item.company}</p>
              <p>{item.job}</p>
            </div>
          </div>
          <Popup
            trigger={<FontAwesomeIcon
              icon={faTrash}
              className='trash-icon'
              position="top center"
            />}
          >
            {close => (
              <div className='job-form-container pop-confirm' >
                <h4>Delete Job?</h4>
                <p>Are you sure you want to delete this job?</p>
                <button
                  className="popconfirm-button"
                  onClick={this.onRemove}
                >Delete</button>
                <button
                  className="popconfirm-button popconfirm-button-accent"
                  onClick={close}>Cancel</button>
              </div>
            )}
          </Popup>
        </div>
        <p className='list-time'>added{' '}
          <TimeAgo date={item.key} /> ...
      </p>
      </div >
    )
  }
}

export default JobItem