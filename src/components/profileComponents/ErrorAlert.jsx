import Alert from 'react-bootstrap/Alert';

function ErrorAlert({ error }) {
  let errorMessage = 'An unexpected error occurred';

  // Check if error is an object and extract the message
  if (error && typeof error === 'object') {
    errorMessage = error.message || 'An unexpected error occurred';
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  // Customize messages based on different types of errors
  const getErrorMessage = () => {
    switch (errorMessage) {
      case 'Network Error':
        return 'It looks like there was a problem with your network connection.';
      case '404':
        return 'The requested resource could not be found.';
      case '500':
        return 'There was an internal server error.';
      default:
        return 'An unexpected error occurred. Please try again later.';
    }
  };

  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>Oh snap! {getErrorMessage()}</Alert.Heading>
      <p>
        Please try again or contact support if the issue persists.
      </p>
    </Alert>
  );
}

export default ErrorAlert;
