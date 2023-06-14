import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type',type)
    return data
}

export const fetchType = async () => {
    const {data} = await $host.post('api/type')
    return data
}