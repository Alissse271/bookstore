import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME}>
        <Route index />
        <Route path={ROUTE.SEARCH} />
        <Route path={ROUTE.CART} />
        <Route path={ROUTE.FAVORITES} />
        <Route path={ROUTE.BOOK} />
        <Route path={ROUTE.ACCOUNT} />
        <Route path={ROUTE.SIGN_IN} />
        <Route path={ROUTE.RESET_PASSWORD} />
      </Route>
      <Route path={ROUTE.NOT_FOUND} />
    </>,
  ),
  { basename: "/bookstore" },
);
