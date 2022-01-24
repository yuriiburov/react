import React from 'react';

class UserForm extends React.Component {
  setRef = (node) => {
    this.formRef = node;
  };

  render() {
    return (
      <form
        className="login-form"
        ref={this.setRef}
        onSubmit={(e) => {
          const formData = [...new FormData(this.formRef)].reduce(
            (acc, [name, value]) => ({ ...acc, [name]: value }),
            {}
          );
          this.props.onSubmit(formData);
          e.preventDefault();
        }}
      >
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" id="name" name="name" type="text" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            id="student"
            name="student"
            type="checkbox"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select className="form-input" name="occupation">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea className="form-input" name="about" />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
