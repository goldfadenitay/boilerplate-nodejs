import { useQuery, useMutation } from '@tanstack/vue-query'
import axios from 'axios'
import { Ref } from 'vue'

const API_URL = 'http://localhost:3000/api'

export function useSearchUsers(role: Ref<string>, status: Ref<string>) {
  return useQuery({
    queryKey: [role, status],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/users/search`, {
        params: { role: role.value, status: status.value },
      })
      return data
    },
    enabled: !!role.value || !!status.value,
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
