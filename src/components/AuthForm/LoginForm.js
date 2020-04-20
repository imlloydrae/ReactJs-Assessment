import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { login } from '../../actions/sessions';

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = (e) => {
        console.log('dfsfsnfsndfjsnfjs', e)
        e.preventDefault();
        this.props.onLogin(this.props, ()=>{window.location('/dash')});
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
                <FormItem>
                    { getFieldDecorator('userEmail', {
                        rules: [{required: true, message: 'Please input your email.'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Email" onChange={(e) => {this.props.updateEmail(e)}}
                        />
                    )}
                </FormItem>
                <FormItem>
                    { getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your password.'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                            placeholder="Password" onChange={(e) => {this.props.updatePassword(e)}}
                        />
                    )}
                </FormItem>
                <FormItem>
                    { getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <br />
                    <Link to="/dash">Forgot password</Link>
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <br/>
                    Or <Link to="/register">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}

const NormalLoginForm = Form.create()(LoginForm);

const select = state => ({
    session: state.session
});

export default connect(select)(NormalLoginForm);