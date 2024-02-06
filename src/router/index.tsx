import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/404";
import BeerList from "../features/breweries/pages/BeerList";
import Beer from "../features/breweries/pages/Beer";

const Router = () => (
  <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <Routes>
      <Route index element={<Home />} />
      <Route path="beer">
        <Route index element={<BeerList />} />
        <Route path=":id" element={<Beer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
