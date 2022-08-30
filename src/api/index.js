import axios from "axios";

const url =  `${process.env.REACT_APP_BASE_URL}/users/auth`


//AUTH
export const loginApi = (data) => axios.post(url + '/login',data)
export const registerApi = (data) => axios.post(url,data)

export const loadUserApi = (id) => axios.get(url + `/${id}`)






const url2 =  `${process.env.REACT_APP_BASE_URL}/events`
export const fetchEvent= () => axios.get(url2)