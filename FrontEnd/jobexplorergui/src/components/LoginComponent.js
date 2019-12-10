import React, { Component } from 'react'
import { Form, Icon, Input, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import "../styles/Login.css";

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.doLogin(values.username, values.password);
            }
        });
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="row justify-content-center">
                {errorMessage}
                {
                    this.props.loading ?

                        <Spin indicator={antIcon} />

                        :

                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input className="login-input"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input className="login-input"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </FormItem>

                            <FormItem>
                                <Button type="btn btn-success job-button" htmlType="submit" style={{ marginRight: '10px' }}>
                                    Login
                                </Button>

                                <NavLink to='/register'>
                                    <Button type="btn btn-success job-button" style={{ marginRight: '10px' }}>
                                        SignUp
                                    </Button>
                                </NavLink>
                            </FormItem>
                        </Form>
                }
            </div>
        );
    }
}

const LoginComponent = Form.create({ name: 'normal_login' })(LoginForm);
export default LoginComponent