import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'tagger',
    initialState: {
        

    },
    reducers: {
        addAutoTags(state, action) {
            state.autoTags.push(action.payload);
        },
        addUserTags(state, action) {
            state.userTags.push(action.payload);
        }
    }
});