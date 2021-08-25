'use strict';

import 'destyle.css';

import './global.css';

import React    from 'react';
import ReactDOM from 'react-dom';

import Root from './compo/Root.js';


window.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  ReactDOM.render(<Root/>, root);
  document.body.appendChild(root);
});
