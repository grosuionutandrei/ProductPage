import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const Home = (props) => {
  const style = {
    width: '1200px',
    display: 'flex',
    flexFlow: 'column',
  };
  return (
    <>
      <Navigation />
      <Outlet style={style} />
    </>
  );
};
