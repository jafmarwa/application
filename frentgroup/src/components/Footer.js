import React from 'react'
import { Card} from 'react-bootstrap';

const Footer = () => {
  return (
     <div style={{marginTop:'100px'}}>
    <div  style = {{backgroundColor: 'black' ,position:'fixed',bottom:'0',width:'100%',height:'19%'}}>
     
    <Card.Footer style={{padding:'0%'}}>
    <td>
      <Card  style={{ width: '22rem',backgroundColor: 'black',color:'white' }}>
      <Card.Body>
        <Card.Title style={{fontSize:'15px'}}>Minuiserie BORJI Hsen</Card.Title>
        <Card.Text style={{fontSize:'10px'}}>
          <p>est une entreprise de fabrication, de conception de pose des produits en aluminium</p>
        </Card.Text>
      </Card.Body>
      </Card></td>
     
      <td>
      <Card  style={{ width: '22rem',backgroundColor: 'black',color:'white'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',}}>CONTACT</Card.Title>
        <Card.Text style={{fontSize:'10px'}}>
          <p>Adress: Cité Elagba MONASTIR 5000 </p>
          <p>Mobile: 53125441</p>
          <p>Email:minuiserieborjihsen@gmail.com</p>
        </Card.Text>
      </Card.Body>
    </Card></td>
    </Card.Footer>
   </div>
    </div>
  )
}

export default Footer