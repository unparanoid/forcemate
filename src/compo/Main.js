'use strict';

import React from 'react';

import '@babel/polyfill';
import Rete                  from 'rete';
import ReteAreaPlugin        from 'rete-area-plugin';
import ReteConnectionPlugin  from 'rete-connection-plugin';
import ReteReactRenderPlugin from 'rete-react-render-plugin';

import styles from './Main.scss';



var numSocket = new Rete.Socket("Number value");
class NumComponent extends Rete.Component {
  constructor() {
    super("Number");
  }

  builder(node) {
    node.addInput(new Rete.Input('key', 'Number', numSocket));
    node.addOutput(new Rete.Output('key', 'Number', numSocket));
  }

  worker(node, inputs, outputs) {
  }
}

function Editor() {
  const [container, setContainer] = React.useState(null);
  const editorRef = React.useRef();

  React.useEffect(async () => {
    if (container) {
      const background = document.createElement('div');

      const editor = new Rete.NodeEditor("forcemate@0.0.1", container);
      editor.use(ReteAreaPlugin, {background});
      editor.use(ReteConnectionPlugin);
      editor.use(ReteReactRenderPlugin);
      editor.view.resize();

      const numcompo = new NumComponent;
      editor.register(numcompo);

      editor.addNode(await numcompo.createNode({ num: 2 }));
      editor.addNode(await numcompo.createNode({ num: 3 }));

      editorRef.current = editor;
    }
  }, [container]);

  React.useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className={styles.Editor}
      ref={(ref) => ref && setContainer(ref)}
    />
  );
}

export default function Main() {
  return (
    <div className={styles.Main}>
      <Editor/>
    </div>
  );
}
