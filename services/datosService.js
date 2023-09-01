import autores from '../data/autores.json'
import generos from '../data/generos.json'
import libros from '../data/libros.json'

import axios from "axios";

const autoresApi = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
})
const getAutores = async () =>{
    try {
        const response = await autoresApi.get('autores')
        return response.data
        
    } catch (error) {
        
        return JSON.parse(JSON.stringify(autores))
    } 
}
const getLibros = async (size = 1000,page = 0) =>{
    // set timeout to simulate network delay
    //  await new Promise(resolve => setTimeout(resolve, 5000));
    try {
        const response = await autoresApi.get(`libros?size=${size}&page=${page}`)
        return response.data     
        
    } catch (error) {
    
        let datos = JSON.parse(JSON.stringify(libros))
        datos = datos.slice(page*size,(page*size)+size)
        return {
            datos,
            pagination: {
                page,
                size,
                total: libros.length,
                pageCount: Math.ceil(libros.length/size)
            }
        }
    }
         
}

const getGenero = async () =>{
    try {
        const response = await autoresApi.get('generos')
        return response.data
        
    } catch (error) {
     
        return JSON.parse(JSON.stringify(generos))
    }
}

const getLibrosBySlug = async (value) => {
    let data = JSON.parse(JSON.stringify(libros));
    data = data.find(libro => libro.slug === value);
    return data;
} 
const getLibrosByGenero = async (value,size = 1000,page = 0) => {
    let data = JSON.parse(JSON.stringify(libros));
    data = data.filter(libro => libro.generos.includes(value));
    const datos = data.slice(page*size,(page*size)+size)
    return {
        datos,
        pagination: {
            page,
            size,
            total: libros.length,
            pageCount: Math.ceil(libros.length/size)
        }
    }
}
const getLibrosByAutor = async (value,size = 1000,page = 0) => {
    let data = JSON.parse(JSON.stringify(libros));
    data = data.filter(libro => libro.autor === value);
    const datos = data.slice(page*size,(page*size)+size)
    return {
        datos,
        pagination: {
            page,
            size,
            total: libros.length,
            pageCount: Math.ceil(libros.length/size)
        }
    }
}
const nuevaOrden = async () => {
    
}

export {getAutores,getGenero,getLibros, getLibrosByAutor,getLibrosByGenero, getLibrosBySlug}