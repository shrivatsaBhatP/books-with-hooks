import React from 'react';
import { HeaderProps } from '../../../common/interface';
import Text from '../../atoms/Text';
import Navigation from '../Navigation';
import classes from './Header.module.css';

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={classes.header}>
      <Text type="p" theme="unset" color={'white'}>
        {props.logo ?? 'Logo'}
      </Text>
      <Navigation />
    </header>
  );
};

export default Header;
