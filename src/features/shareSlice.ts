import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITag {
  id: number;
  title: string;
}

type InitialState = {
  list: ITag[];
};

const initialState: InitialState = {
  list: [],
};

const shareSlice = createSlice({
  name: "shareList",
  initialState,
  reducers: {
    addItem: (state: InitialState, action: PayloadAction<ITag>) => {
      state.list = [...state.list, action.payload];
    },

    removeItem: (state: InitialState, action: PayloadAction<ITag>) => {
      state.list.splice(
        state.list.findIndex((arrow) => arrow === action.payload),
        1
      );
    },

    clearList: (state: InitialState) => {
      state.list = [];
    },
  },
});

export default shareSlice.reducer;
export const { addItem, removeItem,clearList } = shareSlice.actions;
