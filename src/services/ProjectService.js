import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${ process.env.VUE_APP_BASE_URL_API }`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getProjects() {
    return apiClient.get(`/projects/`)
  },
  getProjectBySlug(slug) {
    return apiClient.get(`/projects/${ slug }`)
  }
}