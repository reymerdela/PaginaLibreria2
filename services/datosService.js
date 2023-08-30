import axios from "axios";

const autoresApi = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
})
const getAutores = async () =>{
    try {
        const response = await autoresApi.get('autores')
        return response.data
        
    } catch (error) {
        console.log(error);
    }
}
const getLibros = async () =>{

    // set timeout to simulate network delay
    //  await new Promise(resolve => setTimeout(resolve, 5000));
            const response = await autoresApi.get('libros')
            return response.data  
       
         
}
const getGenero = async () =>{
    const response = await autoresApi.get('generos')
    return response.data
}
export {getAutores,getGenero,getLibros}