import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  language: string;
}

const initialState: IAuthState = {
  language: 'VN'
};

export const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { changeLanguage } = authSlice.actions;
export const selectUser = (state: IAuthState) => state.language;
export default authSlice.reducer;
