import React, { Component } from 'react';
import { Form, Input, Icon, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.doRegister(
                    values.userName,
                    values.email,
                    values.password,
                    values.confirm
                );
                this.props.history.push('/login');
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }


    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                        <Spin indicator={antIcon} />

                        :

                        <Form onSubmit={this.handleSubmit}>

                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true, message: 'Please input your E-mail!',
                                    }],
                                })(
                                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: 'Please confirm your password!',
                                    }, {
                                        validator: this.compareToFirstPassword,
                                    }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
                                )}
                            </FormItem>

                            <FormItem>
                                <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                                    Signup
                                </Button>
                                Or
                                <NavLink
                                    style={{ marginRight: '10px' }}
                                    to='/login/'> login
                                </NavLink>
                            </FormItem>
                        </Form>
                }
            </div>
        );
    }
}

const RegisterComponent = Form.create()(RegistrationForm);

export default RegisterComponent
