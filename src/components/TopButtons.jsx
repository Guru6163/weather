import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Syndey",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "US",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => 
        <button key={city.id} className="text-white text-lg font-sans">{city.title}</button>
      )}
    </div>
  );
}

export default TopButtons;
