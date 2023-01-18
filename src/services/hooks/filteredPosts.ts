import { IDataFromBackend } from "../../Interfaces/Interfaces";

const filteredPosts = (posts: IDataFromBackend[], filter: string) => {
  const filteredTitle = posts.filter((element) =>
    element.title.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredSummary = posts.filter((element) =>
    element.summary.toLowerCase().includes(filter.toLowerCase())
  );

  const combineFilteredArrays = [...filteredTitle, ...filteredSummary];

  const resultedPosts = combineFilteredArrays.filter(
    (element, index, array) => array.indexOf(element) === index
  );

  const isFilterActive = filter ? resultedPosts : posts;

  return isFilterActive;
};

export default filteredPosts;
