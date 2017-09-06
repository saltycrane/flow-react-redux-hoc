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

class MyClassyWidget extends React.Component<Props> {
  render() {
    const { description, name, type } = this.props;
    return (
      <div>
        {name} {type} {description}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: 123
});

const MyClassyWidgetContainer = connect(mapStateToProps)(MyClassyWidget);

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

ReactDOM.render(<App />, document.getElementById('root'));
