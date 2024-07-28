import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import OrderList from "./pages/orders/OrderList";
import OrderDetail from "./pages/orders/OrderDetail";
import NewProduct from "./pages/new/NewProduct";
import NewCategory from "./pages/new/NewCategory"; // Add this line
import NewSubCategory from "./pages/new/NewSubCategory"; // Add this line

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='users'>
        <Route index element={<List />} />
        <Route path=':userId' element={<Single />} />
      </Route>
      <Route path='products'>
        <Route index element={<List />} />
        <Route path=':productId' element={<Single />} />
        <Route path='new' element={<NewProduct />} />
      </Route>
      <Route path='orders'>
        <Route index element={<OrderList />} />
        <Route path='details/:id' element={<OrderDetail />} />
      </Route>
      <Route path='categories/new' element={<NewCategory />} />{" "}
      {/* Add this line */}
      <Route path='subcategories/new' element={<NewSubCategory />} />{" "}
      {/* Add this line */}
    </Routes>
  </div>
);

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
