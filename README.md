## Flow checking `react-redux` `connect`ed component with my own library definition (single file)

I tried to write a library definition for the `react-redux` `connect` function using the tips in https://flow.org/en/docs/react/hoc/ It correctly reported 2 errors, and for my test case, it reported the number-string type mismatch and the missing prop. However, the location of the error was not correct.

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 2 errors (1 missing prop, 1 wrong type prop) (but error location is wrong)

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
Error: src/index.js:13
 13: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ property `description`. Property not found in
 42:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidgetContainer`

Error: src/index.js:42
 42:         <MyClassyWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidgetContainer`. This type is incompatible with
 13: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ object type
  Property `name` is incompatible:
     25:   name: 123
                 ^^^ number. This type is incompatible with
      9:   name: string,
                 ^^^^^^ string


Found 2 errors
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
