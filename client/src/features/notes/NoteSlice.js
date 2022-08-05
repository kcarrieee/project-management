import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import noteService from './NoteService'

const initialState = {
    notes:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
export const getNotesData = createAsyncThunk('notes/getAll',
    async(projectId, thunkAPI)=>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await noteService.getNotes(projectId, token)
        } catch (error) {
            const message = ( error.response && error.response.data && error.response.data.message )
            || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// Create ticket note
export const createNote = createAsyncThunk(
  'notes/create',
  async ({ noteText, projectId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.createNote(noteText, projectId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const noteSlice = createSlice({
    name:'notes',
    initialState,   
    reducers:{
        reset:(state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotesData.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getNotesData.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.notes = action.payload
            })
            .addCase(getNotesData.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createNote.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createNote.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.notes.push(action.payload)
            })
            .addCase(createNote.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
         
            
    }
})

export const { reset } = noteSlice.actions
export default noteSlice.reducer