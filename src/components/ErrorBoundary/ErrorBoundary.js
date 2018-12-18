import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    if (this.state.hasError) {
      return <h5>Something went wrong</h5>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;