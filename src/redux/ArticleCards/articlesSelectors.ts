import { IArticlesState } from "../../Interfaces/Interfaces";

export const loadingSelector = (state: IArticlesState) => state.loading;
export const dataSelector = (state: IArticlesState) => state.data;
export const filterSelector = (state: IArticlesState) => state.filter;
