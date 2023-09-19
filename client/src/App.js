import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3004/users').then((res) => {
			console.log(res.data);
			setUsers(res.data);
		});
	}, []);

	return (
		<>
			{users.map((user) => {
				return (
					<ul>
						<li>{user.name}</li>
						<li>{user.age}</li>
						<li>{user.email}</li>
					</ul>
				);
			})}
		</>
	);
}

export default App;
