## Flow checking React only (multiple files)

Works as I expect.

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 2 errors (1 missing prop, 1 wrong type prop)

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
Error: src/App.js:8
  8:     return <MyFunctionalWidget name={123} type="good" />;
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ React element `MyFunctionalWidget`
 10: const MyClassyWidget = ({ description, name, type }: Props) => (
                                                          ^^^^^ property `description`. Property not found in. See: src/MyFunctionalWidget.js:10
  8:     return <MyFunctionalWidget name={123} type="good" />;
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyFunctionalWidget`

Error: src/App.js:8
  8:     return <MyFunctionalWidget name={123} type="good" />;
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyFunctionalWidget`. This type is incompatible with the expected param type of
 10: const MyClassyWidget = ({ description, name, type }: Props) => (
                                                          ^^^^^ object type. See: src/MyFunctionalWidget.js:10
  Property `name` is incompatible:
      8:     return <MyFunctionalWidget name={123} type="good" />;
                                              ^^^ number. This type is incompatible with
      6:   name: string,
                 ^^^^^^ string. See: src/MyFunctionalWidget.js:6


Found 2 errors
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
