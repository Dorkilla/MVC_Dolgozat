export default class Kartya{
    #kutyaAdat={};
    #szuloElem;

    constructor(adat,szuloElem){
        this.#kutyaAdat=adat;
        this.#szuloElem=szuloElem;
        this.kutyaKiir()
        this.gombElem=$(".kivalaszt:last")
        this.gombKattint()
    }

    kutyaKiir(){
        const txt = `<div class="card col-lg-4 col-md-6">
        <div class="card-body">
        <h3 class="card-title">Név: ${this.#kutyaAdat.nev}</h3>
        <p class="card-text">Név: ${this.#kutyaAdat.kor}</p>
        <p class="card-text">Név: ${this.#kutyaAdat.nem}</p>
        </div>
        <button class="kivalaszt btn tbn-success">Kiválaszt</button>
        <button class="torles btn btn-success">Törlés</button>
        </div>`;
        this.#szuloElem.innerHTML += txt;
        
    }

    gombKattint(){
        this.gombElem.on("click", () => {
            const e = new CustomEvent("kattintas", {detail:this.#kutyaAdat});
            window.dispatchEvent(e);
        })
    }

    
}