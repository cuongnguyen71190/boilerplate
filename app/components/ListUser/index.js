import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Th from './Th';
import Td from './Td';
import Button from 'components/Button';

function ListUser(props) {
  return (
    <Wrapper>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Action</Th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.length == 0
          ?
          (<tr>
            <Td colSpan="4">Have no item</Td>
          </tr>)
          :
          props.users.map(user => {
            return (<tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Td>
            </tr>)
          })
      }
      </tbody>
    </Wrapper>
  );
}

ListUser.propTypes = {
	users: PropTypes.array
};

export default ListUser;
