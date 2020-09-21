import React from "react";
import ReactDOM from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1></h1>
      <Pet name="Luna" animal="Dog" breed="havanese" />;
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
