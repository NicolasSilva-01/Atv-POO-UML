class Personagem {
    #vida;
    constructor(nome, poderAtaque) {
        this.nome = nome;
        this.poderAtaque = poderAtaque;
        this.#vida = 500;
    }

    receberDano(valor) {
        this.#vida -= valor;
        if (this.#vida < 0) this.#vida = 0;
        console.log(`${this.nome} sofreu ${valor} de dano`);

    }

    exibirStatus() {
        console.log(`${this.nome} | Hp: ${this.#vida}`);
    }
}

class Guerreiro extends Personagem {
    constructor(nome, forcaFisica, ataque) {
        super(nome, ataque);
        this.forcaFisica = forcaFisica;
    }

    atacar(inimigo) {
        let danoTotal = this.poderAtaque + this.forcaFisica;
        console.log(`${this.nome} se aproxima em velocidade contra o ${inimigo} com sua espada de kevlar`)
        inimigo.receberDano(danoTotal);
    }
}

class Mago extends Personagem {
    constructor(nome, poderMagico, ataque) {
        super(nome, ataque);
        this.poderMagico = poderMagico;
    }

    atacar(inimigo) {
        const danoTotal = this.poderAtaque + this.poderMagico * 3;
        console.log(`${this.nome} evocou uma maldição antiga de askaban!!!`);
        inimigo.receberDano(danoTotal);
    }
}

const heroi = new Guerreiro('Trovozan', 60, 80);
const vilao = new Mago('Kotvader trevius', 55, 70);

heroi.exibirStatus();
vilao.exibirStatus();

heroi.atacar(vilao);
vilao.atacar(heroi);

heroi.exibirStatus();
vilao.exibirStatus();