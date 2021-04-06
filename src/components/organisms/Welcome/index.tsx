import React from 'react';
import Text from '../../atoms/Text';
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <Text type="h1">Welcome</Text>
    </div>
  );
};

export default Welcome;
