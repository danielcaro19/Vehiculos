import { leerTeclado } from './entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Añadir automovil')
    console.log('2.- Ver automoviles')
    console.log('3.- Borrar automovil')
    console.log('4.- Modificar automovil')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('Seleccione una opción: ') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Ver automovil')
    console.log('2.- Arrancar/Detener motor')
    console.log('3.- Cambiar automovil')
    console.log('4.- Calcular consumo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('Seleccione una opción: ') )
    return n
}