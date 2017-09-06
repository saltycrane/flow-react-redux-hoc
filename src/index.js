/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

type Props = {
  description: string,
  name: string,
  type: string
};

const MyFunctionalWidget = ({ description, name, type }: Props) => (
  <div>
    {name} {type} {description}
  </div>
);

const mapStateToProps = state => ({
  name: 123
});

const mapDispatchToProps = {};

const MyFunctionalWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(MyFunctionalWidget);

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

ReactDOM.render(<App />, document.getElementById('root'));
