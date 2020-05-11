import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export const ErrorInfo = () => (
  <Alert variant="danger">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, we have some prolems to show you relevant information.
      We are sorry, and hope you will be back a little bit later!
    </p>
    <hr />
    <p className="mb-0">
      “For every minute you are angry you lose sixty seconds of happiness.”
      ― Ralph Waldo Emerson
    </p>
  </Alert>
);
ErrorInfo.propTypes = {};
