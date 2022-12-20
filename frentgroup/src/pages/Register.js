import React,{useState} from 'react'
import {Button,Form,Col,Spinner} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { registerNewClient } from './../actions/clientAction';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading,errors} = useSelector((state) => state.client)
    const [registerInput,setRegisterInput] = useState({})
    const handleChange = (e) =>{
        setRegisterInput({...registerInput, [e.target.name]:e.target.value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registerNewClient(registerInput,navigate))
    }
  return (
    <div style={{ display:'flex', justifyContent: 'center',backgroundImage:"url('https://static.vecteezy.com/ti/vecteur-libre/t2/2309792-fond-vagues-blanches-gratuit-vectoriel.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'100%'}}>
        <Col xs={7} >
         <Form>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'16px'}}><strong> First Name</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="text" name='firstNameClient' onChange={handleChange} placeholder="Enter firstname" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Last Name</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="text" name='lastNameClient' onChange={handleChange} placeholder="Enter lastname" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Telephone</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="text" name='telephone' onChange={handleChange} placeholder="Enter number phone" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Adress</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="email" name='adress' onChange={handleChange} placeholder="Enter Adress " />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Email address</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="email" name='email' onChange={handleChange} placeholder="Enter email" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Password</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="password" name='password' onChange={handleChange} placeholder="au moins 6 caractères: des minuscules, des majuscules, des chiffres" />
      </Form.Group>
      {errors && errors.map((el) => <p>{el.msg}</p>)}
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

export default Register