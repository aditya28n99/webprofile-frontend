import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorAlert({error}) {
  const [show, setShow] = useState(true);

  // If error is an object, extract the message property
  const errorMessage = error && typeof error === 'object' ? error.message : error;

  if (show) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an {errorMessage}!!</Alert.Heading>
        <p>
          Please Try Again!!
        </p>
      </Alert>
    );
  }
  
}

export default ErrorAlert;