import { FC } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../services/hooks/reduxHooks";

import { loadingSelector } from "../redux/ArticleCards/articlesSelectors";

import { getArticles } from "../redux/ArticleCards/articlesOperations";

import Loader from "./NativeComponents/Loader/Loader";

import PagesRoutes from "../PagesRoutes/PagesRoutes";

const App: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(loadingSelector);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return <PagesRoutes />;
};

export default App;
