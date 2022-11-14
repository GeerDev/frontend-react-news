import axios from "axios";

const API_URL = "http://localhost:3017";

const getNews = async () => {
        const res = await axios.get(API_URL + "/news");
        return res.data.news;
};

const postService = {
  getNews
};

export default postService;