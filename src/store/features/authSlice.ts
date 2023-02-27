import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseErrorCode, FirebaseErrorMessage, getFBErrorMessage } from "utils/firebaseErrors";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface AuthProps {
  name: string;
  email: string | null;
  password: string;
  isAuth: boolean;
  error: null | string;
  isLoading: boolean;
}

const initialState: AuthProps = {
  name: "",
  email: "",
  password: "",
  isAuth: false,
  error: null,
  isLoading: false,
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null; userName: string },
  { email: string; name: string; password: string },
  { rejectValue: FirebaseErrorMessage }
>("user/signUpUser", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const userName = name;
    return { userEmail, userName };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const signInUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; name: string; password: string },
  { rejectValue: FirebaseErrorMessage }
>("user/signInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = signInWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getLogOutUser: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.userEmail;
      state.name = payload.userName;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.isAuth = false;
        state.error = payload;
      }
    });
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.isAuth = false;
        state.error = payload;
      }
    });
  },
});

export default authSlice.reducer;
export const { getLogOutUser } = authSlice.actions;
