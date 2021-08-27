'use strict';

import '@babel/polyfill';
import Rete from 'rete';


export class Imm extends Rete.Component {
  constructor(sock) {
    super('Imm '+sock.name);
    this.sock = sock;
  }
  builder(node) {
    this.sock.AddOutput(node, 'value');
  }
  worker(node, inputs, outputs) {
  }
}

export class Input extends Rete.Component {
  constructor(sock) {
    super('Input '+sock.name);
    this.sock = sock;
  }
  builder(node) {
    this.sock.AddOutput(node, 'value');
  }
  worker(node, inputs, outputs) {
  }
}

export class Output extends Rete.Component {
  constructor(sock) {
    super('Output '+sock.name);
    this.sock = sock;
  }
  builder(node) {
    node.addInput(new Rete.Input('value', '', this.sock));
  }
  worker(node, inputs, outputs) {
  }
}

export class Lambda extends Rete.Component {
  constructor() {
    super('Lambda Execution');
    this.sock = sock;
  }
  builder(node) {
  }
  worker(node, inputs, outputs) {
  }
}
