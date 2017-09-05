import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {

  handleFormValues = values => {
    console.log('form sign in values : ', values);
  };

  renderInput({ label, ...field }) {
    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="text" className="form-control" />
      </fieldset>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormValues)}>
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="password" component={this.renderInput} label="Password" />
        <button className="btn btn-primary" action="submit">
          Sign in
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: 'signin' })(Signin);