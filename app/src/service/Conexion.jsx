import axios from "axios";

const API_URL = 'http://localhost:8080/api/'

class Conexion {
    agregarAlumno(alumno){
        return axios.post(API_URL, alumno)
    }
}

export default new Conexion