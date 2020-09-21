import React from "react";
import ReactDOM from "react-dom";

import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", { id: "something-important" }, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "cocaktiel",
  //     }),
  //     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "mixed" }),
  //   ]);
  return (
    <div>
      <Pet name="Luna" animal="Dog" breed="havanese" />;
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
