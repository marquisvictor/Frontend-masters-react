import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from '@reach/router';
import Pet from "./Pet";
import Details from "./Details";

const App = () => {
	return (
		<React.StrictMode>
			<div>
				<h1></h1>

				<Router>
					<SearchParams path="/" />
					<Details path="/details/:1" />
				</Router>
				
			</div>
		</React.StrictMode>

	);
};

ReactDOM.render(<App />, document.getElementById("root"));
