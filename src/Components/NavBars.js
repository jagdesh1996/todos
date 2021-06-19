import React from 'react';
import './StyleSheets/NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestByUser } from '../redux/featuresReducer/login/action';

function NavBars() {
	const { user } = useSelector((state) => state.userLog);
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logoutRequestByUser());
	};
	return (
		<div className="navbars">
			<Navbar className="nav_cus" bg="light" expand="lg">
				<Navbar.Brand className="nav__title" href="#home">
					Todos-App
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="navbar__item">
					<Nav className="">
						{user ? (
							''
						) : (
							<NavLink className="navItem" to="/signup">
								SignUp
							</NavLink>
						)}

						{user ? (
							<NavLink onClick={handleLogOut} className="navItem" to="/">
								Logout
							</NavLink>
						) : (
							<NavLink className="navItem" to="/">
								Login
							</NavLink>
						)}

						{user ? (
							<NavLink className="navItem" to="#link">
								{user['email']}
							</NavLink>
						) : (
							''
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavBars;
