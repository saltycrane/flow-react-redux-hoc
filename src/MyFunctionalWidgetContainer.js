/* @flow */
import * as React from "react";
import { connect } from "react-redux";

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

const MyFunctionalWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(
  MyFunctionalWidget
);

export default MyFunctionalWidgetContainer;
