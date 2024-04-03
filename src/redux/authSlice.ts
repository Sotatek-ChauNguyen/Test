import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  user?: any;
}

const initialState: IAuthState = {
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { updateUser } = authSlice.actions;
export const selectUser = (state: IAuthState) => state.user;
export default authSlice.reducer;
