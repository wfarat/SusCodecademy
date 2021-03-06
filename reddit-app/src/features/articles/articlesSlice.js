import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Reddit from '../../util/reddit/Reddit';

export const loadArticles = createAsyncThunk('articles/loadArticles', 
async (data) => { 
    const res = await Reddit.getArticles(data);
    return res;
})
const articlesSlice = createSlice({
    name: 'articles',
    initialState: {data: {}, status: 'idle'},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadArticles.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(loadArticles.fulfilled, (state,action) => {
                state.status = 'idle';
                state.data = {};
                action.payload.map(ar => state.data[ar.id] = ar)
            })
    }    
})
export const selectArticles = (state) => state.articles.data;
export const selectStatus = (state) => state.articles.status;
export default articlesSlice.reducer;