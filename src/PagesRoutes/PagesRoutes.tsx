import { FC, Suspense, lazy } from "react";

import { Routes, Route } from "react-router";

import { Loader } from "../components";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ArticlePage = lazy(() => import("../pages/ArticlePage/ArticlePage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

const PagesRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="article/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;
