import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (errorInfo) {
      return (
        <div>
          <h3>Ooops! Something went wrong.</h3>

          <details open style={{ whiteSpace: "pre-wrap" }}>
            {error && <p>The error: {error.toString()}</p>}
            <p>Where it occured: {errorInfo.componentStack}</p>
          </details>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
