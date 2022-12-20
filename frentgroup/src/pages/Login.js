import React, {useState} from 'react';
import {Button,Form,Col,Spinner} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { loginClient } from '../actions/clientAction';
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInput,setLoginInput] = useState({});
  const {loading,errors} = useSelector((state) => state.client)  ; 
    const handleChange = (e) =>{
        setLoginInput({...loginInput, [e.target.name]:e.target.value});
        console.log(loginInput);
    };
    const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(loginClient(loginInput,navigate))
  }
  return (
    
       <div className="login" style={{ display:'flex', justifyContent: 'center' ,backgroundImage:"url('https://static.vecteezy.com/ti/vecteur-libre/t2/2309792-fond-vagues-blanches-gratuit-vectoriel.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'1365px',height:'480px'}}>
        <Col xs={4}>
         <Form>

      <Form.Group  style={{height:'150px'}} className="mb-3" controlId="formBasicEmail">
        <br/> <br/><br/>
        <Form.Label><strong>Email address</strong></Form.Label>
        <Form.Control type="email" name='email' onChange={handleChange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password</strong></Form.Label>
        <Form.Control type="password" name='password' onChange={handleChange} placeholder="Password" />
      </Form.Group>
      {errors && <p> {errors.msg} </p>}
      <Button style={{marginTop:'20px',backgroundColor:'white',borderColor:'green',color:'green',borderStyle:'groove',marginBottom:'21px'}} type="submit" onClick={handleSubmit}>
        {loading ? (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>) :(<strong>submit</strong>)
        }
        
      </Button>
    </Form>
    </Col>
    
    </div>
  )
}

export default Login