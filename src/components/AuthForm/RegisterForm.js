import React, { Component } from 'react';
import { Button, Icon, Input, Form } from 'antd';
import { connect } from 'react-redux';
const FormItem = Form.Item;

class RegisterForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onRegister(this.props, () => { window.location('/')});
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
                <FormItem>
                    { getFieldDecorator('Name', {
                        rules: [{required: true, message: 'Please input your name.'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Name" onChange={(e) => {this.props.createName(e)}}
                        />
                    )}
                </FormItem>
                <FormItem>
                    { getFieldDecorator('Job', {
                        rules: [{required: true, message: 'Please input your job.'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Job" onChange={(e) => {this.props.createJob(e)}}
                        />
                    )}
                </FormItem>
                <FormItem>
                    { getFieldDecorator('Email', {
                        rules: [{required: true, message: 'Please input your email.'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Email" onChange={(e) => {this.props.createEmail(e)}}
                        />
                    )}
                </FormItem>
                <FormItem>
                    { getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your password.'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                            placeholder="Password" onChange={(e) => {this.props.createPassword(e)}}
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const SignUpForm = Form.create()(RegisterForm);

const select = state => ({
    session: state.session
});

export default connect(select)(SignUpForm);