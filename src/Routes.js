import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const FormView = lazy(() => import("./Views/FormView"));
const Layout = lazy(() => import("./Layout/Layout"));

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="forms" element={<FormView />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
