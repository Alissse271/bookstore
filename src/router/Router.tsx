import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
  AccountPage,
  BookPage,
  CartPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
} from "pages";
import { MainTemplate } from "templates";
import { ROUTE } from "./routes";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.BOOK} element={<BookPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </>,
  ),
  { basename: "/bookstore" },
);
