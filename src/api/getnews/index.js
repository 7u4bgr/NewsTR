import axios from "../index";
const getNews = (query) => {
  return axios.get(`/news/getNews?country=tr&tag=${query}`);
};
export { getNews };
