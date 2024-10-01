import axios from 'axios';

const URL = "https://pixabay.com/api/";
const API_KEY = "46223042-6ba9b86e05f43857f202d81f8";
    
export async function fetchImages(query, page = 1) {
        const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page, 
    per_page: 15,  
  };

try {
    const response = await axios.get(URL, { params });
    return response.data;
}
catch (error) {
    console.error("Error fetching images:", error);
    throw error;
}
    };