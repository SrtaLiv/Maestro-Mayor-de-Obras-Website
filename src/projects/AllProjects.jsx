import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { projects } from '../data/data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AllProjects() {
    // Estados para los filtros
    const [selectedProjectType, setSelectedProjectType] = useState('todos');
    const [selectedService, setSelectedService] = useState('todos');

    // Obtener tipos únicos de proyectos
    const projectTypes = useMemo(() => {
        const types = new Set();
        projects.forEach(project => {
            types.add(project.type);
        });
        return Array.from(types);
    }, []);

    // Obtener servicios únicos
    const availableServices = useMemo(() => {
        const services = new Set();
        projects.forEach(project => {
            project.services.forEach(service => services.add(service));
        });
        return Array.from(services);
    }, []);

    // Filtrar proyectos
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesType = selectedProjectType === 'todos' || project.type === selectedProjectType;
            const matchesService = selectedService === 'todos' || project.services.includes(selectedService);
            
            return matchesType && matchesService;
        });
    }, [selectedProjectType, selectedService]);

    // Limpiar filtros
    const clearFilters = () => {
        setSelectedProjectType('todos');
        setSelectedService('todos');
    };

    return (
        <section className="px-6 w-full uppercase  md:px-12 lg:px-24 bg-[#0e0e10] min-h-screen py-20">
            {/* Header */}
            <div className="mt-8 flex w-full justify-between  ">
                <h1 className="text-white text-5xl md:text-6xl mb-4">Todos los Proyectos</h1>
            
            <div className="  -2xl mb-8 w-fit">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Tipo de Proyecto</label>
                        <select
                            value={selectedProjectType}
                            onChange={(e) => setSelectedProjectType(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        >
                            <option value="todos">Todos los tipos</option>
                            {projectTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Filtro por Servicio */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Tipo de Servicio</label>
                        <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        >
                            <option value="todos">Todos los servicios</option>
                            {availableServices.map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            </div>


            {/* Grid de Proyectos */}
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProjects.map((project) => (
                        <Link key={project.id} to={`/proyecto/${project.id}`} className="group">
                            <Card className="h-full    overflow-hidden cursor-pointer   ">
                                {/* Imagen del proyecto */}
                                <div className=" h-[55vh] md:h-[50vh] lg:h-[60vh] relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${project.images[0]})`,
                                        }}
                                    />
                                    
                                    {/* Badge del tipo de proyecto */}
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-4 bg-[#0e0e10] ">
                                    <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    {/* <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                        {project.shortDescription}
                                    </p> */}
                                    
                                    {/* Servicios */}
                                    {/* <div className="flex flex-wrap gap-1">
                                        {project.services.slice(0, 3).map((service, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800 text-gray-300 px-2 py-1   text-xs"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                        {project.services.length > 3 && (
                                            <span className="bg-gray-700 text-gray-400 px-2 py-1   text-xs">
                                                +{project.services.length - 3}
                                            </span>
                                        )}
                                    </div> */}
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                // Estado vacío cuando no hay resultados
                <div className="text-center py-16">
                    <div className="text-6xl text-gray-600 mb-4">🔍</div>
                    <h3 className="text-white text-2xl font-semibold mb-2">No se encontraron proyectos</h3>
                    <p className="text-gray-400 mb-6">
                        No hay proyectos que coincidan con los filtros seleccionados.
                    </p>
                    <Button
                        onClick={clearFilters}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                        Ver todos los proyectos
                    </Button>
                </div>
            )}
        </section>
    );
}

export default AllProjects;
