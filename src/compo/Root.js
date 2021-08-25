'use strict';

import React from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Main   from './Main.js';

import styles from './Root.scss';


export default class Root extends React.Component {
  render() {
    return (
      <div className={styles.Root}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
