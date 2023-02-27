import { signInUser, signUpUser } from "./features/authSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getUserInfo } from "./selectors/authSelector";
import { store } from "./store";

export { store, useAppDispatch, useAppSelector, getUserInfo, signUpUser, signInUser };
