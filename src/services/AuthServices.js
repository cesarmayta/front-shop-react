import {API_URL} from "../lib/Enviroments";

export const LoginService = async (user) => {
    const response = await fetch(`${API_URL}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    const status = response.status;
    console.log(data);
    return {data,status}
}