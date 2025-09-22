export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    services: string[];
    images: string[];
    type: 'Residencial' | 'Comercial' | 'Industrial' | 'Institucional' | 'Turístico';
}

export const projectTypes = ['Residencial', 'Comercial', 'Industrial', 'Institucional', 'Turístico'] as const;