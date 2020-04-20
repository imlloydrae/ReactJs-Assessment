import React, { Component } from 'react';
import { Col, Divider, Row, message } from 'antd';
import { connect } from 'react-redux';
import SignUpForm from './AuthForm/RegisterForm';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: '',
            email: '',
            password: '',
            dateCreated: ''
        }
    }

    createName = (e) => {
        console.log(e.target.value, 'name')
        this.setState({
            name: e.target.value
        });
    }

    createJob = (e) => {
        console.log(e.target.value, 'job')
        this.setState({
            job: e.target.value
        });
    }

    createEmail = (e) => {
        console.log(e.target.value, 'email')
        this.setState({
            email: e.target.value
        });
    }

    createPassword = (e) => {
        console.log(e.target.value, 'password')
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <Row type="flex" justify="center" align="middle" gutter={16} className="row">
                <Col className="title-login" span={14}>
                    <Divider orientation="left">
                        <h1 className="dj-divider">DJ BOOTH</h1>
                    </Divider>
                    <Row type="flex" justify="left" gutter={16} className="row">
                        <Col className="left-content">
                            <p>New remix for "Take your side"</p>
                            <p className="event-title">DJ MARCEL C</p>
                            <p>21 NOVEMBER 2020</p>
                            <br/>
                            <button className="trans-btn">GET YOUR TICKETS!</button>
                        </Col>
                    </Row>
                </Col>
                <Col className="login-content" span={7}>
                    <Divider orientation="left"><h2 className="dj-divider">REGISTER</h2></Divider>
                    <SignUpForm name={this.state.name} email={this.state.email} password={this.state.password} job={this.state.job}
                                createName={this.createName} createEmail={this.createEmail} createPassword={this.createPassword} createJob={this.createJob}
                                onRegister={this.props.onRegister}
                                />
                </Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);