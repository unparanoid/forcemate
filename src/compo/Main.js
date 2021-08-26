'use strict';

import React from 'react';

import styles from './Main.scss';


export default function Main(props) {
  const [container, setContainer] = React.useState(null);

  React.useEffect(() => {
    props.editor.SetupRete(container);
  }, [container]);

  React.useEffect(() => {
    return () => {
      props.editor.TeardownRete();
    };
  }, []);

  return (
    <div className={styles.Main}>
      <div ref={(ref) => ref && setContainer(ref)} />
    </div>
  );
}
