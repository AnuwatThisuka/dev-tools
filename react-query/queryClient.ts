import { QueryClient } from "@tanstack/react-query"

function queryErrorHandler(error: any) {
  console.error(error)
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000,
        cacheTime: 900000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: false,
      },
    },
  })
}

export const queryClient = generateQueryClient()
