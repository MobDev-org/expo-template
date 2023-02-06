import { combineReducers } from '@reduxjs/toolkit';

import theme from './theme/slice';

const rootReducer = combineReducers({
    theme,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
