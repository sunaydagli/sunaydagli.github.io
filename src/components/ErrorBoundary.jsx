import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '2rem',
            background: '#000000',
            color: '#ffffff',
            fontFamily: 'Rasa, Georgia, serif',
            fontWeight: 300,
          }}
        >
          <h1 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: '1.45rem', marginBottom: '0.75rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#D9E3DA', marginBottom: '1rem', fontSize: '1.125rem' }}>
            The app hit a JavaScript error. Check the browser console for details.
          </p>
          <pre
            style={{
              padding: '1rem',
              borderRadius: '8px',
              background: 'rgba(217, 227, 218, 0.08)',
              overflow: 'auto',
              fontSize: '0.9rem',
              color: '#fca5a5',
            }}
          >
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
