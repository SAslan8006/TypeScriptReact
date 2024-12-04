import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./types";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error : {error.message}</div>;
  return (
    <div>
      <h2 className="mb-1">Tours </h2>
      {tours.map((tour) => {
        return (
          <p className="mb-1" key={tour.id}>
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;
