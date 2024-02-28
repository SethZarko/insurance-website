import axios from 'axios'

// Login Admin
export const axiosClientLogin = axios.create({
    baseURL: import.meta.env.VITE_API_LOGIN_URL,
    withCredentials: true
})

axiosClientLogin.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

axiosClientLogin.interceptors.response.use((response) => {
    return response
}, (error) => {

    try {
        const { response } = error
        if(response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN')
        } 
    } catch (error) {
        console.log(error);
    }

    throw error
})


// Get Admin
export const axiosClientGetAdmin = axios.create({
    baseURL: import.meta.env.VITE_API_GET_ADMIN_URL,
    withCredentials: true
})

axiosClientGetAdmin.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

// Create Form Post
export const axiosClientPostForm = axios.create({
    baseURL: import.meta.env.VITE_API_POST_FORM_URL
})