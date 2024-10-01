export default class AdatLista{
    #kutyaAdatLista= [
        { nev:"Szimat", kor:3, nem:"nőstény"},
        { nev:"Kevin",  kor:6, nem:"hím"},
        { nev:"Szilva", kor:2, nem:"nőstény"},
    ];

    getList(){
        return this.#kutyaAdatLista;
    }
}