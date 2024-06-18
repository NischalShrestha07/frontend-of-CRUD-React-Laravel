import React from 'react'
import axios from 'axios'
import api from './components/api'
const api = () => {
    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            'content-type': 'application/json'
        }
    })
    return (
        <>
            http
        </>
    )

}

export default api
/*
import React from 'react'
import axios from 'axios'
const api = () => {
    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            'content-type': 'application/json'
        }
    });
    return (
        http
    )
}*/

// export default api
