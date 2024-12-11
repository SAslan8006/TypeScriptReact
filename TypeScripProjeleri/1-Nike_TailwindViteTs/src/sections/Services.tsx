import { ServiceProps, services1 } from "../types/types";
import ServiceCard from "../components/ServiceCard";

const Services = (): JSX.Element => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services1.map((service: ServiceProps) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
