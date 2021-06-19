import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNewUser } from '../redux/featuresReducer/login/action';

import './StyleSheets/Registration.css';

function Registration() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { user } = useSelector((state) => state.userLog);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSignUp = () => {
		console.log(email + password);
		dispatch(createNewUser(email, password));
		user ? history.push('/todos') : history.push('/');
	};

	return (
		<div className="registration">
			<h2>Register</h2>
			<Container className="registration__login__container">
				<Row>
					<Col md={8} className="registration__login__col">
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter email"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									name="password"
									placeholder="Password"
								/>
							</Form.Group>

							<Button onClick={handleSignUp} variant="primary" type="submit">
								SignUp
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Registration;
