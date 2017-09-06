/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

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

class App extends React.Component<{}> {
  render() {
    return <MyClassyWidget name={123} type="good" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
