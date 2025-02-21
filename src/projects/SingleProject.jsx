import { useParams } from "react-router";
import { projects } from "../data/data";

function SingleProject() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
  
    if (!project) {
      return <h2 className="text-white text-3xl">Proyecto no encontrado</h2>;
    }
  
    return (
      <section className="px-4 md:px-24 py-12 bg-[#0e0e10] min-h-screen">
        <h1>hola</h1>
        <h2 className="text-white text-4xl font-bold">{project.title}</h2>
        <p className="text-gray-300 mt-4">{project.longDescription}</p>
        <img src={project.images[0]} alt={project.title} className="mt-4 rounded-lg w-full max-w-md" />
      </section>
    );
  }

export default SingleProject