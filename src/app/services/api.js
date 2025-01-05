import axios from "axios";

const API_TOKEN = "Koy1K4d3mSL3ICZeChaygUMhxxKdV7zaaedsNiUJZwJJaS5j2Ipf3vZo88Do";
const CORS_PROXY = "https://api.allorigins.win/raw?url=";
const BASE_URL = "https://api.sportmonks.com/v3/football/fixtures/date/";


export const fetchMatches = async (date) => {
  try {
    const response = await axios.get(
      `${CORS_PROXY}${encodeURIComponent(BASE_URL)}${date}?api_token=${API_TOKEN}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
};
