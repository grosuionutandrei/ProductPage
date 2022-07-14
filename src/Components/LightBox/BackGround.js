import React from 'react';
import style from './LightBox.module.css';

export const Background = (props) => {
  return <div className={style.background_component}>{props.children}</div>;
};
