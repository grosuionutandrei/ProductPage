import React from 'react';

export const Logo = (props) => {
  const style = {
    width: '100px',
    height: '34px',
  };
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      style={style}
    />
  );
};
