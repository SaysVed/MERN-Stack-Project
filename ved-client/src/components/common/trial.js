import CardData from "./CardData";
import CardItem from "./CardItem";
import axios from "axios";
import { useState, useEffect } from "react";

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/load-cards").then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        setCards(res.data.cards);
      }
    });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {cards.map((item) => (
          <div key={item._id} className="flex items-center">
            <CardItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
