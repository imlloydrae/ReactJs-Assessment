import React, { Component } from 'react';
import { Button, Card, Col, Divider, Row, message } from 'antd';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.session, 'props.session')
        console.log(this.props.contacts, 'props contacts')
        return (
         <div className="site-card-wrapper">
            <Row type="flex" justify="center" align="middle" gutter={16} className="row">
                <Divider orientation="left">
                    <h1 className="dj-divider">FEEL THE RHYTHM OF THE ENDLESS NIGHT</h1>
                </Divider>
              <Col span={8}>
                <Card style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=purple-fireworks-effect-1190298.jpg&fm=jpg"
                    />
                    } bordered={false} >
                  <p className="card-title">NON STOP PARTY</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur cing
                    elit. Suspe ndisse suscipit sagittis leo sit met
                    dimentum estibulum issim posuere cubilia</p>
                <button className="trans-btn-card">CHECK THE PARTY LIST!</button>
                </Card>
              </Col>
              <Col span={8}>
              <Card style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?cs=srgb&dl=woman-standing-near-group-of-people-1449791.jpg&fm=jpg"
                    />
                    } bordered={false} >
                  <p className="card-title">SPECIAL PROGRAMS</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur cing
                    elit. Suspe ndisse suscipit sagittis leo sit met
                    dimentum estibulum issim posuere cubilia</p>
                  <button className="trans-btn-card">BOOK YOUR SCHEDULE</button>
                </Card>
              </Col>
              <Col span={8}>
              <Card style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://images.pexels.com/photos/1449795/pexels-photo-1449795.jpeg?cs=srgb&dl=group-of-people-partying-1449795.jpg&fm=jpg"
                    />
                    } bordered={false} >
                  <p className="card-title">TOP DJ LIST</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur cing
                    elit. Suspe ndisse suscipit sagittis leo sit met
                    dimentum estibulum issim posuere cubilia</p>
                  <button className="trans-btn-card">CHECK OUT THE LIST!</button>
                </Card>
              </Col>
            </Row>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        route: state.session
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapDispatchToProps, mapStateToProps)(Dashboard);