import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import projectService from './projectService'

const initialState = {
    projects: [],
    project:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createProject = createAsyncThunk('projects/create',
    async(projectData, thunkAPI)=>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await projectService.createProject(projectData, token)
        } catch (error) {
            const message = ( error.response && error.response.data && error.response.data.message )
            || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

export const getProject = createAsyncThunk('projects/getAll',
    async(_, thunkAPI)=>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await projectService.getProject(token)
        } catch (error) {
            const message = ( error.response && error.response.data && error.response.data.message )
            || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

export const projectSlice = createSlice({
    name:'projects',
    initialState,   
    reducers:{
        reset:(state) => initialState
    },
    extraReducers: (builder) => {
          builder
            .addCase(createProject.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(createProject.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createProject.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getProject.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getProject.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.projects = action.payload
            })
            .addCase(getProject.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = projectSlice.actions
export default projectSlice.reducer