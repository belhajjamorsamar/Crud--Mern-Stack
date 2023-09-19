import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
	const [users, setUsers] = useState([]);
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[email,setEmail]=useState("");

	useEffect(() => {
		Axios.get('http://localhost:3004/users').then((res) => {
			console.log(res.data);
			setUsers(res.data);
		});
	}, []);

  const createUser =()=>{
    Axios.post('http://localhost:3004/AddUser',{
      name:name ,
      age: age,
      email :email
    })
    .then((res) => {
			console.log(" User created seccesfully :) ");
      console.log(res.data)
			
		});
  }

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
<div>

<input type="text" placeholder='Name'  onChange={e=>setName(e.target.value)}/>

<input type="number" placeholder='age' onChange={e=>setAge(e.target.value)}/>

<input type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)}/>

<button onClick={createUser}>createUser</button>

</div>

		</>
	);
}

export default App;
