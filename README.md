## Trying to Flow check `react-redux` `connect`ed components

Environment:
 - flow-bin 0.54.0
 - flow-typed 2.1.5
 - node 8.4.0
 - npm 5.3.0
 - macOS Sierra 10.12.6

### Source code in a single file (class-based component)

1. [React only](https://github.com/saltycrane/flow-react-redux-hoc/tree/onefile-01-react-only) - this is a baseline example that shows how the errors are expected to show up. This correctly shows 2 errors: 1 missing prop and one number-string type mismatch.

2. [`react-redux` `connect`ed component](https://github.com/saltycrane/flow-react-redux-hoc/tree/onefile-02-with-react-redux) - this example does not report any errors even though there are 2 errors. This is somewhat expected because I think a library definition is needed.

3. [`react-redux` `connect`ed component with `flow-typed` library definition](https://github.com/saltycrane/flow-react-redux-hoc/tree/onefile-03-with-libdef) - This partially works as expected. It correctly reports 2 errors but instead of reporting a number-string type mismatch, it reports a missing prop.

4. [`react-redux` `connect`ed component with my own library definition](https://github.com/saltycrane/flow-react-redux-hoc/tree/onefile-04-with-my-libdef) - I tried to write a library definition for the `react-redux` `connect` function using the tips in https://flow.org/en/docs/react/hoc/ It correctly reported 2 errors, and for my test case, it reported the number-string type mismatch and the missing prop. However, the location of the error was not correct.

### Source code in multile files (class-based component)

When I separate the source code into 3 files instead of 1, example #3 no longer reports any errors. I don't understand this. Did I configure something incorrectly?

5. [React only](https://github.com/saltycrane/flow-react-redux-hoc/tree/multifile-01-react-only) - same results as #1 above

6. [`react-redux` `connect`ed component](https://github.com/saltycrane/flow-react-redux-hoc/tree/multifile-02-with-react-redux) - same results as #2 above

7. [`react-redux` `connect`ed component with `flow-typed` library definition](https://github.com/saltycrane/flow-react-redux-hoc/tree/multifile-03-with-libdef) - this no longer reports any errors but it did report errors when using a single file (#3). What did I do wrong?

8. [`react-redux` `connect`ed component with my own library definition](https://github.com/saltycrane/flow-react-redux-hoc/tree/multifile-04-with-my-libdef) - same results as #4 above

### Source code in a single file (functional component)

12. [`react-redux` `connect`ed component with my own library definition](https://github.com/saltycrane/flow-react-redux-hoc/tree/onefile-funccomp-04-with-my-libdef) - same results as #4 and #8 above


### Source code in multiple files (functional component)

When using a functional component in a single file (#12), Flow catches errors. When using a class-based component and multiple files (#4), Flow catches errors. But when using a functional component and multiple files (#16), Flow does not catch errors.

16. [`react-redux` `connect`ed component with my own library definition](https://github.com/saltycrane/flow-react-redux-hoc/tree/multifile-funccomp-04-with-my-libdef) - this no longer reports any errors but it did when using a single file (#12). What did I do wrong?



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
