## Flow checking `react-redux` `connect`ed component with my own library definition (single file) (functional component)

Using a functional component works when the code is in a single file but not when it is separated into multiple files.

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 2 errors (1 missing prop, 1 wrong type prop) (but error location is wrong)

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
Error: src/index.js:13
 13: const MyFunctionalWidget = ({ description, name, type }: Props) => (
                                                              ^^^^^ property `description`. Property not found in
 37:         <MyFunctionalWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyFunctionalWidgetContainer`

Error: src/index.js:37
 37:         <MyFunctionalWidgetContainer type="good" />
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyFunctionalWidgetContainer`. This type is incompatible with the expected param type of
 13: const MyFunctionalWidget = ({ description, name, type }: Props) => (
                                                              ^^^^^ object type
  Property `name` is incompatible:
     20:   name: 123
                 ^^^ number. This type is incompatible with
      9:   name: string,
                 ^^^^^^ string


Found 2 errors
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
