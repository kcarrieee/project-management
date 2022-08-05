import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/AuthSlice';
import projectSlice from '../features/projects/projectSlice';
import noteSlice from '../features/notes/NoteSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    projects: projectSlice,
    notes: noteSlice
  },
});
