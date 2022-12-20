import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { logoutAction } from './../actions/clientAction';
const Navigbar = () => {


  const {isAuth,clientInfo} = useSelector ( (state )=> state.client);
  const dispatch = useDispatch()

  return (
    <div>
         <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand className="navt" >Minuiserie BORGI Hsen</Navbar.Brand>
          <Nav className="navbar" style={{marginLeft:'15px'}}>
           <Link className="nav" to='/'>ACCUEIL</Link>
           <Link className="nav" to='/about'>A PROPOS</Link>
           <Link className="nav" to='/product'>PRODUITS</Link>
           <Link className="nav" to='/projectref'>PROJETS DE REFERENCE</Link>
           <Link className="nav" to='/contactus'>CONTACT</Link>           
           
           {isAuth ? ( 
            <>
            
            <h6>{clientInfo.firstNameClient}</h6>
           <span className="navf"
           style={{cursor:'pointer'}} 
           onClick={()=> dispatch (logoutAction())}><i class="fa-solid fa-right-from-bracket" style={{cursor:'pointer'}}></i></span>
           <Link to='/ProfileAdmin'>COMMANDES</Link> 

            </>
           ) : ( 
           <>
            <Link className="navf" to='/register'><i class="fa-solid fa-user-plus" style={{cursor:'pointer'}}></i></Link>
            <Link className="navf" to='/login'><i class="fa-solid fa-right-to-bracket" style={{cursor:'pointer'}}></i></Link> 
           </>
            
            )}
           
          </Nav>
        
      </Navbar> 
        
    </div>
  )
}

export default Navigbar