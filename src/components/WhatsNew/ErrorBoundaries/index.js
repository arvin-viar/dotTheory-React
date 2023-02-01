import React from 'react';

import StudentForm from "../StudentForm";
import ErrorBoundary from '../../ErrorBoundary';

const ErrorBoundaries = () => (
  <div className="content-wrapper">
    <div className="content-header">
      <h1 className="content-header__title">
        Error Boundaries
      </h1>
    </div>

    <ErrorBoundary>
      <StudentForm />
    </ErrorBoundary>
  </div>
);

export default ErrorBoundaries;
