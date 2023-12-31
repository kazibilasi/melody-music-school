import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


const useAxiosSecure = () => {

    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    const axiosSecure = axios.create({
        baseURL: 'https://music-school-server-nu.vercel.app'
    
    
    })
   

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        })

        axiosSecure.interceptors.response.use((response) => response,)
        async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        }
    }, [logOut, navigate, axiosSecure])
    return [axiosSecure]
};

export default useAxiosSecure;