import React, { useState, useEffect } from "react";

const url = "https://www.course-api.com/react-tours-project";

async function fetchData1(url: string) {
  try {
    const response = await fetch(url);

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
  const [tours, setTours] = useState<any[]>([]);
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
    <div>
      <h1>Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tours;
