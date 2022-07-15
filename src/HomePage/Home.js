import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LightBox } from '../Components/LightBox/LightBox';
import { Navigation } from '../Navigation/Navigation';
import { useCartContexProvider } from '../Components/GeneralContext/GeneralContext';
import style from './Home.module.css';
export const Home = (props) => {
  const { bigScreen } = useCartContexProvider();
  // const [showBigScreen, setShowBigScreen] = useState(bigScreen);

  // const style = {
  //   width: '1200px',
  //   display: 'flex',
  //   flexFlow: 'column',
  // };

  return (
    <>
      {bigScreen && <LightBox />}
      <Navigation />
      <Outlet className={style.outlet} />
    </>
  );
};
