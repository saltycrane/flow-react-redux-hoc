/* @flow */
import * as React from "react";
import { connect } from "react-redux";

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

export default MyClassyWidgetContainer;
