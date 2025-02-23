import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export function useSearchUsers(
  role: string,
  status: string,
  shouldFetch: boolean
) {
  return useQuery({
    queryKey: [role, status],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/users/search`, {
        params: { role, status },
      })
      return data
    },
    enabled: shouldFetch,
  })
}

export function useCreateUser() {
  return useMutation({
    mutationFn: async (userData: {
      name: string
      email: string
      role: string
    }) => {
      const { data } = await axios.post(`${API_URL}/users/create`, userData)
      return data
    },
  })
}
