import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Wrapper from './Wrapper';
import Label from './Label';

function UserHeader(props) {
  return (
    <Wrapper>
      <Label>User List</Label>
      <Button onClick={props.onClick}>Create User</Button>
    </Wrapper>
  );
}

UserHeader.propTypes = {
	onClick: PropTypes.func
};

export default UserHeader;
