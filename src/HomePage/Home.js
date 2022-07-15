import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Background } from '../Components/LightBox/BackGround';
import { LightBox } from '../Components/LightBox/LightBox';
import { Navigation } from '../Navigation/Navigation';
import {
  CartContextProvider,
  useCartContexProvider,
} from '../Components/GeneralContext/GeneralContext';

export const Home = (props) => {
  const { bigScreen } = useCartContexProvider();
  // const [showBigScreen, setShowBigScreen] = useState(bigScreen);

  const style = {
    width: '1200px',
    display: 'flex',
    flexFlow: 'column',
  };

  return (
    <>
      {bigScreen && <LightBox />}
      <Navigation />
      <Outlet style={style} />
    </>
  );
};
