import React, { useState, useEffect } from "react";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchData1(url: string): Promise<Tour[] | []> {
  try {
    const response: Response | null = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.error(errMsg);
    return [];
  }
}

function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTours = async () => {
      const data = await fetchData1(url);
      setTours(data);
      setLoading(false);
    };

    getTours();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tours.map((tour: Tour) => (
        <div
          key={tour.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <img
            src={tour.image}
            alt={tour.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
            <p className="text-gray-600 mb-4">{tour.info}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-blue-500">
                ${tour.price}
              </span>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tours;
