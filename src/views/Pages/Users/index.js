import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, selectPost } from '../../../containers/actions';

function FriendList(props) {
  if (!props.friends) {
    return (<div>Does not have a friend...</div>);
  }
  return (
    <Card>
      <CardHeader>
        <i className="fa fa-align-justify"></i> Fiends
      </CardHeader>
      <CardBody>
        <Table responsive hover>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">first name</th>
              <th scope="col">last name</th>
              <th scope="col">age</th>
              <th scope="col">image</th>
            </tr>
          </thead>
          <tbody>
            {props.friends.map((friend, index) =>
              <tr key={friend.id.toString()}>
                <th scope="row">{friend.id}</th>
                <td>{friend.first}</td>
                <td>{friend.last}</td>
                <td>{friend.age}</td>
                <td><img src={friend.thumbnail} alt="profile" width="40px;"/></td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

function UserDetail(props) {
  if (!props.user) {
    return (<div>Select a user...</div>);
  }
  return (
    <div>
      <img src={props.user.thumbnail} alt="Math Problems"></img>
      <h2>{props.user.first} {props.user.last}</h2>
      <h3>Age: {props.user.age}</h3>
      <h3>Description: {props.user.description}</h3>
      <FriendList friends={props.user.friends}/>
    </div>
  );
}

class Users extends Component {
  render() {

    const userList = this.props.users;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">first name</th>
                      <th scope="col">last name</th>
                      <th scope="col">age</th>
                      <th scope="col">image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <tr key={user.id.toString()} onClick={() => this.props.selectUser(user)}>
                        <th scope="row">{user.id}</th>
                        <td>{user.first}</td>
                        <td>{user.last}</td>
                        <td>{user.age}</td>
                        <td><img src={user.thumbnail} alt="profile" width="40px;"/></td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> User Detail <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <UserDetail user={this.props.user}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        user: state.userSelected
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser, selectPost: selectPost}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Users);
