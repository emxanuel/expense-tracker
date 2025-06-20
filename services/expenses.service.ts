import { apiClient } from "@/config"
import { IExpenses } from "@/types/expenses"
import { useQuery } from "@tanstack/react-query"

export const useGetExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: async () => {
      const response = await apiClient.get<IExpenses[]>('/api/expenses/')
      return response.data
    }
  })
}