import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function menu() {
  let navigate = useNavigate()
  
  const clickHandle=(id)=>{
    navigate('/product/'+id)
    console.log(id);
  }
  return (
    <div>
      <h2>Menu</h2>
      <ul className="list-group">
  <li className="list-group-item">
    <Link to='/product/1'>Product 1 </Link>
  </li>
  <li className="list-group-item">
    <Link to='/product/2'>Product 2 </Link>
  </li>
  <li className="list-group-item">
    <Link to='/product/3' >Product 3 </Link>
  </li>
 
</ul>
<button type="button" className="btn btn-primary" onClick={()=>clickHandle(1)}>Product 1</button>
<button type="button" className="btn btn-secondary" onClick={()=>clickHandle(2)} >Product 2</button>
<button type="button" className="btn btn-success" onClick={()=>clickHandle(3)}>Product 3</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>
    </div>
  )
}
