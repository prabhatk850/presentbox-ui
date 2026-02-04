import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home';
import Product from './Pages/product';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/products"} element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;