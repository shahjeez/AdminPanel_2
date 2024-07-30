import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import OrderList from "./pages/orders/OrderList";
import OrderDetail from "./pages/orders/OrderDetail";
import NewProduct from "./pages/new/NewProduct";
import NewCategory from "./pages/new/NewCategory";
import NewSubCategory from "./pages/new/NewSubCategory";
import EditProduct from "./pages/single/EditProduct";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='home' element={<PrivateRoute element={<Home />} />} />
      <Route path='users' element={<PrivateRoute element={<List />} />} />
      <Route
        path='users/:userId'
        element={<PrivateRoute element={<Single />} />}
      />
      <Route path='products' element={<PrivateRoute element={<List />} />} />
      <Route
        path='products/:productId'
        element={<PrivateRoute element={<Single />} />}
      />
      <Route
        path='products/new'
        element={<PrivateRoute element={<NewProduct />} />}
      />
      <Route
        path='products/:productId/edit'
        element={<PrivateRoute element={<EditProduct />} />}
      />
      <Route path='orders' element={<PrivateRoute element={<OrderList />} />} />
      <Route
        path='orders/details/:id'
        element={<PrivateRoute element={<OrderDetail />} />}
      />
      <Route
        path='categories/new'
        element={<PrivateRoute element={<NewCategory />} />}
      />
      <Route
        path='subcategories/new'
        element={<PrivateRoute element={<NewSubCategory />} />}
      />
    </Routes>
  </AuthProvider>
);

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
