import React from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    title: "Action",
    id : 27,
    idt : 10759,
    imageUrl: "https://source.unsplash.com/random/400x400?movie-action",
    gradientClass: "bg-gradient-to-t from-black to-transparent",
  },
  {
    title: "Comedy",
    id: 35,
    idt: 35,
    imageUrl: "https://source.unsplash.com/random/400x400?movie-comedy",
    gradientClass: "bg-gradient-to-t from-yellow-400 to-transparent",
  },
  {
    title: "Drama",
    id: 18,
    idt: 18,
    imageUrl: "https://source.unsplash.com/random/400x400?movie-drama",
    gradientClass: "bg-gradient-to-t from-blue-600 to-transparent",
  },
  {
    title: "Horror",
    id: 27,
    idt: 27,
    imageUrl: "https://source.unsplash.com/random/400x400?movie-horror",
    gradientClass: "bg-gradient-to-t from-red-600 to-transparent",
  },
  {
    title: "Romance",
    idt: 10749,
    id: 10749,
    imageUrl: "https://source.unsplash.com/random/400x400?movie-romance",
    gradientClass: "bg-gradient-to-t from-pink-400 to-transparent",
  },
  {
    title: "Science Fiction",
    id: 878,
    idt: 10765,
    imageUrl: "https://source.unsplash.com/random/400x400?movie-sci-fi",
    gradientClass: "bg-gradient-to-t from-purple-600 to-transparent",
  },
];

const GridCard = ({ title, imageUrl, gradientClass }) => {
  return (
    <div className="relative">
      <div className="pb-[36.25%]">
        <img className="absolute w-full h-full object-cover" src={imageUrl} alt={title} />
        <div
          className={`absolute inset-0 ${gradientClass} w-full h-full opacity-70`}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white text-lg font-bold">
        {title}
      </div>
    </div>
  );
};

const GridCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {cardsData.map(({ title, imageUrl, gradientClass ,id , idt }, index) => (
        <Link to={`/Genre/${id}/${idt}`}>
        <div key={index}>
          <GridCard title={title} imageUrl={imageUrl} gradientClass={gradientClass} />
        </div>
        </Link>
      ))}
    </div>
    
  );
};

export default GridCards;
