import React from "react";
import ReactDOM from "react-dom";
import SimpleForm from "./SimpleForm"


const App = () => (
    <div className="App">
        <SimpleForm />
    </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
