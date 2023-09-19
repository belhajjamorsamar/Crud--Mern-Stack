import './App.css';

const users =[

{id:1, name:"samar",age:20 , email:"belhajjamosamar@gmail.com"},
{id:2, name:"majed",age:25 , email:"majedweldi@gmail.com"},
{id:3, name:"anas",age:30 , email:"Anastoutou@gmail.com"},

]




function App() {
  return (
  <div>
{users.map(user=>{
  return(
    <ul>

  <li>{user.name}</li>
  <li>{user.age}</li>
  <li>{user.email}</li>
  
  </ul>

  )
  

})}
  </div>

  );
}

export default App;
