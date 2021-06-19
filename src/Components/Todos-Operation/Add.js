import React, { useEffect, useState } from 'react';
import '../StyleSheets/Add.css';
import { Container, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
import {} from '../../redux/Saga/User';
import { pushTodoItemsRequestByUser } from '../../redux/featuresReducer/login/action';
import { db } from '../../firebase';
import List from './List';
import CMarked from './CMarked';
import Delete from './Delete';
import Update from './Update';
import ReactPaginate from 'react-paginate';

function Add() {
	const [itemText, setItemText] = useState('');
	const [items, setItems] = useState([]);
	const { user } = useSelector((state) => state.userLog);
	const [currentPageNumber, setCurrentPageNumber] = useState(0);
	const usersPerPage = 3;
	const pagesVisited = currentPageNumber * usersPerPage;
	const pagecount = Math.ceil(items.length / usersPerPage);
	const dispatch = useDispatch();

	const displayUsers = items
		.slice(pagesVisited, pagesVisited + usersPerPage)
		.map((Titem, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td className="itemText" onClick={() => handleItemUpdateText(Titem['itemName'])}>
						<List itemName={Titem['itemName']} comp={Titem['completed']} />
					</td>
					<td className="btn__center">
						<Update id={Titem['id']} singleItem={itemText} />
					</td>
					<td className="btn__center">
						<Delete id={Titem['id']} />
					</td>
					<td className="btn__center">
						<CMarked id={Titem['id']} comp={Titem['completed']} />
					</td>
				</tr>
			);
		});

	const changePage = ({ selected }) => {
		setCurrentPageNumber(selected);
	};

	useEffect(() => {
		db.on('value', (snapshot) => {
			let arr = [];
			for (let id in snapshot.val()) {
				if (snapshot.val()[id]['userId'] === user['userId']) {
					arr.push({ id, ...snapshot.val()[id] });
				}
			}
			setItems(arr);
		});
		return () => {};
	}, []);

	const handleKeyPress = (e) => {
		if (e.charCode === 13) {
			e.preventDefault();

			const todoOoj = {
				itemName: itemText,
				completed: false,
				access: true,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				userId: user['userId'],
				email: user['email'],
			};
			dispatch(pushTodoItemsRequestByUser(todoOoj));
			setItemText('');
			db.on('value', (snapshot) => {
				let arr = [];
				for (let id in snapshot.val()) {
					arr.push({ id, ...snapshot.val()[id] });
				}
				setItems(arr);
			});
		}
	};

	const handleItemUpdateText = (text) => {
		setItemText(text);
	};

	console.log(items.length);
	return (
		<div className="Add">
			<Container style={{ height: '85vh' }}>
				<Form>
					<Form.Control
						className="inputItem"
						type="text"
						value={itemText}
						onChange={(e) => {
							setItemText(e.target.value);
							console.log(itemText);
						}}
						onKeyPress={handleKeyPress}
						placeholder="Enter Your Todos items"
					/>
				</Form>

				<Table className="add__table" striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Items</th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>{displayUsers}</tbody>
				</Table>
				<ReactPaginate
					previousLabel="Previous"
					nextLabel="next"
					pageCount={pagecount}
					onPageChange={changePage}
					containerClassName={'paginationBtn'}
					previousClassName={'previousBtn'}
					nextLinkClassName={'nextBtn'}
					disabledClassName={'paginationdisabled'}
					activeClassName={'paginationActive'}
				/>
			</Container>
		</div>
	);
}

export default Add;
