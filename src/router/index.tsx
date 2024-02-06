import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Beer from "../pages/Beer";
import Beers from "../pages/Beers";

const Router = () => (
  <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <Routes>
      <Route index element={<Home />} />
      <Route path="beer">
        <Route index element={<Beers />} />
        <Route path=":id" element={<Beer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
