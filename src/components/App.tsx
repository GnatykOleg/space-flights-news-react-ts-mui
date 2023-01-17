import { FC } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../services/hooks/reduxHooks";

import { getArticles } from "../redux/ArticleCards/articlesOperations";
import PagesRoutes from "../PagesRoutes/PagesRoutes";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return <PagesRoutes />;
};

export default App;
