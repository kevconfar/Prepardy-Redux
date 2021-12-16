import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




const pauseTimeForAnswer = createAsyncThunk(
    "timer/pauseTimeForAnswer",
    () => {

    }
)

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        elapsed: 0,
        paused: true,
        

    }
})

