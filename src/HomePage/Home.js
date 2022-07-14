import React from 'react';
import { Outlet } from 'react-router-dom';
import { Background } from '../Components/LightBox/BackGround';
import { LightBox } from '../Components/LightBox/LightBox';
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
      <LightBox />
      <Outlet style={style} />
    </>
  );
};
