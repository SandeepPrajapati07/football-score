// src/services/api.js
import axios from 'axios';

const API_TOKEN = 'Koy1K4d3mSL3ICZeChaygUMhxxKdV7zaaedsNiUJZwJJaS5j2Ipf3vZo88Do';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const BASE_URL = 'https://api.sportmonks.com/v3/football/fixtures/date/';

export const fetchMatchesByDate = async (date) => {
  console.log("data--------sfsfsf-----------",date)
  const formattedDate = date.toISOString().split('T')[0]; // Format the date
  console.log(formattedDate,"sdasdas")
  try {
    const response = await axios.get(
      `${CORS_PROXY}${encodeURIComponent(`${BASE_URL}${formattedDate}?api_token=${API_TOKEN}`)}`
    );
    console.log(response,"sdsdsds")
    return response.data;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};
