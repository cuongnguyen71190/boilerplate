import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Input from './Input';

function Form(props) {
  return (
  	<Wrapper onSubmit={props.handleSubmit}>
  		<div>
	      <label>Name</label>
	      <Input
	        type="text"
	        placeholder="Enter Name"
	        name="name"
	        onChange={props.handleChange}
	      />
	    </div>
	    <br />
	    <div>
	      <label>Email</label>
	      <Input
	        type="email"
	        placeholder="Enter Email"
	        name="email"
	        onChange={props.handleChange}
	      />
	    </div>
	    <br />
	    <div>
	      <Input type="submit" value="Create User" />
	    </div>
  	</Wrapper>
  	);
}

Form.propTypes = {
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func
};

export default Form;
