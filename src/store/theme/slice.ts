import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light';

const initialState = 'light' as Theme;

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (_, { payload }: PayloadAction<Theme>) => payload,
        reset: () => initialState,
    },
});

export const { reset, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
