export default class AdatLista{
    
    #kutyaAdatLista= [
        { nev:"Szimat", kor:3, nem:"nőstény"},
        { nev:"Kevin",  kor:6, nem:"hím"},
        { nev:"Szilva", kor:2, nem:"nőstény"},
    ];

    #lista=[];
    constructor(lista){
        this.#lista=lista;
       
    }


    getList(){
        return this.#kutyaAdatLista;
    }

    torol(lista, id) {
    lista.splice(id, 1);
    return lista;
    }
    
}