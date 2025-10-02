import React, { Component, type ReactNode } from "react";

type ErrorBoundaryProps = {
  fallBackUI?: ReactNode;
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};
const initialState: ErrorBoundaryState = { hasError: false };

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: any) {
    console.log("error boundary", error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("error boundary error", error);
    console.log("error boundary errorInfo", errorInfo);
  }

  render(): React.ReactNode {
    const { fallBackUI, children } = this.props;
    if (this.state.hasError) {
      return fallBackUI;
    }

    return children;
  }
}

export default ErrorBoundary;
