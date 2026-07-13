import api from "./axios";

export const sendContactForm = async (formData) => {
    const response = await api.post("/contact", formData);
    return response.data;
};