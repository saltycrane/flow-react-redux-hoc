## Flow checking `react-redux` `connect`'ed component with my own library definition (multiple files) (class based component)

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 2 errors (1 missing prop, 1 wrong type prop) (but error location is wrong)

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
Error: src/App.js:18
 18:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ React element `MyClassyWidgetContainer`
 11: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ property `description`. Property not found in. See: src/MyClassyWidgetContainer.js:11
 18:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidgetContainer`

Error: src/App.js:18
 18:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidgetContainer`. This type is incompatible with
 11: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ object type. See: src/MyClassyWidgetContainer.js:11
  Property `name` is incompatible:
     23:   name: 123
                 ^^^ number. This type is incompatible with. See: src/MyClassyWidgetContainer.js:23
      7:   name: string,
                 ^^^^^^ string. See: src/MyClassyWidgetContainer.js:7


Found 2 errors
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
