import React, { useState, useRef, useEffect } from 'react';
import { CustomNavLink } from '../Components/NavigationLinks/CustomNavLink';
import style from './Utility.module.css';
export const UtilityLinks = (props) => {
  const [linksHover, setLinksHover] = useState(false);
  const [hoveringOver, setHoveringOver] = useState('');
  const collections = useRef(null);
  const women = useRef(null);
  const men = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const refs = [collections, women, men, about, contact];
  const paragrafs = ['collections', 'women', 'men', 'about', 'contact'];

  useEffect(() => {
    for (const item of refs) {
      if (linksHover && item.current.id === hoveringOver) {
        item.current.className = `${style.utility_item} ${style.utility_hover}`;
      } else {
        item.current.className = `${style.utility_item}`;
      }
    }
    return () => {};
  }, [linksHover]);

  const handleMouse = (event) => {
    setLinksHover(true);
    setHoveringOver(event.target.dataset.hover);
    event.target.className = `${style.utility_item__name} ${style.utility_hover__name}`;
  };
  const handleLeave = (event) => {
    const currentHover = document.querySelector(
      `[data-hover = ${hoveringOver}]`
    );
    currentHover.className = `${style.utility_item__name}`;
    setLinksHover(false);
    setHoveringOver('');
  };

  return (
    <ul className={style.utility_container}>
      <li ref={collections} id="collections" className={style.utility_item}>
        <CustomNavLink to="/collections">
          <p
            data-hover="collections"
            className={style.utility_item__name}
            onMouseOver={handleMouse}
            onMouseLeave={handleLeave}
          >
            Collections
          </p>
        </CustomNavLink>
      </li>
      <li ref={men} id="men" className={style.utility_item}>
        <CustomNavLink to="/men">
          <p
            data-hover="men"
            className={style.utility_item__name}
            onMouseOver={handleMouse}
            onMouseLeave={handleLeave}
          >
            Men
          </p>
        </CustomNavLink>
      </li>
      <li ref={women} id="women" className={style.utility_item}>
        <CustomNavLink to="/women">
          <p
            data-hover="women"
            className={style.utility_item__name}
            onMouseOver={handleMouse}
            onMouseLeave={handleLeave}
          >
            Women
          </p>
        </CustomNavLink>
      </li>
      <li ref={about} id="about" className={style.utility_item}>
        <CustomNavLink to="/about">
          <p
            data-hover="about"
            className={style.utility_item__name}
            onMouseOver={handleMouse}
            onMouseLeave={handleLeave}
          >
            About
          </p>
        </CustomNavLink>
      </li>
      <li ref={contact} id="contact" className={style.utility_item}>
        <CustomNavLink to="/contact">
          <p
            data-hover="contact"
            className={style.utility_item__name}
            onMouseOver={handleMouse}
            onMouseLeave={handleLeave}
          >
            Contact
          </p>
        </CustomNavLink>
      </li>
    </ul>
  );
};
