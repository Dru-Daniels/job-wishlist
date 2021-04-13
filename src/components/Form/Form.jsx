import React from 'react'

import './Form.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faSearch } from '@fortawesome/free-solid-svg-icons'

class Form extends React.Component {
  inputValue = {
    company: '',
    job: '',
    logo: '',
    key: ''
  }

  state = this.inputValue

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state.inputValue,
      [name]: value,
      key: Date.now()
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.setState(this.inputValue)
  }

  render() {
    const { company, job } = this.state
    return (
      <form id='job-form' onSubmit={this.handleOnSubmit}>
        <div className='job-form-input-container'>
          <input
            name='company'
            id='company'
            type='text'
            placeholder="Company Name"
            value={company}
            onChange={this.handleChange}
            required
          />
          <FontAwesomeIcon icon={faSearch} className='icon' />
        </div>
        <div className='job-form-input-container'>
          <input
            name='job'
            id='job'
            type='text'
            placeholder="Job Title"
            value={job}
            onChange={this.handleChange}
            required
          />
          <FontAwesomeIcon icon={faBriefcase} className='icon' />
        </div>
        <button type='submit'>Continue</button>
      </form>
    )
  }
}

export default Form;