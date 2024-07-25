import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import OrderList from "./pages/orders/OrderList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='orders'>
            <Route index element={<OrderList />} />
            <Route path=':orderId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
