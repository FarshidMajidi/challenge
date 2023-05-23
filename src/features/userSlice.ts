import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser, getUsers } from "../services";

type InitialState = {
  users: IUser[];
  filterUsers: IUser[];
  error: string;
};

const initialState: InitialState = {
  users: [],
  filterUsers: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", getUsers);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    searchByName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filterUsers: state.users.filter((user) =>
          user.username.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
        state.filterUsers = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.users = [];
      state.filterUsers = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
export const {searchByName} = userSlice.actions;
