import * as React from "react";
import { connect, Dispatch } from "react-redux";

interface ITestStateProps {}
interface ITestDispatchProps {}

type ITestProps = ITestStateProps & ITestDispatchProps;

interface ITestState {}

class Test extends React.Component<ITestProps, ITestState> {
    public render() {
        return (
          <span>Body2</span>
        );
    }
} 

const mapStateToProps = (state: Object): ITestStateProps => {
    return {
        // ...mapStateToProps
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Object>): ITestDispatchProps => {
    return {
        // ...mapDispatchToProps
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Test);