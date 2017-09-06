## Flow checking `react-redux` `connect`'ed component with `flow-typed` library definition (single file)

Flow catches 2 errors as expected but 1 of them should be a number-string type mismatch instead of a missing prop.

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 2 errors (2 missing props)

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
Error: src/index.js:13
 13: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ property `description`. Property not found in
 40:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidgetContainer`

Error: src/index.js:13
 13: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ property `name`. Property not found in
 40:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidgetContainer`


Found 2 errors
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
