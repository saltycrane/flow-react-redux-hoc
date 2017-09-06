/* @flow */
import * as React from "react";

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

export default MyClassyWidget;
