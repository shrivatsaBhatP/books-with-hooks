import React from 'react';
import Text from '../../atoms/Text';
import Navigation from '../Navigation';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Text type="p" theme="unset" color={'white'}>
        Books with Hooks
      </Text>
      <Navigation />
    </header>
  );
};

export default Header;
