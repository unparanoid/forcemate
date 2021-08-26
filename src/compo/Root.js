'use strict';

import React from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Main   from './Main.js';

import styles from './Root.scss';


export default function Root(props) {
  return (
    <div className={styles.Root}>
      <Header/>
      <Main editor={props.editor}/>
      <Footer/>
    </div>
  );
}
