import React, { Component } from 'react';
import Joi from 'joi';
import Input from './common/Input';

// Preventing the default behaviour - form submission

// Ref - To use DOM elements (instead using document objects)
// usernameRef = React.createRef();
/* 
  <input
  ref={this.usernameRef}
  id='username'
  type='email'
  className='form-control'
  />; 
*/
// console.log(this.usernameRef.current.value);

// Controlled Elements - Value(data) of element should be controlled by Component
//                      and Raise the events for interactions
// Handling Multiple Elements - Using name attribute
// Common Error - Changing uncontrolled component to controlled component.

// Extracting Reusable Input

// Validating Form
// Validating Field

// rest operator usage (...rest)

export class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  usernameRef = React.createRef();

  accountSchema = Joi.object({
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  });

  componentDidMount = () => {
    this.usernameRef.current.focus();
  };

  validateLoginForm = () => {
    const errors = {};
    const options = {
      abortEarly: false,
    };
    const { error } = this.accountSchema.validate(this.state.account, options);

    error &&
      error.details.forEach((err) => {
        errors[err.path[0]] = err.message;
      });

    // const { account } = this.state;
    // if (account.username.trim() === '')
    //   errors.username = 'Username is required';
    // if (account.password.trim() === '')
    //   errors.password = 'Password is required';

    return Object.keys(errors).length ? errors : null;
  };

  validateFormElement = ({ name, value }) => {
    // if (name === 'username') {
    //   if (value.trim() === '') return 'Username is required';
    //   // other validations
    // }
    // if (name === 'password') {
    //   if (value.trim() === '') return 'Password is required';
    //   // other validations
    // }

    const obj = { [name]: value };
    const schema = Joi.object({
      [name]: Joi.string().required().label(name),
      //   [name]: this.accountSchema[name],
    });
    const { error } = schema.validate(obj);
    return error && error.details[0].message;
  };

  handleformSubmit = (event) => {
    event.preventDefault();

    //validation
    const errors = this.validateLoginForm();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Submit form
    console.log('Form is Submitted');
  };

  handleformElementChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateFormElement(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className='container'>
        <h1 className='mt-5 mb-5'>Login Form</h1>
        <form onSubmit={this.handleformSubmit}>
          <Input
            inputName='username'
            labelName='Username'
            inputType='text'
            inputRef={this.usernameRef}
            value={account.username}
            onChange={this.handleformElementChange}
            error={errors.username}
          />
          <Input
            inputName='password'
            labelName='Password'
            inputType='text'
            value={account.password}
            onChange={this.handleformElementChange}
            error={errors.password}
          />
          <button
            disabled={this.validateLoginForm()}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
