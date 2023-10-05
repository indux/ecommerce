import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import SignIn from "./pages/SignIn";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/account", element: <Account /> },
    { path: "/orders", element: <Orders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/order", element: <Order /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
