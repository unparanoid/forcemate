'use strict';

import React from 'react';

import '@babel/polyfill';
import Rete from 'rete';


export class Integer extends Rete.Control {
  constructor(emitter, key, node, readonly = false) {
    super(key);

    this.component = () => {
      return (
        <input
          type='number'
        />
      );
    };
  }

  setValue(val) {
  }
}
