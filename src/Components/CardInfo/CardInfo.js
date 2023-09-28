import React from 'react'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CardInfo.css';

function CardInfo({ response,selectedCard }) {

  const { Name,  img } = response;

  const mystyle = {
    backgroundImage: img,
  }

  const selectedCardFromChild = ()=>{
    selectedCard(Name)
  }

  return (


    <div>
     
      <div className='cardInfo' onClick={selectedCardFromChild}>
        <img src={img} />
        <h1>{Name}</h1>
      </div>

    </div>


    // <Card className="bg-dark text-white cardInfo">
    //   <Card.Img src={img}  alt="Card image" style={{opacity:"0.9"}} />
    //   <Card.ImgOverlay>
    //     <Card.Title>{Name}</Card.Title>
    //   </Card.ImgOverlay>
    // </Card>
  )
}

export default CardInfo