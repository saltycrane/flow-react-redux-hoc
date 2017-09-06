/* @flow */
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MyClassyWidgetContainer from "./MyClassyWidgetContainer";

const reducer = (state = {}, action) => {
  return state;
};

const store = createStore(reducer);

class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MyClassyWidgetContainer type="good" />
      </Provider>
    );
  }
}

export default App;
