import React from 'react';
import style from './Logo.module.css';

export const Logo = (props) => {
  return <img src={props.src} alt={props.alt} className={style.logo} />;
};
