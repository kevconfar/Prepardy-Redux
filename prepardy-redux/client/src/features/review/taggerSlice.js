import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const taggerSlice = createSlice({
    name: 'tagger',
    initialState: {
        autoTags: [],
        userTags: []
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

export default taggerSlice.reducer;