'use strict';

import '@babel/polyfill';
import Rete from 'rete';

import * as EditorControl from './EditorControl.js';


export class Integer extends Rete.Socket {
  constructor(editor) {
    super('Integer');
    this.editor = editor;
  }

  AddOutput(node, key, displayName) {
    displayName = displayName || key;

    const editor = this.editor.rete;

    const output  = new Rete.Output(key, displayName, this);
    const control = new EditorControl.Integer(editor, key, node);

    node.addOutput(output);
    node.addControl(control);
  }
}
