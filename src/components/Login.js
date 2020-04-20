import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Col, Divider, Row, message } from 'antd';
import NormalLoginForm from './AuthForm/LoginForm';
import { login } from '../apis/sessions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    updateEmail = (e) => {
        console.log(e.target.value, 'email');
        this.setState({
            email: e.target.value
        });
    }

    updatePassword = (e) => {
        console.log(e.target.value, 'password');
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <Row type="flex" justify="center" align="middle" gutter={16} className="row">
                { this.props.error ? message.error('There was an error loggin in \n' + this.props.error): null }
                <Col className="title-login" span={17}>
                    <Divider orientation="left">
                        <h1 className="dj-divider">DJ BOOTH</h1>
                    </Divider>
                    <Row type="flex" justify="left" gutter={16} className="row">
                        <Col className="left-content">
                            <p>MAIN PARTY OF THIS AUTUMN</p>
                            <p className="event-title">LIGHT YOUR NIGHT</p>
                            <p>21 NOVEMBER 2020</p>
                            <br/>
                            <button className="trans-btn">GET YOUR TICKETS!</button>
                        </Col>
                    </Row>
                </Col>
                <Col className="login-content" span={6}>
                    <Divider orientation="left"><h2 className="dj-divider">LOGIN</h2></Divider>
                    <NormalLoginForm email={this.state.email} password={this.state.password}
                                    updateEmail={this.updateEmail} updatePassword={this.updatePassword}
                                    onLogin={this.props.onLogin}
                                    />
                </Col>
            </Row>
        );
    }
}

const  mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        session: state.session,
        error: state.error,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userData, cb) => { dispatch(login(userData, cb)); },
    }
}

export default connect(mapStateToProps,  mapDispatchToProps)(Login);