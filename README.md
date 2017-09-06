## Flow checking `react-redux` `connect`'ed component with `flow-typed` library definition (multiple files)

When the source code is separated into multiple files Flow reports 0 errors, but it reported 2 errors when using a single file. What did I do wrong?

#### Expected: 2 errors

#### Actual: 0 errors

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
No errors!
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
