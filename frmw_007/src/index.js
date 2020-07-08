import React, { Component as C } from "react";
import { render as r } from "react-dom";
import Counter from "./Counter";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "@material-ui/pickers";
import moment from "moment";
const f = "DD.MM.YYYY HH:mm:ss";

class App extends C {
	constructor() {
		super();
		this.state = {
			day: 3
		};
	}

	render() {
		return (
			<StyledSection>
				<div>
					<Counter stars={this.state.day} />
					<DatePicker
						onChange={(n = null, date) => {
							let day = moment(date).format(f);
							this.setState({ day });
						}}
						floatingLabelText="Выберите дату!"
					/>
				</div>
			</StyledSection>
		);
	}
}

r(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>,
	document.querySelector(".cont")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
