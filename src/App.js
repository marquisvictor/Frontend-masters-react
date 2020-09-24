import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Navbar  from './Navbar';

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>

      <div>

        <Navbar />

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));