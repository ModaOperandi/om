import React from "react";

import { Sidebar } from "./components/Sidebar";

import { Button } from "@moda/om";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>@moda/om</h1>

      <div className="App__content">
        <Sidebar />

        <div>
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
