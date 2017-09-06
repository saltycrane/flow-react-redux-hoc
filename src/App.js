/* @flow */
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import MyFunctionalWidgetContainer from "./MyFunctionalWidgetContainer";

const reducer = (state = {}, action) => {
  return state;
};

const store = createStore(reducer);

class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MyFunctionalWidgetContainer type="good" />
      </Provider>
    );
  }
}

export default App;
