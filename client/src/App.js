import './App.css';
import Axios from 'axios'

function App() {

Axios.get("http://localhost:3004/users")
.then(res=>{
  console.log(res.data)
})



  return (
  <div>

    <ul>

  <li>name:ssamar</li>
  <li>age:22</li>
  <li>email:dfghjkl</li>
  
  </ul>

  </div>

  );
}

export default App;
