/* @flow */
import * as React from 'react';

import MyClassyWidget from "./MyClassyWidget";

class App extends React.Component<{}> {
  render() {
    return <MyClassyWidget name={123} type="good" />;
  }
}

export default App;
