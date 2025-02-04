import { Project } from "./project-data";


export const projects: Project[] = [
    {
        id: '1',
        title: 'Casa 1',
        shortDescription: 'Casa de Elon Musk.',
        longDescription: 'La casa mas dificil y costosa de hacer, fue hecha en 2020 con las ultimas tecnologias y diseños.',
        services: ['Asesoria', 'Diseños', 'Arquitectura'],
        images: ['/images/frentes.jpg',],
    },
    {
        id: '2',
        title: 'Galpon',
        shortDescription: 'Galpon para un cliente de Google ahre.',
        longDescription: 'Galpon para un cliente de Google muy grande y dificil de hacer.',
        services: ['Planos'],
        images: ['/images/frentes.jpg',],
    },
    {
        id: '3',
        title: 'Mi casa',
        shortDescription: 'Casa hecha por mi y mi familia',
        longDescription: 'Casa hecha por mi y mi familia, con las ultimas tecnologias y diseños.',
        services: ['Planos', 'Diseños', 'Arquitectura', 'Construccion', 'Diseño', 'Construccion'],
        images: ['/images/frentes.jpg',],
    }
];