import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
} as {
  value: number
}

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement, reset } = counter.actions
export default counter.reducer
