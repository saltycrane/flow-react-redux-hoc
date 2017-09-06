/* @flow */
import type { Store } from "redux";

declare module "react-redux" {
  declare class Provider<S, A> extends React$Component<{
    store: Store<S, A>,
    children?: any
  }> {}

  declare function connect<OriginalProps: {}, StateProps: {}, DispatchProps: {}>(
    mapStateToProps: (state: any) => StateProps,
    mapDispatchToProps: DispatchProps
  ): (React$ComponentType<OriginalProps>) =>
    React$ComponentType<$Diff<$Diff<OriginalProps, StateProps>, DispatchProps>>;
}
