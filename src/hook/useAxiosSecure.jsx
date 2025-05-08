import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {

    axiosSecure.interceptors.response.use(res => {
        console.log(res)
        return res;
    },
        err => {
            console.log(err)
            return Promise.reject(err)
        })

    return axiosSecure;
};

export default useAxiosSecure;