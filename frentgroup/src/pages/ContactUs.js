import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button,Form } from 'react-bootstrap';

const ContactUs = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xt2upmc', 'template_rvvm2lo', form.current, 'y-kkaioRAMCokUiY3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
        <div style={{backgroundImage:"url('https://static.vecteezy.com/ti/vecteur-libre/t2/2309792-fond-vagues-blanches-gratuit-vectoriel.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'490px'}}>       
            <Form className="form" ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" >
        <br/>
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" name="nom" placeholder="Saisir votre nom" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Télèphone</Form.Label>
        <Form.Control type="text" name="telephone" placeholder="Saisir votre numéro" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Saisir votre email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Demande de devis</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" placeholder="mettez le nom du l'article que vous avez choisi avec la description (choix de la matière,choix du couleur,longeur et largeur)"/>
      </Form.Group>
      <Button style={{color:'green',backgroundColor:'white',borderColor:'green',borderStyle:'groove' ,marginTop:'-11px'}}  type="submit" >
        <strong>
        envoyer
        </strong>
        </Button>
    </Form> 
        </div>
    )
}
export default ContactUs