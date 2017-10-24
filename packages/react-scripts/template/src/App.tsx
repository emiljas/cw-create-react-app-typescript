import * as React from "react";
import "./App.css";
import Test from "./testCssModulesComponent/Test";
import { Provider } from "react-redux";
import { createStore } from "redux";

const logo = require("./logo.svg");
const store = createStore((state, action) => state);

class App extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to CW Admin</h2>
                        <Test />
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.tsx</code> and save to reload!
                    </p>
                </div>
            </Provider>
        );
    }
}

export default App;
