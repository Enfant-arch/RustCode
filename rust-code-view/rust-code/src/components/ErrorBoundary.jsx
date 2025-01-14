// src/components/ErrorBoundary.jsx
import  { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      console.log(this.state);
      return <h1>Что-то пошло не так!</h1>;
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export { ErrorBoundary };
