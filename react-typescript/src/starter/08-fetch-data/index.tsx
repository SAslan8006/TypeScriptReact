import { useEffect, useState } from "react";
import { Tour } from "./types";

const url = "https://www.course-api.com/react-tours-project";
function Component() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Tour[]>([] as Tour[]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "there was an error..."
        );
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }
  console.log(data);
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
      {data.map((tour) => {
        return (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
export default Component;
