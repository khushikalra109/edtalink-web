import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export const submitContact = async (payload) => {
  const response = await axios.post(`${API_URL}/contact`, payload)
  return response.data
}
