import React from 'react';
import { NavLink } from 'react-router-dom';
export const CustomNavLink = (props) => {
  const style = { textDecoration: 'none' };
  return (
    <NavLink to={props.to} style={style}>
      {props.children}
    </NavLink>
  );
};
