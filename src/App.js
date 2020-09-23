import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";

const App = () => {
	return (
		<React.StrictMode>
			<div>
				<h1></h1>
				<SearchParams />
			</div>
		</React.StrictMode>

	);
};

ReactDOM.render(<App />, document.getElementById("root"));
