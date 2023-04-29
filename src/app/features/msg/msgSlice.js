import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  autoHideDuration: null,
  msg: '',
};

const msgSlice = createSlice({
  name: 'msg',
  initialState,
  reducers: {
    showMsg: (state, { payload }) => {
      state.open = true;
      state.autoHideDuration = 5000;
      state.msg = payload;
    },
    hiddenMsg: (state) => {
      state.open = false;
      state.autoHideDuration = null;
      state.msg = '';
    },
  },
});

export const { showMsg, hiddenMsg } = msgSlice.actions;
export default msgSlice.reducer;
