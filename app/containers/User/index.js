import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import UserHeader from 'components/UserHeader';
import ListUser from 'components/ListUser';
import Form from 'components/Form';
import saga from './saga';
import reducer from './reducer';
import makeSelectUser from './selectors';

const Div = styled.div`
  border: 1px solid #ddd;
  padding: 40px;
  margin-bottom: 40px;
  position: relative;
`;

export class User extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      users: [],
      name: '',
      email: '',
      createFlag: false,
    };
  }

  handleOnClick = () => {
    this.setState({ createFlag: !this.state.createFlag });
  };

  handleChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let id = this.state.users.length + 1;
    const user = { id: id, name: this.state.name, email: this.state.email };
    let users = [...this.state.users, user];
    this.setState({
      users: users,
      createFlag: false,
      name: '',
      email: ''
    });
  }

  render() {
    console.log(this.props.user);
    return (
      <Div>
        <UserHeader onClick={this.props.headerClick} />

        <ListUser users={this.state.users} />

        {this.state.createFlag && (
          <Form
            handleSubmit={this.handleSubmit.bind(this)}
            handleChange={this.handleChange}
          />
        )}
      </Div>
    );
  }
}

User.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    headerClick: () => dispatch({type: "CREATE_USER", value: 1})
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(User);
