import { queryKey } from "@/react-query/constants"
import { setPokemonList } from "@/redux/features/pokemon.feature"
import { useAppDispatch } from "@/redux/hooks"
import { useQuery } from "@tanstack/react-query"

import { fetchGetPokemonList } from "./api"

class PokemonService {
  public GetPokemonList = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading } = useQuery(
      [queryKey.POKEMON_LIST],
      async () => await fetchGetPokemonList(0, 50),
      {
        onSuccess: (data) => {
          dispatch(setPokemonList(data))
        },
        onError: (error) => {
          console.log(error)
        },
      }
    )
    return { data, isLoading }
  }
}

export const pokemonService = new PokemonService()
