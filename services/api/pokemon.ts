import { axiosInstance, getJWTHeader } from "@/axiosInstance"
import { IZPokemonList, PokemonListSchema } from "@/types"

export const fetchGetPokemonList = async (
  offset: number,
  limit: number
): Promise<IZPokemonList> => {
  try {
    const response = await axiosInstance.get(
      `/pokemon?offset=${offset}&limit=${limit}`
    )
    return PokemonListSchema.parse(response.data)
  } catch (error) {
    console.error("[ERROR] fetchGetPokemonList", error)
    return PokemonListSchema.parse({})
  }
}
