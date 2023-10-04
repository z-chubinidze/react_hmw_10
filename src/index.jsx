import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Names from "./Names";


class App extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Names />
            </React.Fragment>
        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)