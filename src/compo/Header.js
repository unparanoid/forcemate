'use strict';

import React from 'react';

import styles from './Header.scss';


class MenuItem extends React.Component {
  render() {
    return (
      <div className={styles.MenuItem}>
        {this.props.text}
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div className={styles.Menu}>
        <MenuItem text='Item1'/>
        <MenuItem text='Item2'/>
        <MenuItem text='Item3'/>
        <MenuItem text='Item4'/>
        <MenuItem text='Item5'/>
      </div>
    );
  }
}

class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.Toolbar}>
      </div>
    );
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <Menu/>
        <Toolbar/>
      </div>
    );
  }
}
