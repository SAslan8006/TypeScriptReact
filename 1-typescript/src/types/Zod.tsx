import { z } from "zod";

function Zod() {
  return <div>Zod</div>;
}

export default Zod;

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // somethign: z.string(),
});

// Type çıkarımı
type Tour = z.infer<typeof tourSchema>;

// Veri çekme fonksiyonu
export async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.log(errMsg);

    // throw error;
    return [];
  }
}

// Verileri çekip ekrana yazdırma
async function displayTours() {
  const tours = await fetchData(url);
  tours.map((tour) => {
    console.log(tour.name);
  });
}

displayTours();
