'use strict';

import '@babel/polyfill';
import Rete                  from 'rete';
import ReteAreaPlugin        from 'rete-area-plugin';
import ReteConnectionPlugin  from 'rete-connection-plugin';
import ReteReactRenderPlugin from 'rete-react-render-plugin';

import * as EditorCompo from './EditorCompo.js';


export default class Editor {
  constructor() {
    this.sock = {
      File   : new Rete.Socket('File'),
      Integer: new Rete.Socket('Integer'),
      Scalar : new Rete.Socket('Scalar'),
    };

    this.compo = {
      ImmFile      : new EditorCompo.Imm(this.sock.File),
      ImmInteger   : new EditorCompo.Imm(this.sock.Integer),
      ImmScalar    : new EditorCompo.Imm(this.sock.Scalar),
      InputFile    : new EditorCompo.Input(this.sock.File),
      InputInteger : new EditorCompo.Input(this.sock.Integer),
      InputScalar  : new EditorCompo.Input(this.sock.Scalar),
      OutputFile   : new EditorCompo.Output(this.sock.File),
      OutputInteger: new EditorCompo.Output(this.sock.Integer),
      OutputScalar : new EditorCompo.Output(this.sock.Scalar),
    };

    this.editor = null;
  }

  async SetupRete(container) {
    if (!container || this.editor) return;

    const background = document.createElement('div');
    const editor     = new Rete.NodeEditor('forcemate@0.0.1', container);

    editor.use(ReteAreaPlugin, {background});
    editor.use(ReteConnectionPlugin);
    editor.use(ReteReactRenderPlugin);
    editor.view.resize();

    for (let name in this.compo) {
      editor.register(this.compo[name]);
    }

    /* TEST */
    editor.addNode(await this.compo.ImmScalar.createNode({ value: 2 }));
    editor.addNode(await this.compo.OutputScalar.createNode({}));

    this.editor = editor;
  }
  TeardownRete() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }
}
