'use strict';

import React from 'react';

import '@babel/polyfill';
import Rete from 'rete';


export class Integer extends Rete.Control {
  constructor(emitter, key, node, readonly = false) {
    super(key);
    this.key     = key;
    this.emitter = emitter;

    this.component = ({value, onChange}) => {
      return (
        <input
          type='number'
          value={value}

          onPointerDown={(e) => e.stopPropagation()}
          onChange={     (e) => onChange(+e.target.value)}
        />
      );
    };

    const initial  = node.data[key] || 0;
    node.data[key] = initial;

    this.props = {
      readonly,
      value   : initial,
      onChange: (v) => {
        this.setValue(v);
        this.emitter.trigger('process');
      },
    };
  }
  setValue(val) {
    this.props.value = val;
    this.putData(this.key, val);
    this.update();
  }
}
