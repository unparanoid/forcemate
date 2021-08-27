'use strict';

import '@babel/polyfill';
import Rete                  from 'rete';
import ReteAreaPlugin        from 'rete-area-plugin';
import ReteConnectionPlugin  from 'rete-connection-plugin';
import ReteReactRenderPlugin from 'rete-react-render-plugin';

import * as EditorCompo  from './EditorCompo.js';
import * as EditorSocket from './EditorSocket.js';


export default class Editor {
  constructor() {
    this.sock  = {};
    this.compo = {};
    this.rete  = null;
  }

  async SetupRete(container) {
    if (!container || this.rete) return;

    const background = document.createElement('div');
    const editor     = new Rete.NodeEditor('forcemate@0.0.1', container);

    this.rete = editor;
    this.sock = {
      Integer: new EditorSocket.Integer(this),
    };
    this.compo = {
      ImmInteger  : new EditorCompo.Imm  (this.sock.Integer),
      InputInteger: new EditorCompo.Input(this.sock.Integer),
    };

    editor.use(ReteAreaPlugin, {background});
    editor.use(ReteConnectionPlugin);
    editor.use(ReteReactRenderPlugin);
    editor.view.resize();

    for (let name in this.compo) {
      editor.register(this.compo[name]);
    }

    /* TEST */
    editor.addNode(await this.compo.ImmInteger.createNode({ value: 2 }));
    editor.addNode(await this.compo.InputInteger.createNode({}));
  }
  TeardownRete() {
    if (this.rete) {
      this.rete.destroy();
      this.rete = null;
    }
  }
}
