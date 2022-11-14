import axios from "axios";

const API_URL = "http://localhost:3017/news";

const getNews = async () => {
        const res = await axios.get(API_URL);
        return res.data.news;
};

const getNewsById = async (id_new) => {
    const res = await axios.get(API_URL + `/id/${id_new}`);
    return res.data.oneNews;
};

const updateArchived = async (id_new) => {
    const res = await axios.put(API_URL + `/id/${id_new}`);
    return res.data.updateNews;
};

const deleteOneNews = async (id_new) => {
    const res = await axios.delete(API_URL + `/id/${id_new}`);
    return res.data.deleteNews;
};

const postService = {
  getNews,
  getNewsById,
  updateArchived,
  deleteOneNews
};

export default postService;