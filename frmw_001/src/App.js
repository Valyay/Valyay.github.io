import React, { useState } from "react";
import "./App.css";

function App() {
	const [value, setValue] = useState("");
	return (
		<div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
			<input
				value={value}
				onChange={event => setValue(event.target.value)}
			></input>
			<input
				value={value}
				onChange={event => setValue(event.target.value)}
			></input>
		</div>
	);
}

export default App;
