## Flow checking React only (single file)

Works as I expect.

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 2 errors (1 missing prop, 1 wrong type prop)

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
Error: src/index.js:24
 24:     return <MyClassyWidget name={123} type="good" />;
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ React element `MyClassyWidget`
 11: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ property `description`. Property not found in
 24:     return <MyClassyWidget name={123} type="good" />;
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidget`

Error: src/index.js:24
 24:     return <MyClassyWidget name={123} type="good" />;
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ props of React element `MyClassyWidget`. This type is incompatible with
 11: class MyClassyWidget extends React.Component<Props> {
                                                  ^^^^^ object type
  Property `name` is incompatible:
     24:     return <MyClassyWidget name={123} type="good" />;
                                          ^^^ number. This type is incompatible with
      7:   name: string,
                 ^^^^^^ string


Found 2 errors
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
