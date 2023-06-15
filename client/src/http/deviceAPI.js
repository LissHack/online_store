import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async (typeId, brandId, page, limit = 3) => {
    const {data} = await $host.get('api/brand', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}
export const fetchOneDevices = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
