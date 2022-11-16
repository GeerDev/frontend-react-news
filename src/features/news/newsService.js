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

const getCategories = async () => {
    const res = await axios.get(API_URL + "/showCategories");
    return res.data.categories;
};

const getNewsByCategory = async (name_category) => {
    const res = await axios.get(API_URL + `/findNewsByCategory/${name_category}`);
    return res.data.newsByCategories;
};

const searchByTitle = async (dataSearch) => {
    const { dataTitle, dataCategory } = dataSearch
    const res = await axios.get(API_URL + `/search?category=${dataCategory}&title=${dataTitle}`);
    return res.data.resultNews;
};

const createNews = async (dataForm) => {
    const res = await axios.post(API_URL, dataForm);
    return res.data;
};

const updateArchived = async (id_new) => {
    const res = await axios.put(API_URL + `/id/${id_new}`);
    return res.data;
};

const deleteOneNews = async (id_new) => {
    const res = await axios.delete(API_URL + `/id/${id_new}`);
    return res.data;
};

const postService = {
  getNews,
  getNewsById,
  getCategories,
  getNewsByCategory,
  searchByTitle,
  createNews,
  updateArchived,
  deleteOneNews
};

export default postService;