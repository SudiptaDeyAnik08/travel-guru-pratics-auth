import React, { useState } from 'react'
import img1 from '../../assets/travel-guru-resources-main/images/Sajek.png'
import img2 from '../../assets/travel-guru-resources-main/images/Sreemongol.png'
import img3 from '../../assets/travel-guru-resources-main/images/sundorbon.png'
import CardInfo from '../CardInfo/CardInfo'
import './Home.css';

function Home() {
    
    const data = [
        {
            Name:"Sajek",
            Des:"Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river.",
            img: img1
        },
        {
            Name:"Sreemongol",
            Des:"Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila.",
            img: img2
        },
        {
            Name:"sundorbon",
            Des:"Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world. ",
            img: img3
        }
    ]

   const [selectedCard,setSelectedCard] = useState(data[0]);
   const [bookedPlace,setBookedPlace] = useState();

//    console.log(selectedCard)

   let selectedPlace = data.find(res=> res.Name == selectedCard);

   
   if(!selectedPlace){
    selectedPlace = data[0]
   }

   console.log(selectedPlace);

   // Booked Place information

   const handleBookedPlace = () =>{
     setBookedPlace(selectedPlace);
     console.log(bookedPlace);
   }

  return (
    <div className='d-flex justify-content-evenly cardParent '>

        <div className='text-white informationCard'>
            <h1>{selectedPlace.Name}</h1>
            <p>{selectedPlace.Des}</p>
            <button className='bookbutton' onClick={handleBookedPlace}><a href="BookingDate.js">Book Now</a> </button>
        </div>
     

        {/* Card Section */}
        <div className='d-flex cardClass'>
            {
                data.map(res => <CardInfo selectedCard={setSelectedCard}  response={res}></CardInfo>)
            }
        </div>
    </div>
  )
}

export default Home