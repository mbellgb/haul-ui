import React, { Component } from "react";
import Card from "./Card";

import "./vars.css";
import "./app.css";

class App extends Component {
  render() {
    const contexts = ["work", "work/client_company"];
    return (
      <div className="App">
        <h1>Reminders For Today</h1>
        <Card
          title="Client Company Invoice - September 2018"
          contexts={contexts}
          progress={5}
          progressMax={10}
        />
      </div>
    );
  }
}

export default App;
