/* @flow */
import * as React from 'react';

import MyFunctionalWidget from "./MyFunctionalWidget";

class App extends React.Component<{}> {
  render() {
    return <MyFunctionalWidget name={123} type="good" />;
  }
}

export default App;
