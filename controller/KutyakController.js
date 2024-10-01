import Kartyak from "../view/Kartyak.js";
import AdatLista from "../model/AdatLista.js";

export default class KutyakController{
    constructor(){
        this.tartalomElem=$(".tartalom")[0];
        this.adatLista = new AdatLista();
        new Kartyak(this.adatLista.getList(), this.tartalomElem);

        this.#esemenykezelo();
      
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event) =>{
            console.log(event.detail);
        new Kartyak(this.adatLista.getList(), this.tartalomElem);
        })
    }


    }

