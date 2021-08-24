'use strict';

import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import styles from './Root.scss';


export default class Root extends React.Component {
  render() {
    return (
      <div className={styles.Root}>
        <Header/>
        <div className={styles.Temp}></div>
        <Footer/>
      </div>
    );
  }
}
