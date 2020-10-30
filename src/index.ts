import { automovil} from './clases/automovil'
import { menu, menu2 } from './views/menus'
import { leerTeclado } from './views/entradaTeclado'




const main = async() => {
    let coches: Array<automovil> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Creación del automovil')
                let marca:string,matricula:string,combustible:number,afab:number
                try {
                    marca = await leerTeclado('Introduzca la marca de su automovil(BMW,Seat,Mercedes,Opel,Audi)')
                    matricula = await leerTeclado('Introduzca la matricula de su automovil(000AA)')
                    combustible = parseFloat(await leerTeclado('Introduzca la cantidad de gasolina que tiene el automovil(max 100)'))
                    afab = parseInt(await leerTeclado('Introduzca el año de fabricación de su automovil(1990-2020)'))
                    let coche=new automovil(marca,matricula,combustible,afab)
                    let existe = false
                    coches.forEach(Coche => {
                        if (coche.Matricula == Coche.Matricula){
                            existe=true
                        }
                    })
                    if (existe){
                        console.log('El automovil introducido ya existe, por favor introduzca un automovil nuevo')
                    } else{
                        coches.push(coche)
                    }
                } catch (error) {
                    console.log(error)
                }
                break
            case 2:
                if (coches.length==0){
                    console.log('No existen automoviles creados, por favor vaya a la opcion 1 y cree uno')
                } else {
                    console.log('Mostrando la lista de automoviles')
                    coches.forEach(Coche => {
                        console.log(`${Coche.Imprimir()}`)
                    })
                }
                break
            case 3:
                console.log('Eliminando un automovil')
                if (coches.length==0){
                    console.log('No existen automoviles creados, por favor vaya a la opcion 1 y cree un automovil')
                } else {
                    console.log('Estos son los automoviles creados')
                    coches.forEach(Coche => {
                        console.log(`${Coche.Imprimir()}`)
                    })
                    let mat1=await leerTeclado('Por favor introduzca el matricula del automovil que desea eliminar')
                    let existe:boolean=false
                    let index=0
                    coches.forEach(Coche => {
                        if (mat1 == Coche.Matricula){
                            index=coches.indexOf(Coche)
                            existe=true
                        }
                    })
                    if (existe){
                       coches.splice(index,1)
                    } else {
                        console.log('No existe el automovil que desea eliminar, por favor introduzca un automovil existente')
                    }
                }
                break
            case 4:
                if (coches.length==0){
                    console.log('No existen automoviles creados, porfavor vaya a la primera opcion y cree uno ')
                } else {
                    let ide:number
                    console.log('Por favor seleccione la matricula de un automovil para modificarlo')
                    coches.forEach(Coche => {
                        console.log(`${Coche.Imprimir()}`)
                    })
                    let mat= await leerTeclado('Introduzca la matricula del vehivulo')
                    let index:number=-1
                    coches.forEach(Coche => {
                        if(Coche.Matricula == mat){
                           index=coches.indexOf(Coche)
                        }
                    })
                    if(index!=-1){
                        let n2:number
                        let sCoche=coches[index]
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Mostrando el automovil elegido')
                                    console.log(sCoche.Imprimir())
                                    break
                                case 2:
                                    if(sCoche.Arrancado){
                                        try {
                                            sCoche.Detener()
                                            console.log('Deteniendo motor')
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }else{
                                        console.log('Arrancando motor')
                                        sCoche.Arrancar()
                                    }
                                    break
                                case 3:
                                    let vel:number
                                    vel=parseInt(await leerTeclado("Ha seleccionado cambiar la velocidad del automovil, por favor, introduzca la nueva velocidad del vehículo"))
                                    try {
                                      sCoche.Velocidad=vel 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    var tiempo:number
                                    try {
                                        tiempo=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el automovil a la velocidad actual, para calcular el consumo"))
                                        console.log(`El automovil ha consumido ${sCoche.Combustible(tiempo)} litros de gasolina`)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 0:
                                    console.log('\nVolviendo al menu principal')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    } else{
                        console.log('Este automovil no existe')
                    }
                }
                break
            case 0:
                console.log('\nSaliendo')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()