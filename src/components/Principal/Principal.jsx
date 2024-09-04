import { Alumno } from "./Alumno/Alumno"
import { Titulo } from "./Alumno/Titulo"

export const Principal = () => {

    //Lógica

    const nombre = 'Matias'

    const fichaAlumnos = [
        {
            nombre,
            cargo: 'docente',
            materia: 'PNT2'
        },
        {
            nombre: 'Marcos',
            cargo: 'Alumno',
            materia: 'PNT2'
        },
        {
            nombre: 'Martin',
            cargo: 'Alumno',
            materia: 'PNT2'
        },
    ]

   //Return
 
   return (
    <>
    <Titulo />
        {
            fichaAlumnos.map((alumno, index ) => (
                <Alumno key={index} datosAlumno={alumno} edades={27} fichaAlumnos />
            ))
        }
    
    </>
  )
}
