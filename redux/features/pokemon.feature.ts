import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { IZPokemonList } from "@/types/pokemon"

import { RootState } from "../store"

const initialState: IZPokemonList = {
  count: 0,
  next: "",
  previous: null,
  results: [],
}

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<IZPokemonList>) => {
      state.count = action.payload.count
      state.next = action.payload.next
      state.previous = action.payload.previous
      state.results = action.payload.results
    },
  },
})

//? Actions & Selectors
export const { setPokemonList } = pokemonSlice.actions
export const pokemonSelector = (store: RootState) => store.pokemon
export default pokemonSlice.reducer
