import React from "react";

import { Sidebar } from "./components/Sidebar";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>@moda/om</h1>

      <div className="App__content">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
