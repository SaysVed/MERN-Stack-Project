import { useState } from "react";

const CardItem = ({ item_name, item_category, item_description, link, image }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <a
      href={link}
      target="_blank"
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-80 w-64"
    >
      <img
        src={image}
        alt={item_name}
        className="object-cover h-48 w-full rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 text-lg">{item_name}</h3>
        <p className="text-gray-500 text-sm">{item_category}</p>
        {showFullDescription ? (
          <p className="text-gray-600 mt-2">{item_description}</p>
        ) : (
          <p className="text-gray-600 mt-2 line-clamp-3">{item_description}</p>
        )}
        {item_description.length > 120 && (
          <button
            className="mt-2 text-blue-500 hover:underline"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </a>
  );
};

export default CardItem;
