import {createSlice} from '@reduxjs/toolkit'
export const languajeSlice = createSlice({
  name: "languajes",
  initialState: {
    value : true
  },
  reducers: {
    setLanguajes: (state, action) => {
      state.value = action.payload
    }
  }
})
export default languajeSlice.reducer;
export const {setLanguajes} = languajeSlice.actions