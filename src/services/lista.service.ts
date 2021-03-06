import { Injectable } from "@angular/core";
import { ListCocheOption, ListMotoOption, ListPCOption, ListLavadoraOption, ListFrigoOption, ListLavavajillasOption, ListSecadoraOption, ListHornoOption, ListMicroOption } from "../interfaces/lista";

@Injectable()
export class ListaService {

    listaCoche: ListCocheOption[] = [];
    listaMoto: ListMotoOption[] = [];
    listaPC: ListPCOption[] = [];
    listaLavadora: ListLavadoraOption[] = [];
    listaFrigo: ListFrigoOption[] = [];
    listaLavavajillas: ListLavavajillasOption[] = [];
    listaSecadora: ListSecadoraOption[] = [];
    listaHorno: ListHornoOption[] = [];
    listaMicro: ListMicroOption[] = [];

    constructor(){
        
        this.cargarStorage();
        
        // const lista1 = new Lista('Recolectar piedras del infinito');
        // const lista2 = new Lista('Héroes a vencer');

        // this.listas.push(lista1, lista2);
        // console.log( this.listas );
        
    }

    agregarItem( lista: any ) {
        switch(lista.subcategoria){
            case 'COCHE':
                this.listaCoche.push(lista);
                break;
            case 'MOTO':
                this.listaMoto.push(lista);
                break;
            case 'PC':
                this.listaPC.push(lista);
                break;
            case 'LAVADORA':
                this.listaLavadora.push(lista);
                break;
            case 'FRIGORÍFICOS':
                this.listaFrigo.push(lista);
                break;
            case 'LAVAVAJILLAS':
                this.listaLavavajillas.push(lista);
                break;
            case 'SECADORAS':
                this.listaSecadora.push(lista);
                break;
            case 'HORNOS':
                this.listaHorno.push(lista);
                break;
            case 'MICROHONDAS':
                this.listaMicro.push(lista);
                break;
            default:
                console.log('No se ha podido agregar el objeto.');
                break;
        };
        
        this.guardarStorage();
    }

    borrarLista( lista: any ) {
        this.listaCoche = this.listaCoche.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaMoto = this.listaMoto.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaPC = this.listaPC.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaLavadora = this.listaLavadora.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaFrigo = this.listaFrigo.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaLavavajillas = this.listaLavavajillas.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaSecadora = this.listaSecadora.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaHorno = this.listaHorno.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaMicro = this.listaMicro.filter( listaData => {
            return listaData.id !== lista.id;
        });

        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('dataCoche', JSON.stringify( this.listaCoche ));
        localStorage.setItem('dataMoto', JSON.stringify( this.listaMoto ));
        localStorage.setItem('dataPC', JSON.stringify( this.listaPC ));
        localStorage.setItem('dataLavadora', JSON.stringify( this.listaLavadora ));
        localStorage.setItem('dataFrigo', JSON.stringify( this.listaFrigo ));
        localStorage.setItem('dataLavavajillas', JSON.stringify( this.listaLavavajillas ));
        localStorage.setItem('dataSecadora', JSON.stringify( this.listaSecadora ));
        localStorage.setItem('dataHorno', JSON.stringify( this.listaHorno ));
        localStorage.setItem('dataMicro', JSON.stringify( this.listaMicro ));
    }

    cargarStorage() {

        if( localStorage.getItem('dataCoche') ){
            this.listaCoche = JSON.parse( localStorage.getItem('dataCoche') );
        } else{
            this.listaCoche = [];
        }
        
        if( localStorage.getItem('dataMoto') ){
            this.listaMoto = JSON.parse( localStorage.getItem('dataMoto') );
        } else{
            this.listaMoto = [];
        }

        if( localStorage.getItem('dataPC') ){
            this.listaPC = JSON.parse( localStorage.getItem('dataPC') );
        } else{
            this.listaPC = [];
        }

        if( localStorage.getItem('dataLavadora') ){
            this.listaLavadora = JSON.parse( localStorage.getItem('dataLavadora') );
        } else{
            this.listaLavadora = [];
        }

        if( localStorage.getItem('dataFrigo') ){
            this.listaFrigo = JSON.parse( localStorage.getItem('dataFrigo') );
        } else{
            this.listaFrigo = [];
        }

        if( localStorage.getItem('dataLavavajillas') ){
            this.listaLavavajillas = JSON.parse( localStorage.getItem('dataLavavajillas') );
        } else{
            this.listaLavavajillas = [];
        }

        if( localStorage.getItem('dataSecadora') ){
            this.listaSecadora = JSON.parse( localStorage.getItem('dataSecadora') );
        } else{
            this.listaSecadora = [];
        }

        if( localStorage.getItem('dataHorno') ){
            this.listaHorno = JSON.parse( localStorage.getItem('dataHorno') );
        } else{
            this.listaHorno = [];
        }

        if( localStorage.getItem('dataMicro') ){
            this.listaMicro = JSON.parse( localStorage.getItem('dataMicro') );
        } else{
            this.listaMicro = [];
        }


    }
    
}