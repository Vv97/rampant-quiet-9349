import axios from "axios"

export const getLocalData = (key) => {
    try {
        let temp = JSON.parse(localStorage.getItem(key))
        return temp
    } catch (e) {
        return undefined
    }
}


export const setLocalDate = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}


export const Registerdata = (data) => {
    axios.post(`http://localhost:8080/register`, data)

}