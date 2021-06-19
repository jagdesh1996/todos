import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Todos from './Components/Todos';
import NavBars from './Components/NavBars';
import { useSelector } from 'react-redux';
import Footer2 from './Components/Footer2';

function App() {
	const { user } = useSelector((state) => state.userLog);

	return (
		<div>
			<div className="App">
				<NavBars />
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/signup" component={Registration} />
					<Route exact path="/todos" component={Todos} />
				</Switch>
				{user ? <Redirect to="todos" /> : <Redirect to="/" />}
			</div>
			<Footer2 />
		</div>
	);
}

export default App;

// export class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			user: {},
// 		};
// 	}

// 	componentDidMount() {
// 		this.handleLogin();
// 	}
// 	handleLogin() {
// 		auth.onAuthStateChanged((user) => {
// 			user ? this.setState({ user }) : this.setState({ user: null });
// 		});
// 	}
// 	render() {
// 		return (
// 			<div className="App">
// 				<NavBar />
// 				<Switch>
// 					<Route exact path="/" component={Login} />
// 					<Route exact path="/signup" component={Registration} />
// 					<Route exact path="/todos" component={Todos} />
// 				</Switch>
// 				{this.state.user ? <Redirect to="todos" /> : <Redirect to="/" />}
// 			</div>
// 		);
// 	}
// }

// export default App;
