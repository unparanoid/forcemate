'use strict';

import 'destyle.css';

import './global.css';

import React    from 'react';
import ReactDOM from 'react-dom';

import Editor from './Editor.js';
import Root   from './compo/Root.js';


window.addEventListener('DOMContentLoaded', () => {
  const editor = new Editor();

  /* create root container */
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  ReactDOM.render(<Root editor={editor}/>, root);
  document.body.appendChild(root);
});
