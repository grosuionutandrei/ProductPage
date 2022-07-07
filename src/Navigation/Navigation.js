import React, { useState } from 'react';
import { UtilityLinks } from './UtilityLinks';
import { Logo } from '../Components/Logo';
import logo from '../files/images/logo.svg';
import { ShoppingCartNavigation } from '../Features/ShopingCart';
import logoCart from '../files/images/icon-cart.svg';
import user from '../files/images/image-avatar.png';
import styles from './Navigation.module.css';
import { CustomNavLink } from '../Components/NavigationLinks/CustomNavLink';
export const Navigation = (props) => {
  return (
    <header className={styles.product_navigation__main_container}>
      <div className={styles.product_navigation}>
        <CustomNavLink to="/home">
          <Logo src={logo} alt={'sneackers logo'} />
        </CustomNavLink>
        <nav>
          <UtilityLinks />
        </nav>
      </div>
      <ShoppingCartNavigation
        src1={logoCart}
        alt1={'logo shopping cart'}
        src2={user}
        alt={'user picture'}
      />
    </header>
  );
};
