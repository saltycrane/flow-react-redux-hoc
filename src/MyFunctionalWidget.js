/* @flow */
import * as React from "react";

type Props = {
  description: string,
  name: string,
  type: string
};

const MyClassyWidget = ({ description, name, type }: Props) => (
  <div>
    {name} {type} {description}
  </div>
);

export default MyClassyWidget;
