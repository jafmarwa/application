import React from 'react'
import {Carousel} from 'react-bootstrap';
import Baie from '../images/./portfenetr.jpg';
import Porte from '../images/./Porte-Entree.jpg';
import Façade from '../images/./facade.jpg';

const Home = () => {
  return (
    <div >
      <Carousel variant="dark" className="carrousel">
      <Carousel.Item>
        <img
          className="image"
          src={Baie}
          alt="Baie vitrée et coulissante"
        />
      <Carousel.Caption>
        <p>Baie vitrée et coulissante.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={Porte}
          alt="porte"
        />
        <Carousel.Caption>
          <p>Porte d'entrée chic et moderne</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={Façade}
          alt="façade"
        />
        <Carousel.Caption>
          <p>
            Mur en verre de façade moderne.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <p style={{fontFamily:'serif',position:'initial'}}>
        Notre entreprise Minuiserie BORJI Hsen vous garanti un excellent service de fabrication , de pose et d'entretien des produits en Aluminium.
      </p> */}

    </div>
  )
}

export default Home