import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		increment: (state /*, action */) => {
			state.counter += 1;
		},
	}
});

export const { increment } = authSlice.actions;