import React, { Fragment } from 'react';

const FooterComponent = () => {
  const year = new Date().getFullYear();
  return <Fragment>Vu Long Quyen ©{year} Created by S&T</Fragment>;
};
export default FooterComponent;
