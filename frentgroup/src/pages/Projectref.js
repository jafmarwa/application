import React,{useEffect,useState} from 'react'
import { Card,Modal,Button } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { listProjects,addProject, deleteProjectAction, updateProject } from './../actions/projectAction';


const Projectref = () => {  
const dispatch=useDispatch()
                       // get list project
 
const projects = useSelector((state)=> state.projectList.projects)
const isAuth = useSelector((state)=>state.client.isAuth)

useEffect(()=>{
  dispatch(listProjects())
},[])
// add new project
const [projectInfo,setProjectInfo]=useState({});
const[file,setFile]=useState({});
const[title,setTitle]=useState({});
const[description,setDescription]=useState({});
const[id,setId]=useState({});
const handelChange = (e)=>{
  setProjectInfo({...projectInfo, [e.target.name]:e.target.value})
}
const handleSubmit = async (e) =>{
  e.preventDefault();
 await dispatch(addProject({projectInfo,file}));
 await dispatch(listProjects());
 handleClose()
}
  // deleteproduct
  const deleteProject= async(_id)=>{
    console.log(_id)
    await dispatch(deleteProjectAction(_id))
    await dispatch(listProjects())
    }
    // editCommand
const [edit, setEdit] = useState(false);
const handleCloseEdit = () => setEdit(false);
const handleShowEdit = ( _id ) => {
  projects.forEach(project =>{
    if (project._id === _id){
      setId(project._id)
      setFile(project.image)
      setTitle(project.title)
      setDescription(project.description)
      console.log(setFile(project.image))
    }
  })
  console.log(_id)
  
  setEdit(true);
}
const updatingProject= async ()=>{
  const image={file}
  const projectInfo={
    title,
    description
  }
  
 await dispatch(updateProject(id,{image,projectInfo}))
  await dispatch(listProjects())
  handleCloseEdit()
  setId('')
  setFile('')
  setTitle('')
  setDescription('')
  
}
// show&hide modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 




  return (
    <div style={{backgroundImage:"url('https://static.vecteezy.com/ti/vecteur-libre/t2/2309792-fond-vagues-blanches-gratuit-vectoriel.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'100%'}}>
        <br/>
        <h3 style={{color:'blue',marginLeft:'15px',textShadow:'2px 2px'}}>Nos réalisations!!!</h3>

                                 {/* add new project */}

      <div>
      {isAuth ?  
      <Button style={{marginBottom:'25px',marginLeft:'35px',marginTop:'15px',color:'red',backgroundColor:'white',borderColor:'red',borderStyle:'groove'}} onClick={handleShow}> <strong>ajouter la commande </strong></Button>
      : null }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton/>
          <Modal.Body>
         <form style={{marginBlock:"20px"}} className="modaladd">
                <label>Image</label>
                <input type='file' name="uploads"  onChange={ (e) =>setFile(e.target.files[0]) }/>
                <label>Titre</label>
                <input type='text' name="title" onChange={ handelChange }/>
                <label>Description</label>
                <input type='text' name="description" onChange={ handelChange }/>
                
            </form>
            </Modal.Body>    
   <Modal.Footer>

          <Button style={{color:'green',backgroundColor:'white',borderColor:'green',borderStyle:'groove'}} type="submit" onClick={handleSubmit} >
            <strong>
            ajouter
            </strong>
            </Button>
        </Modal.Footer>
      </Modal>
      </div>

                                     {/* get all projects */}
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
   {projects.map((project)=>(  
    <div style={{marginBottom:'60px',marginLeft:'35px'}}>
      
   <Card style={{maxWidth:'265px',marginLeft:'25px',marginTop:'12px',height:'400px'}}>
            {isAuth ? 

     <tr style={{display:'flex' ,justifyContent:'space-between', padding:'5px 10px'}}>
          <td><i class="fa-solid fa-pen-to-square" onClick={()=>handleShowEdit(project._id)} style={{cursor:'pointer'}}></i></td>
          <td><i class="fa-solid fa-trash" onClick={()=> deleteProject(project._id)} style={{cursor:'pointer'}}></i></td>
        </tr>
        : null }
 <Card.Img className="Poster"  variant="top" src={project.image.imageURL} /><br/>
 <Card.Title style={{color:'blue',fontSize:'18px',marginTop:'5px',textAlign:'center'}}>{project.title}</Card.Title>
 <Card.Text className="productinfo">{project.description}</Card.Text>
   </Card>
    </div>
))}   </div>
{/* 1728; 1296 */}
                                      {/*updateproduct  */}
       <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton/>
          <Modal.Body>
          <form style={{marginBlock:"20px"}} className="modaladd">
                <label>Image</label>
                <input type='file'  name="uploads"  onChange={ (e) =>setFile(e.target.files[0]) }/>
                {/* <input type='text'  value={file} onChange={ (e)=>setFile((e.target.value)) }/> */}
                <label>Titre</label>
                <input type='text' value={title} name="title" onChange={ (e)=>setTitle((e.target.value)) }/>
                <label>Description</label>
                <input type='text' value={description} name="description" onChange={ (e)=>setDescription((e.target.value)) }/>
            </form>
   </Modal.Body>    
   <Modal.Footer>
          <Button style={{color:'red',backgroundColor:'white',borderColor:'red',borderStyle:'groove'}} type="submit" onClick={updatingProject} >
          <strong>
          save
          </strong>
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Projectref