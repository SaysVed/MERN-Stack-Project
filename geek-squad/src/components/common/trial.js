import CardData from "./CardData";
import CardItem from "./CardItem";
import axios from "axios";
import {useState, useEffect} from "react";

function Card() {
  const [card, setCards] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:5000/load-cards").then((res, err) => {
      if(err){
        console.log(err);
      }else{
        console.log("hi");
        setCards(res.data.cards);
      
      }
    })
  },
  [])
  
    return (
      <div>
        {card.map(itumm => {
            return (
              <div className="flex items-center">
                <div key={itumm.id}>
                    < CardItem {...itumm}  />
                </div>
              </div>
                
                
            )
        })}
      </div>
    );
  }

export default Card;