import useSWR from 'swr'
import { client } from './api'

export function useEndpoint() {
  const { data, error, isLoading } = useSWR('/api/', async () => await client.api.$get().then(async (res) => {
    if (res.ok)
      return await res.json()
  }))

  return {
    data,
    isLoading,
    isError: error,
  }
}
