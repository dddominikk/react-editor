import React, { Component } from 'react';
import './footer.css';

const footerContents = () => {
  
  const 
        start = 2021,
        end = new Date(Date.now()).getFullYear(),
        cRange = (!end-start) ? `${end}` : `${start}-${end}`, // leveraging falsiness
        result = `${cRange}©️Attention Spa, vl. Dominik Bošnjak`;
  
  return result;
};


const Footer = () => {

    return (
      <footer>
      <p>{footerContents()}</p>
      </footer>
    );

};
 
export default Footer;
