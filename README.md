## Flow checking `react-redux` `connect`ed component with my library definition (multiple files) (functional component)

When using a functional component in a single file, Flow catches errors. When using a class-based component and multiple files, Flow catches errors. But when using a functional component and multiple files, Flow does not catch errors.

#### Expected: 2 errors (1 missing prop, 1 wrong type prop)

#### Actual: 0 errors

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
No errors!
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
