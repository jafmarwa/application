import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addProduct,listProducts} from '../actions/productAction'

const AddProduct = () => {
    const dispatch= useDispatch()
    const [image, setImage]=useState('');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');

// show and hide the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);    
  const addingProduct= async ()=>{
    const data={
      image,
      title,
      description
    }
    await dispatch(addProduct(data))
    await dispatch(listProducts())
  }

  return (
    <div>

       
      <Button style={{marginBottom:'15px',marginLeft:'35px',marginTop:'35px',color:'red',backgroundColor:'white',borderStyle:'groove',borderColor:'red'}} onClick={handleShow}> <strong>ajouter un article</strong> </Button>
      
      <Modal show={show} onHide={handleClose} style={{border:'black'}}>
        <Modal.Header closeButton/>
          <Modal.Body>
              <form className="modaladd">
                <label>image</label>
                <input type='text' value={image} onChange={ (e)=>(setImage(e.target.value)) }/>
                <label>title</label>
                <input type='text' value={title} onChange={ (e)=>(setTitle(e.target.value)) }/>
                <label>description</label>
                <input type='text' value={description} onChange={ (e)=>(setDescription(e.target.value)) }/>
            </form>
   </Modal.Body>    
   <Modal.Footer>
          <Button style={{color:'green',backgroundColor:'white',borderColor:'green',borderStyle:'groove'}} type="submit" onClick={addingProduct}>
          <strong>
          ajouter
          </strong>
          </Button>
        </Modal.Footer>
      </Modal>

 

    </div>
  )
}

export default AddProduct