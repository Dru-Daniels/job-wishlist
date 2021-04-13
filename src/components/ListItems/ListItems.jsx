import React from "react";

import JobItem from '../JobItem/JobItem'

import './ListItems.scss'

class ListItems extends React.Component {
  render() {
    const { items, onDelete } = this.props;
    const listItems = items.map((item, index) => {
      return (
        <JobItem
          key={item.key}
          item={item}
          handleDelete={() => { onDelete(index) }}
        />
      )
    })

    return (
      <div className='list-items'>
        {listItems}
      </div>
    )
  }
}

export default ListItems