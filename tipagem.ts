// Tipagem de dados typescript

class Default {
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;
    array: Array<any>;



constructor(){
    this.metodo();
    this.array = [
        {
            teste: "teste"
        }
    ];
}
metodo() {
    this.numero = 10;
    this.texto = `Este é um alert simples em Typescript ${this.numero}`;
    return alert(this.texto);
}
}