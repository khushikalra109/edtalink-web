import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export const submitInternship = async (formData) => {
  const data = new FormData()

  Object.entries(formData).forEach(([key, value]) => {
    if (value instanceof File || value instanceof Blob) {
      data.append(key, value, value.name || `${key}.pdf`)
    } else if (value !== undefined && value !== null) {
      data.append(key, value)
    }
  })

  const response = await axios.post(`${API_URL}/internship`, data)

  return response.data
}
