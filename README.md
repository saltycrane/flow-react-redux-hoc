## Flow checking `react-redux` `connect`ed component (single file)

There should be 2 errors, but Flow doesn't report any. I expect this because I think a library definition for `react-redux` is needed.

#### Expected: 2 errors (or 0 errors depending on how you look at it)

#### Actual: 0 errors

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.54.0
No errors!
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
