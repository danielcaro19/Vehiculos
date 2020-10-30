export class automovil{
    private marca: string
    private afab: number
    private matricula: string
    private arrancado: boolean = false
    private velocidad: number = 0
    private _consumo: number = 0
    private combustible: number = 0

    constructor(Marca:string,Matricula:string,Afab:number,Combustible:number){ 
        this.marca = Marca
        this.matricula = Matricula
        this.combustible = Combustible
        this.afab = Afab
    }

    get Matricula(){
        return this.matricula
    }

    Consumo(){
        if (this.marca == "Audi"){
            if (this.afab < 1995){
                var _consumo = 7
            } else if(this.afab < 2000){
                var _consumo = 6.84
            } else if (this.afab < 2005){
                var _consumo = 6.52 
            } else if (this.afab < 2010){
                var _consumo = 5.4
            } else if(this.afab < 2015){
                var _consumo = 5.63
            } else if(this.afab <= 2020){
                var _consumo = 5.06
            }
        } else if (this.marca = "BMW"){
            if (this.afab < 1995){
                var _consumo = 8
            } else if(this.afab < 2000){
                var _consumo = 7.67
            } else if (this.afab < 2005){
                var _consumo = 7.53
            } else if (this.afab < 2010){
                var _consumo = 6.68
            } else if(this.afab < 2015){
                var _consumo = 6.05
            } else if(this.afab <= 2020){
                var _consumo = 5.78
            }
        } else if (this.marca = "Mercedes"){
            if (this.afab < 1995){
                var _consumo = 7.62
            } else if(this.afab < 2000){
                var _consumo = 6.89
            } else if (this.afab < 2005){
                var _consumo = 6.42
            } else if (this.afab < 2010){
                var _consumo = 5.86
            } else if(this.afab < 2015){
                var _consumo = 5.63
            } else if(this.afab <= 2020){
                var _consumo = 5.31
            }
        } else if (this.marca = "Seat"){
            if (this.afab < 1995){
                var _consumo = 6
            } else if(this.afab < 2000){
                var _consumo = 5.84
            } else if (this.afab < 2005){
                var _consumo = 5.52
            } else if (this.afab < 2010){
                var _consumo = 4.6
            } else if(this.afab < 2015){
                var _consumo = 4.33
            } else if(this.afab <= 2020){
                var _consumo = 4.06
            }
        } else if (this.marca = "Opel"){
            if (this.afab < 1995){
                var _consumo = 6
            } else if(this.afab < 2000){
                var _consumo = 6
            } else if (this.afab < 2005){
                var _consumo = 5.78
            } else if (this.afab < 2010){
                var _consumo = 5.53
            } else if(this.afab < 2015){
                var _consumo = 5.25
            } else if(this.afab <= 2020){
                var _consumo = 5.05
            }
        }
        var Consumo = _consumo
        return Consumo
    }

    get Combustible(){
        this.combustible = this.combustible - (/*tiempoA * */this.velocidad) / this._consumo
        if (this.combustible < 10){
           throw "Tiene que ir a repostar"
        }
        let parada = `Aún no tiene por que hacer una parada le quedan: ${this.combustible} L`
        return parada
    }

    Arrancar(){
        this.arrancado=true
    }

    Detener(){
        this.arrancado=false
    }
    
    get Velocidad(){
        return this.velocidad
    }

    set Velocidad(num:number){
        if(this.arrancado==false){
            throw 'No puedes cambiar la velocidad si el automovil esta parado, por favor arranque el automovil para cambiarla'
        } else {
            this.velocidad=num
        }
    }

    get Arrancado(){
        return this.arrancado
    }

    Imprimir(){
        return `El automovil con matricula ${this.matricula} de marca ${this.marca}, fabricado en ${this.afab}`
    }

}