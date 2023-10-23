import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/Context";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import SignIn from "./pages/SignIn";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import CheckoutSideMenu from "./components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/account", element: <Account /> },
    { path: "/orders", element: <Orders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/order", element: <Order /> },
    { path: "/orders/last", element: <Order /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <ProductDetail />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
