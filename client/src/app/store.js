import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/AuthSlice';
import projectSlice from '../features/projects/projectSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    projects: projectSlice,
  },
});
