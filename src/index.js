'use strict';

import 'destyle.css';

import './global.css';

import React    from 'react';
import ReactDOM from 'react-dom';

import Root from './compo/Root.js';


window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.body);
});
