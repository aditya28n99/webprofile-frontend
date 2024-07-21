import axios from "axios";

const API_URL = process.env.REACT_APP_TEMPLATE_POJECT_URL;

// get all projects
export const getProjects = async () => {
    try {
        const response = await axios.get(`${API_URL}/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

// gry Projects by ID
export const getProjectById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching project with id ${id}:`, error);
        throw error;
    }
};