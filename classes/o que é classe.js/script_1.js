class Pessoa {
    // O construtor é chamado automaticamente quando a classe é instanciada
    constructor(nome, idade) {
        this.nome = nome; // Propriedade 'nome' do objeto
        this.idade = idade; // Propriedade 'idade' do objeto
    }

    // Método que pode ser chamado em qualquer instância de Pessoa
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Criando uma instância (objeto) da classe Pessoa
let joao = new Pessoa('João', 25);

// Usando o método da instância
joao.falar(); // Saída: Olá, meu nome é João e tenho 25 anos.


