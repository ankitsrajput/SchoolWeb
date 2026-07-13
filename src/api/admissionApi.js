import api from "./axios";

export const sendAdmissionForm = async (formData) => {
    const response = await api.post("/admission", formData);
    return response.data;
};