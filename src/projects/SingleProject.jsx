import { useParams } from "react-router";
import { projects } from "../data/data";
import Footer from "../footer/Footer";

function SingleProject() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-white text-3xl">Proyecto no encontrado</h2>;
  }

  const detailImages = id === '28' ? [] : project.images.slice(1);

  return (
    <>
      <section className=" py-12 bg-[#0e0e10] h-auto min-h-screen">
        <img
          src={`${project.images[0]}`}
          alt={project.title}
          className="mt-4 w-full h-[30vh] object-cover"
        />
        <div className="px-4 mt-12 md:px-24">
          <div>
            <h2 className="text-white text-4xl font-bold">{project.title}</h2>
            <p className="text-gray-300 mt-4 md:w-[40vw]">{project.longDescription}</p>
          </div>

         
        </div>
      </section>
      <Footer />
    </>

  );
}

export default SingleProject