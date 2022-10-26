import React, { Component } from 'react';

import StudentForm from "../StudentForm";

class ComponentDidCatch extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="content-wrapper">
          <h1>Oh no! Something went wrong.</h1>
        </div>
      )
    } else {
      return (
        <div className="content-wrapper">
          <div className="content-header">
            <h1 className="content-header__title">
              Component Did Catch
            </h1>
          </div>
          <StudentForm />
        </div>
      );
    }
  }
}

export default ComponentDidCatch;
