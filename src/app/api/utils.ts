import { API_PRFIX, API_URL} from "@/lib/constants"

type fetchType = {
    type: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    token?: string,
    data?: any,
    tokenType?: 'Bearer' | 'Refresh'
}
export const fetchApi = ({type, path ,token, data, tokenType}: fetchType)=>{
    const prefixToken = tokenType ?? 'Bearer'


    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': token ? `${prefixToken} ${token}` : ''
    }

    const config = {
        method: type,
        headers
    }

    const bodyConfig = {
        ...config,
        body: JSON.stringify(data)
    }
    console.log("LAAA",`${API_URL}${API_PRFIX}${path}`)
    return fetch(`${API_URL}${API_PRFIX}${path}`, 
            type === "GET" || type === "DELETE" 
                ? config 
                : bodyConfig
            ).then((res: any)=>{
                return res.json()
            }).then((response: any)=>{
                return response
            })
            .catch((err)=>{
                console.log(err)
                return err
            })

}