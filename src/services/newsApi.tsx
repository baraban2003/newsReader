import axios from 'axios';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

// GET news
export async function fetchNews(limit?: number) {
  try {
    const { data } = await axios.get(`${BASE_URL}?_limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getNewsDetails(newsId?: string) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${newsId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}