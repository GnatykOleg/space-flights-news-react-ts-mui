import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/articles",
});

export const getArticlesApi = async () => {
  const { data } = await instance.get("?_limit=15");
  return data;
};
