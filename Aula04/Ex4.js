class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método da classe base
    fazerSom() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  // extends herança, a classe cachorro herda da classe animal algumas 
  // características como nome e idade
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      // Chama o construtor da classe base
      super(nome, idade);
      this.raca = raca;
    }
    // Método sobrescrito
    fazerSom() {
      console.log(`${this.nome} late.`);
    }
    // Método adicional
    exibirInfo() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
  }
  