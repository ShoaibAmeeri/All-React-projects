import { useState } from "react";

import "./App.css";
import HomePage from "./Routes/HomePage";

function App() {


  return(
    <HomePage/>
  )
//   const [user, setUser] = useState({
//     fName :'',
//     age :''
// });
  

//   const onChangeUser = ({target : {name, value}}) =>{
//       setUser({...user, [name] : value})

//     // const name = event.target.name
//     // let value = event.target.value
//     // if (name === 'user') {

//     //   setUser({...user, name:value})
      
//     // }
//     // else{

//     //   setUser({...user, age:value})
      
//     // }

//   }
 
//   return (
//     <>
//       <div className="container m-5 d-flex flex-column gap-2">
        
//           <input type="text" name="fName" value={user.fName} onChange={onChangeUser}/>
//           <input type="number" name="age" value={user.age} onChange={onChangeUser}/>
          
//         {user.fName && user.age && (
//           <h2>Welcome {user.fName} your Age is {user.age}</h2>
//         )}  
//       </div>
//     </>
//   );
}

export default App;
