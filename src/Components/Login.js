import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginRequestByUser } from '../redux/featuresReducer/login/action';
import './StyleSheets/Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { user } = useSelector((state) => state.userLog);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogin = () => {
		dispatch(loginRequestByUser(email, password));
		user ? history.push('/todos') : history.push('/');
	};
	return (
		<div className="Login">
			<h2>Login</h2>
			<Container className="Login__container">
				<Row>
					<Col md={8} className="Login__container__col">
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter email"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
								/>
							</Form.Group>

							<Button variant="primary" onClick={() => handleLogin()}>
								Login
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;
